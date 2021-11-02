import { ParseResult } from './app-models';
export declare class UtilsService {
    constructor();
    generateCsvForParseResults(results: ParseResult[]): string;
    prepareCsvItem(item: string): string;
}
