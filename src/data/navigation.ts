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

const slugify = (str: string) =>
  str
    .replace(/&/g, ' et ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const chapitreSlug = (chapitre: string) => slugify(chapitre.replace(/^[IVX]+\.?\s*/, ''));

const createNavigationItem = (
  chapitre: string,
  subLabels: string[],
): NavigationItem => {
  const slug = chapitreSlug(chapitre);
  return {
    chapitre,
    slug,
    sousChapitre: subLabels.map((label) => ({
      label,
      href: `/${slug}/${slugify(label)}`,
    })),
  };
};

export const navigation: NavigationItem[] = [
  createNavigationItem('I. Epargne salariale', [
    'Épargne salariale & ETF',
    'PEA et épargne sécurisée',
  ]),
  createNavigationItem('II. Feuille de route', [
    'Diversification internationale & fonds indiciels',
    'Immobilier locatif & plan épargne retraite',
  ]),
  createNavigationItem("III. Bases de l'investissement", [
    'Analyse fondamentale & fiscalité',
    "Effet de levier & allocation d'actifs",
  ]),
  createNavigationItem("IV. Supports d'investissement", [
    'Crowdfunding & micro-épargne',
    'Placements à court terme & inflation',
  ]),
  createNavigationItem('V. Retraite', [
    'Stratégie buy and hold & revenu passif',
    'Cryptomonnaies & sécurité numérique',
  ]),
  createNavigationItem('VI. Guides pratiques', [
    'Assurance emprunteur & refinancement',
    'Épargne de précaution & retraite anticipée',
  ]),
];
