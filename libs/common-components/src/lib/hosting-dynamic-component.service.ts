import {HostDynamicDirective} from "./host-dynamic.directive";

export class HostingDynamicComponentService {
  private hosts: HostDynamicDirective[];

  constructor() {
    this.hosts = [];
  }

  add(host: HostDynamicDirective) {
    this.hosts = this.hosts.filter(function (h) {
      return h.ident !== host.ident;
    });
    this.hosts.push(host);
  }

  remove(host: HostDynamicDirective) {
    this.hosts = this.hosts.filter(function (h) {
      return h.ident !== host.ident;
    });
  }

  find(ident: number) {
    return this.hosts.find(function (h) {
      return h.ident === ident;
    });
  }
}
