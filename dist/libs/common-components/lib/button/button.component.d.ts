import { WindowService } from "../window.service";
export declare class ButtonComponent {
    iconOnly: boolean;
    intent: string;
    disabled: boolean;
    icon: string;
    iconClass: string;
    tooltip: string;
    className: string;
    toggle: boolean;
    iconSize: string;
    iconRegular: boolean;
    elementPosition: number;
    showToolTip: boolean;
    private isDesktop;
    constructor(windowService: WindowService);
    iconButtonClass(): "icon-button" | "";
    onHovering(): void;
    onUnhovering(): void;
    private cleanAll;
}
