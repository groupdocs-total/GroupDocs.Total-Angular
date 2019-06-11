export class CommonModals {
  static PasswordRequired = "gd-password-required";
  static ErrorMessage = "gd-error-message";
  static BrowseFiles = "gd-browse-files";
  static CreateDocument = "gd-create-document";
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
    let modal: any = this.modals.filter(x => x.id == id)[0];
    modal.open();
  }

  close(id: string) {
    let modal: any = this.modals.filter(x => x.id == id)[0];
    modal.close();
  }
}
