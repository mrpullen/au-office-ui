import { computedFrom, bindable } from 'aurelia-framework';
import { OfficeElement } from '../office-element';
import { TextFieldType } from './office-textfield-enums';

//@customElement('office-button')
export class OfficeTextField extends OfficeElement {
    @bindable TextFieldType: TextFieldType;
    @bindable label: string;
    @bindable value: string;
    @bindable placeholder: string;

    @computedFrom('type')
    get css(): string
    {
        let textFieldTypeCSS = this.TextFieldType == TextFieldType.multiline ? ' ms-TextField--multiline' : '';
        textFieldTypeCSS = this.TextFieldType == TextFieldType.underlined ? ' ms-TextField--underlined' : textFieldTypeCSS;

        return 'ms-TextField' + textFieldTypeCSS + this.baseCss();
    }

    constructor()
    {
        super();
    }
}