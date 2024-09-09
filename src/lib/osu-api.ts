import axios from "axios";
import { Beatmap } from "rosu-pp-js";
import { GameMode } from "./consts";

export async function getBeatmap(id: string | number, gamemode: GameMode = 0) {
  const response = await axios.get(`https://osu.ppy.sh/osu/${id}`, {
    responseType: "arraybuffer",
  });
  const beatmapBuffer = response.data;
  const beatmapArray = new Uint8Array(beatmapBuffer);
  const beatmap = new Beatmap(beatmapArray);
  beatmap.convert(gamemode);
  return beatmap;
}
