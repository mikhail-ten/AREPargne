export interface SubChapitre {
  label: string;
  href: string;
}

export interface NavigationItem {
  chapitre: string;
  slug: string;
  shortTitle?: string;
  sousChapitre: SubChapitre[];
}

interface PageModule {
  frontmatter: {
    title: string;
  };
}

interface MetaModule {
  default: {
    title: string;
  };
}

const pageModules = import.meta.glob<PageModule>('../pages/*/*.mdx');

const metaModules = import.meta.glob<MetaModule>(
  '../pages/*/metadata.ts',
  { eager: true },
);

export async function getNavigation(): Promise<NavigationItem[]> {
  const entries = await Promise.all(
    Object.entries(pageModules).map(async ([path, loader]) => {
      const module = await loader();
      return [path, module] as [string, PageModule];
    }),
  );

  return entries.reduce((acc: NavigationItem[], [path, module]) => {
    const [, , slug, file] = path.split('/');
    const href = `/${slug}/${file.replace(/\.mdx$/, '')}`;
    const label = module.frontmatter.title;

    let item = acc.find((i) => i.slug === slug);
    if (!item) {
      const meta = metaModules[`../pages/${slug}/metadata.ts`];
      item = { chapitre: meta.default.title, slug, sousChapitre: [] };
      acc.push(item);
    }

    item.sousChapitre.push({ label, href });
    return acc;
  }, []);
}
