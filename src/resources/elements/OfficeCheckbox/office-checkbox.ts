import { computedFrom, bindable } from 'aurelia-framework';
import { OfficeElement } from '../office-element';
import { OfficeElementChecked } from '../office-element-enums';

//@customElement('office-button')
export class OfficeCheckbox extends OfficeElement {
    @bindable icon: string = 'plus';
    @bindable label: string;
    @bindable name: string;
    @bindable checkedState: OfficeElementChecked; 
    @bindable onchange: Function;

    @computedFrom('checkedState')
    get checked(): string {
        return this.checkedState == OfficeElementChecked.checked ? 'true' : 'false';
    }

    @computedFrom('type')
    get css(): string
    {
        return 'ms-CheckBox' + this.baseCss();
    }

    onChange()
    {
        if (this.onchange)
        {
            this.onchange();
        }
    }

    constructor()
    {
        super();
    }


    // Removes event handlers on the button
    disposeEvents()
    {

    }
}


