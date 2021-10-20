export declare class SignaturesHolderService {
    private map;
    constructor();
    add(key: string): void;
    addId(key: string, id: number): void;
    delete(key: string): void;
    has(key: string): boolean;
    clear(): void;
    values(): IterableIterator<number[]>;
    get(key: string): number[];
    remove(key: string, id: number): void;
    changeTemp(imageGuid: string, id: number): void;
}
