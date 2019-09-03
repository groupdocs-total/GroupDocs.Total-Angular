export class SignaturesHolderService {

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
}
