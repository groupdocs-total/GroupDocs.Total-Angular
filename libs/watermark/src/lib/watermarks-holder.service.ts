import {DraggableWatermark} from "./watermark-models";

export class WatermarksHolderService {

  private map = new Map<string, number[]>();

  constructor() {
  }

  add(key: string) {
    this.map.set(key, []);
  }

  addId(key: string, id: number) {
    if (!this.map.has(key)) {
      this.add(key);
    }
    const item = this.map.get(key);
    item.push(id);
  }

  delete(key: string) {
    this.map.delete(key);
  }

  has(key: string) {
    return this.map.has(key);
  }

  clear() {
    this.map.clear();
  }

  values() {
    return this.map.values();
  }

  get(key: string) {
    return this.map.get(key);
  }

  remove(key: string, id: number) {
    const items = this.map.get(key);
    this.delete(key);
    if (items.length !== 1) {
      this.add(key);
      for (const elem of items) {
        if (elem !== id) {
          this.map.get(key).push(elem);
        }
      }
    }
  }

  changeTemp(imageGuid: string, id: number) {
    this.remove(DraggableWatermark.TEMP, id);
    this.addId(imageGuid, id);
  }
}
