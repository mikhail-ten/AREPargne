export interface ChapterMetadata {
  title: string;
  shortTitle?: string;
}

export const chapterMetadata: Record<string, ChapterMetadata> = {
  'Chapitre-I': { title: 'I. Épargne salariale' },
  'Chapitre-II': { title: 'II. Feuille de route' },
  "Chapitre-III": { title: "III. Bases de l'investissement" },
  "Chapitre-IV": { title: "IV. Supports d'investissement" },
  'Chapitre-V': { title: 'V. Retraite' },
  'Chapitre-VI': { title: 'VI. Guides pratiques' },
};

export function getChapterMetadata(slug: string): ChapterMetadata | undefined {
  return chapterMetadata[slug];
}
