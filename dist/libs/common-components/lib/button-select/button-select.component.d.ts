import { OnCloseService } from "../on-close.service";
import { SelectComponent } from "../select/select.component";
export declare class ButtonSelectComponent extends SelectComponent {
    icon: string;
    tooltip: string;
    showToolTip: boolean;
    constructor(_onCloseService: OnCloseService);
}
