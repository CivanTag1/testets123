import { Item } from "./model";

export interface ConfigData {
  quadrants: { [key: string]: string };
  rings: string[];
}

export const radarName =
  process.env.REACT_APP_RADAR_NAME || "AOE Technology Radar";
export const radarNameShort = radarName;

export const getItemPageNames = (items: Item[]) =>
  items.map((item) => `${item.quadrant}/${item.name}`);

export const showEmptyRings = false;

export function isMobileViewport() {
  // return false for server side rendering
  if (typeof window == "undefined") return false;

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return width < 1200;
}

export function assetUrl(file: string) {
  return process.env.PUBLIC_URL + "/" + file;
}

export function translate(config: ConfigData, key: string) {
  return config.quadrants[key] || "-";
}