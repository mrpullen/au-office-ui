import { computedFrom, bindable } from 'aurelia-framework';
import { OfficeElementEnabled, OfficeElementRequired } from './office-element-enums';

export class OfficeElement {

    @bindable enabledState: OfficeElementEnabled;
    @bindable requiredState: OfficeElementRequired;
    constructor() {

    }

    baseCss(): string
    {
        var disabledCss = this.enabledState == OfficeElementEnabled.disabled ? ' is-disabled' : '';
        var requiredCss = this.requiredState == OfficeElementRequired.required ? ' is-required' : '';
        return disabledCss + requiredCss;
    }
}