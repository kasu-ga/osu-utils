export interface OsuAccuracyOptions {
  count300: number;
  count100: number;
  count50: number;
  countMiss: number;
}

export function calculateOsuAccuracy({
  count300,
  count100,
  count50,
  countMiss,
}: OsuAccuracyOptions) {
  return (
    (100.0 * (6 * count300 + 2 * count100 + count50)) /
    (6 * (count50 + count100 + count300 + countMiss))
  );
}

export interface OsuTaikoAccuracyOptions {
  count300: number;
  count100: number;
  countMiss: number;
}

export function calculateOsuTaikoAccuracy({
  count300,
  count100,
  countMiss,
}: OsuTaikoAccuracyOptions) {
  return (
    (100.0 * (2 * count300 + count100)) /
    (2 * (count300 + count100 + countMiss))
  );
}

export interface OsuCatchAccuracyOptions {
  count300: number;
  count100: number;
  count50: number;
  countMiss: number;
  k?: number;
}

export function calculateOsuCatchAccuracy({
  count300,
  count100,
  count50,
  countMiss,
  k = 0,
}: OsuCatchAccuracyOptions) {
  return (
    (100.0 * (count300 + count100 + count50)) /
    (count300 + count100 + count50 + k + countMiss)
  );
}

export interface OsuManiaAccuracyOptions {
  count300: number;
  count100: number;
  count50: number;
  countMiss: number;
  k?: number;
  g?: number;
}

export function calculateOsuManiaAccuracy({
  count300,
  count100,
  count50,
  countMiss,
  k = 0,
  g = 0,
}: OsuManiaAccuracyOptions) {
  return (
    (100.0 * (6 * g + 6 * count300 + 4 * k + 2 * count100 + count50)) /
    (6 * (count50 + count100 + count300 + countMiss + g + k))
  );
}

export type CalculateAccuracyOptions =
  | ({
      mode: 0;
    } & OsuAccuracyOptions)
  | ({
      mode: 1;
    } & OsuTaikoAccuracyOptions)
  | ({
      mode: 2;
    } & OsuCatchAccuracyOptions)
  | ({
      mode: 3;
    } & OsuManiaAccuracyOptions);

export function calculateAccuracy(options: CalculateAccuracyOptions) {
  if (options.mode === 0) return calculateOsuAccuracy(options);
  if (options.mode === 1) return calculateOsuTaikoAccuracy(options);
  if (options.mode === 2) return calculateOsuCatchAccuracy(options);
  return calculateOsuManiaAccuracy(options);
}
