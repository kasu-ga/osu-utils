# Osu Utils

Useful functions for osu! all game modes.

## Installation

```bash
npm install @kasu-ga/osu-utils
```

### Documentaion

#### Accuracy

##### `Osu!`

```ts
const accuracy = calculateAccuracy({
  mode: 0,
  count300: 1892,
  count100: 32,
  count50: 28,
  countMiss: 0,
});
```

##### `Osu!taiko`

```ts
const accuracy = calculateAccuracy({
  mode: 1,
  count300: 1892,
  count100: 32,
  countMiss: 0,
});
```

##### `Osu!catch`

```ts
const accuracy = calculateAccuracy({
  mode: 2,
  count300: 1892,
  count100: 32,
  count50: 28,
  countMiss: 0,
  countKatu: 0.5,
});
```

##### `Osu!mania`

```ts
const accuracy = calculateAccuracy({
  mode: 2,
  count300: 1892,
  count100: 32,
  count50: 28,
  countMiss: 0,
  countKatu: 0.5,
  countGeki: 0,
});
```

#### Mods

```ts
const mods = transformModsToString(8 + 24);
// Result -> HDDT
```

#### Rank

##### `Osu!`

```ts
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
```

##### `Osu!taiko`

```ts
const accuracy = calculateAccuracy({
  mode: 1,
  count300: 1892,
  count100: 32,
  countMiss: 0,
});

const rank = calculateRank({
  mode: 1,
  accuracy,
});
```

##### `Osu!catch`

```ts
const accuracy = calculateAccuracy({
  mode: 2,
  count300: 1892,
  count100: 32,
  count50: 28,
  countMiss: 0,
  countKatu: 0.5,
});

const rank = calculateRank({
  mode: 2,
  accuracy,
});
```

##### `Osu!mania`

```ts
const accuracy = calculateAccuracy({
  mode: 3,
  count300: 1892,
  count100: 32,
  count50: 28,
  countMiss: 0,
  countKatu: 0.5,
  countGeki: 0,
});

const rank = calculateRank({
  mode: 3,
  accuracy,
});
```

#### Performance (PP)

> We use Rosu PP and Axios internally.

##### 1. Get Beatmap

You must pass the beatmap ID, not the SetId.

```ts
const beatmap = await getBeatmap(3696791);
```

If you were calculating PP for a game mode other than Osu!, you must convert the beatmap.

```ts
beatmap.convert(GameMode.Taiko);
```

##### 2. Get Performance

```ts
const performance = calculatePerformance(beatmap, {
  mods: 8 + 64, // HDDT
});
console.info(performance);
```
