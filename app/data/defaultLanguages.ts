export type Language = {
  name: string;
  [key: string]: string;
};

export const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const createLetterMapping = (name: string, values: string[]): Language => {
  const mapping: Language = { name };
  ALPHABET.forEach((letter, index) => {
    mapping[letter] = values[index];
  });
  return mapping;
};

const createCaesarLanguage = (shift: number): Language => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const mapping: Language = { name: `Caesar-Verschlüsselung: ${shift}` };

  alphabet.split("").forEach((letter, index) => {
    mapping[letter] = alphabet[(index + shift) % 26];
  });

  return mapping;
};

const EXTRA_LANGUAGES: Language[] = [
  createLetterMapping("Entgegensetzes Alphabet", [
    "z", "y", "x", "w", "v", "u", "t", "s", "r", "q",
    "p", "o", "n", "m", "l", "k", "j", "i", "h", "g",
    "f", "e", "d", "c", "b", "a",
  ]),
  createLetterMapping("Emoji-Zahlen", [
    "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟",
    "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳",
    "㉑", "㉒", "㉓", "㉔", "㉕", "㉖",
  ]),
  createLetterMapping(
    "Ziffern",
    Array.from({ length: 26 }, (_, index) =>
      String(index + 1).padStart(2, "0"),
    ),
  ),
  createLetterMapping("Braille", [
    "⠁", "⠃", "⠉", "⠙", "⠑", "⠋", "⠛", "⠓", "⠊", "⠚",
    "⠅", "⠇", "⠍", "⠝", "⠕", "⠏", "⠟", "⠗", "⠎", "⠞",
    "⠥", "⠧", "⠺", "⠭", "⠽", "⠵",
  ]),
  createLetterMapping("Griechisch", [
    "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ",
    "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ",
    "φ", "χ", "ψ", "ω", "ϑ", "ϛ",
  ]),
];

export const getDefaultLanguages = (): Language[] => [
  ...EXTRA_LANGUAGES,
  ...Array.from({ length: 25 }, (_, index) => createCaesarLanguage(index + 1)),
];

export const DEFAULT_LANGUAGE_NAMES = new Set(
  getDefaultLanguages().map((language) => language.name),
);

export const REMOVED_DEFAULT_LANGUAGE_NAMES = new Set([
  "Großbuchstaben",
  "Leetspeak",
]);
