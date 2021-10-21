import { Template, TemplateId } from './app-models';
import { Observable } from 'rxjs';
export declare class TemplateService {
    private readonly _templatePattern;
    private _currentTemplate;
    private _currentTemplateModifiedSubscription;
    private _templates;
    private _currentTemplateChangedSubject;
    private _templateAddedSubject;
    private _templateRemovedSubject;
    constructor();
    readonly currentTemplateChanged: Observable<Template>;
    readonly templateAddedSubject: Observable<Template>;
    readonly templateRemovedSubject: Observable<TemplateId>;
    readonly currentTemplate: Template;
    readonly templateIds: TemplateId[];
    selectTemplate(templateId: TemplateId): void;
    createTemplate(): void;
    renameTemplate(templateId: TemplateId): void;
    removeTemplate(templateId: TemplateId): void;
    serialize(templateId: TemplateId): string;
    deserialize(templateJson: string): void;
    private setCurrentTemplate;
    private onTemplateAdded;
    private onTemplateRemoved;
    private loadTemplatesFromLocalStorage;
    private loadTemplateFromJson;
    private saveTemplateToLocalStorage;
    private saveTemplate;
    private getTemplateById;
    private getTemplateByName;
    private getNextTemplateId;
    private getNextTemplateName;
}