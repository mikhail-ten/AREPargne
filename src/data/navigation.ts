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

const pageModules = import.meta.glob<PageModule>('../pages/*/*.mdx', {
  eager: true,
});

const metaModules = import.meta.glob<MetaModule>(
  '../pages/*/metadata.ts',
  { eager: true },
);

export const navigation: NavigationItem[] = Object.entries(pageModules).reduce(
  (acc: NavigationItem[], [path, module]) => {
    const [, , slug, file] = path.split('/');
    const href = `/${slug}/${file.replace(/\\.mdx$/, '')}`;
    const label = module.frontmatter.title;

    let item = acc.find((i) => i.slug === slug);
    if (!item) {
      const meta = metaModules[`../pages/${slug}/metadata.ts`];
      item = { chapitre: meta.default.title, slug, sousChapitre: [] };
      acc.push(item);
    }

    item.sousChapitre.push({ label, href });
    return acc;
  },
  [],
);
