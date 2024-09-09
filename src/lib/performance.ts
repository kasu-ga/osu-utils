import { Beatmap, Performance } from "rosu-pp-js";
import { transformModsToString } from "./mods";

export interface OsuPerformanceOptions {
  accuracy?: number;
  mods?: number;
  combo?: number;
  misses?: number;
}

export function calculatePerformance(
  beatmap: Beatmap,
  options: OsuPerformanceOptions
) {
  const mods = options.mods ? transformModsToString(options.mods) : undefined;
  const attrs = new Performance({
    accuracy: options.accuracy,
    combo: options.combo,
    mods,
    misses: options.misses,
  }).calculate(beatmap);
  return attrs;
}
