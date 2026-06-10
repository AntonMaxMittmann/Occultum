import { Language } from "@/app/data/defaultLanguages";

export const normalizeText = (text: string) =>
  text
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/Ä/g, "AE")
    .replace(/Ö/g, "OE")
    .replace(/Ü/g, "UE");

export const encodeText = (text: string, language?: Language) => {
  if (!language) return "";

  return [...normalizeText(text)]
    .map((char) => {
      const lower = char.toLowerCase();
      const mapped = language[lower];
      return mapped ?? char;
    })
    .join("");
};

export const decodeText = (text: string, language?: Language) => {
  if (!language) return "";

  const reverseMap: Record<string, string> = {};
  const tokens: string[] = [];

  Object.entries(language).forEach(([key, value]) => {
    if (key === "name") return;
    reverseMap[value] = key;
    tokens.push(value);
  });

  tokens.sort((a, b) => b.length - a.length);

  let result = "";
  let index = 0;

  while (index < text.length) {
    const matchedToken = tokens.find((token) => text.startsWith(token, index));

    if (matchedToken) {
      result += reverseMap[matchedToken];
      index += matchedToken.length;
      continue;
    }

    result += text[index];
    index += 1;
  }

  return result;
};
