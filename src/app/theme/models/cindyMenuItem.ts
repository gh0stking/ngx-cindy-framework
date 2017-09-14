import { EventEmitter } from '@angular/core';

export class CindyMenuModel {
    label?: string;
    icon?: string;
    command?: (event?: EventEmitter<any>) => void;
    url?: string;
    routerLink?: any;
    items?: CindyMenuModel[];
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    routerLinkActiveOptions?: any;
    separator?: boolean;
    badge?: string;
    badgeStyleClass?: string;
    style?: any;
    styleClass?: string;
    title?: string;
}