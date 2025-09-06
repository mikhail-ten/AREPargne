export interface SubChapitre {
  label: string;
  href: string;
}

export interface NavigationItem {
  chapitre: string;
  sousChapitre: SubChapitre[];
}

export const navigation: NavigationItem[] = [
  {
    chapitre: 'Chapitre I',
    sousChapitre: [
      { label: 'Sous-chapitre 1', href: '/chapitre-I/sous-chapitre-1' },
      { label: 'Sous-chapitre 2', href: '/chapitre-I/sous-chapitre-2' },
    ],
  },
  {
    chapitre: 'Chapitre II',
    sousChapitre: [
      { label: 'Sous-chapitre 1', href: '/chapitre-II/sous-chapitre-1' },
      { label: 'Sous-chapitre 2', href: '/chapitre-II/sous-chapitre-2' },
    ],
  },
  {
    chapitre: 'Chapitre III',
    sousChapitre: [
      { label: 'Sous-chapitre 1', href: '/chapitre-III/sous-chapitre-1' },
      { label: 'Sous-chapitre 2', href: '/chapitre-III/sous-chapitre-2' },
    ],
  },
  {
    chapitre: 'Chapitre IV',
    sousChapitre: [
      { label: 'Sous-chapitre 1', href: '/chapitre-IV/sous-chapitre-1' },
      { label: 'Sous-chapitre 2', href: '/chapitre-IV/sous-chapitre-2' },
    ],
  },
  {
    chapitre: 'Chapitre V',
    sousChapitre: [
      { label: 'Sous-chapitre 1', href: '/chapitre-V/sous-chapitre-1' },
      { label: 'Sous-chapitre 2', href: '/chapitre-V/sous-chapitre-2' },
    ],
  },
  {
    chapitre: 'Chapitre VI',
    sousChapitre: [
      { label: 'Sous-chapitre 1', href: '/chapitre-VI/sous-chapitre-1' },
      { label: 'Sous-chapitre 2', href: '/chapitre-VI/sous-chapitre-2' },
    ],
  },
];
