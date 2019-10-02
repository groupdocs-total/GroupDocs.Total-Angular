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
    showToolTip: boolean;
    constructor();
    iconButtonClass(): "icon-button" | "";
    onHovering(): void;
    onUnhovering(): void;
}
