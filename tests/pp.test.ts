import { Beatmap } from "rosu-pp-js";
import { calculatePerformance, getBeatmap } from "../src";

test("Get beatmap by Id", async () => {
  const beatmap = await getBeatmap(3696791);
  expect(beatmap instanceof Beatmap);
});

test("Calculate Performance", async () => {
  const beatmap = await getBeatmap(3696791);
  const pp = calculatePerformance(beatmap, {
    mods: 8 + 64,
  });
  expect(typeof pp.pp === "number");
});
