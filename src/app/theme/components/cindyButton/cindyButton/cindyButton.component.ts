import { Component, Input } from '@angular/core';

@Component({
    selector: 'c-button',
    template: `<button pButton type="button" icon="{{_icon}}" iconPos="{{_iconPos}}" label="{{_label}}" class="{{_class}}"></button>`
})
export class CindyButton {

    public _label: string;
    public _icon: string;
    public _iconPos: string;
    public _class: string;

    @Input() get label(): string {
        return this._label;
    }

    set label(val: string) {
        this._label = val;
    }

    @Input() get icon(): string {
        return this._icon;
    }

    set icon(val: string) {
        this._icon = val;
    }

    @Input() get iconPos(): string {
        return this._iconPos;
    }

    set iconPos(val: string) {
        this._iconPos = val;
    }

    @Input() get class(): string {
        return this._class;
    }

    set class(val: string) {
        this._class = val;
    }

}