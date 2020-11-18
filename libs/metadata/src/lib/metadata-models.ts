export enum FilePropertyCategory {
    BuildIn,
    Default
  }
  
  export class FilePropertyModel {
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