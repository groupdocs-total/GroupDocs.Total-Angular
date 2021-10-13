import { Observable } from 'rxjs';
import { SourceFile } from './app-models';
export declare class SourceFileService {
    private _sourceFile;
    private _sourceFileChangedSubject;
    constructor();
    readonly sourceFileChanged: Observable<SourceFile>;
    sourceFile: SourceFile;
}
