import { Mods } from "./consts";

export function transformModsToString(mods: number) {
  try {
    const modNames = [];
    for (const mod in Mods) {
      if (mods & Mods[mod as keyof typeof Mods]) {
        modNames.push(mod);
      }
    }
    return modNames.join("");
  } catch (error) {
    throw new Error("Error converting mods");
  }
}
