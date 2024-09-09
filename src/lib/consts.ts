export enum GameMode {
  Osu = 0,
  Taiko = 1,
  Catch = 2,
  Mania = 3,
}

export const Mods = {
  NF: 1,
  EZ: 2,
  HD: 8,
  HR: 16,
  SD: 32,
  DT: 64,
  RX: 128,
  HT: 256,
  NC: 512,
  FL: 1024,
  SO: 4096,
  PF: 16384,
  K4: 32768,
  K5: 65536,
  K6: 131072,
  K7: 262144,
  K8: 524288,
  FI: 1048576,
  RD: 2097152,
  TG: 8388608,
  K9: 16777216,
  K1: 67108864,
  K3: 134217728,
  K2: 268435456,
};

export const ApprovalStatus = {
  loved: 4,
  qualified: 3,
  approved: 2,
  ranked: 1,
  pending: 0,
  wip: -1,
  graveyard: -2,
};
