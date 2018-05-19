import { computedFrom, bindable } from 'aurelia-framework';
import { OfficeElement } from '../office-element';

//@customElement('office-button')
export class OfficeLabel extends OfficeElement {
    @bindable label: string;
    

    @computedFrom('type')
    get css(): string
    {
        return 'ms-Label' + this.baseCss();
    }

    constructor()
    {
        super();
    }
}