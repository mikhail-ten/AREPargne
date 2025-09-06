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
    chapitre: 'I. Epargne salariale',
    sousChapitre: [
      { label: 'Épargne salariale & ETF', href: '/chapitre-I/chapitre-I-epargne-salariale-et-etf' },
      { label: 'PEA et épargne sécurisée', href: '/chapitre-I/chapitre-I-pea-et-epargne-securisee' },
    ],
  },
  {
    chapitre: 'II. Feuille de route',
    sousChapitre: [
      { label: 'Diversification internationale & fonds indiciels', href: '/chapitre-II/chapitre-II-diversification-internationale-et-fonds-indiciels' },
      { label: 'Immobilier locatif & plan épargne retraite', href: '/chapitre-II/chapitre-II-immobilier-locatif-et-plan-epargne-retraite' },
    ],
  },
  {
    chapitre: "III. Bases de l'investissement",
    sousChapitre: [
      { label: 'Analyse fondamentale & fiscalité', href: '/chapitre-III/chapitre-III-analyse-fondamentale-et-fiscalite' },
      { label: "Effet de levier & allocation d'actifs", href: '/chapitre-III/chapitre-III-effet-de-levier-et-allocation-d-actifs' },
    ],
  },
  {
    chapitre: "IV. Supports d'investissement",
    sousChapitre: [
      { label: 'Crowdfunding & micro-épargne', href: '/chapitre-IV/chapitre-IV-crowdfunding-et-micro-epargne' },
      { label: 'Placements à court terme & inflation', href: '/chapitre-IV/chapitre-IV-placements-a-court-terme-et-inflation' },
    ],
  },
  {
    chapitre: 'V. Retraite',
    sousChapitre: [
      { label: 'Stratégie buy and hold & revenu passif', href: '/chapitre-V/chapitre-V-strategie-buy-and-hold-et-revenu-passif' },
      { label: 'Cryptomonnaies & sécurité numérique', href: '/chapitre-V/chapitre-V-cryptomonnaies-et-securite-numerique' },
    ],
  },
  {
    chapitre: 'VI. Guides pratiques',
    sousChapitre: [
      { label: 'Assurance emprunteur & refinancement', href: '/chapitre-VI/chapitre-VI-assurance-emprunteur-et-refinancement' },
      { label: 'Épargne de précaution & retraite anticipée', href: '/chapitre-VI/chapitre-VI-epargne-de-precaution-et-retraite-anticipee' },
    ],
  },
];
