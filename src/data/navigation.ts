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

const modules = import.meta.glob<PageModule>('../pages/*/*.mdx', {
  eager: true,
});

export const navigation: NavigationItem[] = Object.entries(modules).reduce(
  (acc: NavigationItem[], [path, module]) => {
    const [, , chapitre, file] = path.split('/');
    const slug = chapitre;
    const href = `/${chapitre}/${file.replace(/\\.mdx$/, '')}`;
    const label = module.frontmatter.title;

    let item = acc.find((i) => i.chapitre === chapitre);
    if (!item) {
      item = { chapitre, slug, sousChapitre: [] };
      acc.push(item);
    }

    item.sousChapitre.push({ label, href });
    return acc;
  },
  [],
);
