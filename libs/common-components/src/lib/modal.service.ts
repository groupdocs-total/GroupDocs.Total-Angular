export class CommonModals {
  static PasswordRequired = "gd-password-required";
  static ErrorMessage = "gd-error-message";
  static BrowseFiles = "gd-browse-files";
  static CreateDocument = "gd-create-document";
  static OperationSuccess = "gd-success-modal";
  static DrawHandSignature = "gd-draw-hand-signature";
  static DrawStampSignature = "gd-draw-stamp-signature";
  static InformationMessage = "gd-information-message";
}

export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    if (modal) {
      modal.open();
    }
  }

  close(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    if (modal) {
      modal.close();
    }
  }
}
