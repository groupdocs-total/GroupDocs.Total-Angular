import { HostDynamicDirective } from "./host-dynamic.directive";
export declare class HostingDynamicComponentService {
    private hosts;
    constructor();
    add(host: HostDynamicDirective): void;
    remove(host: HostDynamicDirective): void;
    find(ident: number): HostDynamicDirective;
}
