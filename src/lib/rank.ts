export interface OsuRankOptionsBase {
  accuracy: number;
}

export interface OsuRankOptions extends OsuRankOptionsBase {
  count300: number;
  count100: number;
  count50: number;
  countMiss: number;
}

export function calculateOsuRank({
  accuracy,
  count300,
  count100,
  count50,
  countMiss,
}: OsuRankOptions) {
  const th = count300 + count100 + count50 + countMiss;
  const boat = (count50 / th) * 100;
  if (accuracy === 100) {
    return "SS";
  } else if (accuracy > 90 && boat <= 1 && countMiss === 0) {
    return "S";
  } else if ((accuracy > 80 && countMiss === 0) || accuracy > 90) {
    return "A";
  } else if ((accuracy > 70 && countMiss === 0) || accuracy > 80) {
    return "B";
  } else if (accuracy > 60) {
    return "C";
  } else {
    return "D";
  }
}

export interface OsuTaikoRankOptions extends OsuRankOptionsBase {}

export function calculateOsuTaikoRank({ accuracy }: OsuTaikoRankOptions) {
  if (accuracy === 100) {
    return "SSH";
  } else if (accuracy > 98 && accuracy <= 99.99) {
    return "SH";
  } else if (accuracy > 94.01 && accuracy <= 98) {
    return "A";
  } else if (accuracy > 90.01 && accuracy <= 94) {
    return "B";
  } else if (accuracy > 85.01 && accuracy <= 90) {
    return "C";
  } else {
    return "D";
  }
}

export interface OsuCatchRankOptions extends OsuRankOptionsBase {}

export function calculateOsuCatchRank({ accuracy }: OsuCatchRankOptions) {
  return calculateOsuTaikoRank({ accuracy });
}

export interface OsuManiaRankOptions extends OsuRankOptionsBase {}

export function calculateOsuManiaRank({ accuracy }: OsuManiaRankOptions) {
  if (accuracy === 100) {
    return "SS";
  } else if (accuracy > 95) {
    return "S";
  } else if (accuracy > 90) {
    return "A";
  } else if (accuracy > 80) {
    return "B";
  } else if (accuracy > 70) {
    return "C";
  } else {
    return "D";
  }
}

export type CalculateRankOptions =
  | ({
      mode: 0;
    } & OsuRankOptions)
  | ({
      mode: 1;
    } & OsuTaikoRankOptions)
  | ({
      mode: 2;
    } & OsuCatchRankOptions)
  | ({
      mode: 3;
    } & OsuManiaRankOptions);

export function calculateRank(options: CalculateRankOptions) {
  if (options.mode === 0) return calculateOsuRank(options);
  if (options.mode === 1) return calculateOsuTaikoRank(options);
  if (options.mode === 2) return calculateOsuCatchRank(options);
  return calculateOsuManiaRank(options);
}
