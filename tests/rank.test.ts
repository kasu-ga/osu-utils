import { calculateAccuracy, calculateRank } from "../src";

test("Get rank", async () => {
  const accuracy = calculateAccuracy({
    mode: 0,
    count300: 1892,
    count100: 32,
    count50: 28,
    countMiss: 0,
  });
  const rank = calculateRank({
    mode: 0,
    count300: 1892,
    count100: 32,
    count50: 28,
    countMiss: 0,
    accuracy,
  });
  expect(rank === "S");
});
