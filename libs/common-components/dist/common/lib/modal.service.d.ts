export declare class CommonModals {
    static PasswordRequired: string;
    static ErrorMessage: string;
    static BrowseFiles: string;
}
export declare class ModalService {
    private modals;
    add(modal: any): void;
    remove(id: string): void;
    open(id: string): void;
    close(id: string): void;
}
