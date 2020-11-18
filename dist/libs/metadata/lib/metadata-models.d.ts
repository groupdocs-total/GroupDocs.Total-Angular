export declare enum FilePropertyCategory {
    BuildIn = 0,
    Default = 1
}
export declare class FilePropertyModel {
    category: FilePropertyCategory;
    name: string;
    value: any;
    type: number;
    original: boolean;
    selected: boolean;
    editing: boolean;
    edited: boolean;
    disabled: boolean;
}
