import { calculateAccuracy } from "../src";

test("Get accuracy", async () => {
  const accuracy = calculateAccuracy({
    mode: 0,
    count300: 1892,
    count100: 32,
    count50: 28,
    countMiss: 0,
  });
  expect(accuracy === 98.61);
});
