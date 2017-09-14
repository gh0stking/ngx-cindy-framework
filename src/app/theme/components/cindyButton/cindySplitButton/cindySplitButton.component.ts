import { Component, Input } from '@angular/core';
import { CindyMenuModel } from '../../../models/cindyMenuItem';

@Component({
    selector: 'c-splitButton',
    template: `<p-splitButton label="{{_label}}" icon="{{_icon}}" [model]="_items" styleClass="{{_styleClass}}"></p-splitButton>`
})
export class CindySplitButton {

    public _label: string;
    public _icon: string;
    public _iconPos: string;
    public _styleClass: string;
    public _items: CindyMenuModel[];

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

    @Input() get styleClass(): string {
        return this._styleClass;
    }

    set styleClass(val: string) {
        this._styleClass = val;
    }

    @Input() get items(): CindyMenuModel[] {
        return this._items;
    }

    set items(val: CindyMenuModel[]) {
        this._items = val;
    }

}