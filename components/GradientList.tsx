import gradients from "../lib/data/gradients.json";
import { CATEGORY_KEYWORDS } from "../lib/data/gradient-categories";
import GradientCard from "./GradientCard";

import type { FC } from "react";
interface Gradient {
  name: string;
  colors: string[];
  colorsname: string[];
  keywords: string[][];
}

function matchKeywords(gradient: Gradient, keywords: string[]): boolean {
  if (!Array.isArray(gradient.keywords)) return false;
  // Flatten all keywords for the gradient and check for any match
  const flatKeywords = gradient.keywords.flat().map(word => word.toLowerCase());
  return keywords.some(keyword => flatKeywords.includes(keyword.toLowerCase()));
}

interface GradientListProps {
  category: keyof typeof CATEGORY_KEYWORDS;
}

const GradientList: FC<GradientListProps> = ({ category }) => {
  const keywords = CATEGORY_KEYWORDS[category] || [];
  // Ensure uniqueness by gradient name
  const filtered = Array.from(
    new Map(
      (gradients as Gradient[])
        .filter(g => matchKeywords(g, keywords))
        .map(g => [g.name, g])
    ).values()
  );
  return (
    <>
      {filtered.map((g) => (
        <GradientCard key={g.name} gradient={g} />
      ))}
    </>
  );
};

export default GradientList;
