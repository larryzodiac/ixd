// ------------------------------------------------- //
// 18/02/19
// Evan MacHale - N00150552
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web
// ------------------------------------------------- //

// Global
const { MDCSlider } = mdc.slider;
const { MDCCheckbox } = mdc.checkbox;

// font slider
const font_slider = new mdc.slider.MDCSlider(document.querySelector('.font-slider'));
// font_slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
// point density slider
const point_density_slider = new mdc.slider.MDCSlider(document.querySelector('.point-density-slider'));
// shape size slider
const shape_size_slider = new mdc.slider.MDCSlider(document.querySelector('.shape-size-slider'));

// nofill checkbox
const no_fill_checkbox  = new MDCCheckbox(document.querySelector('.fill-checkbox'));
no_fill_checkbox.checked = true;
// nostroke checkbox
const stroke_checkbox  = new MDCCheckbox(document.querySelector('.stroke-checkbox'));
// stroke weight slider
const stroke_weight_slider = new mdc.slider.MDCSlider(document.querySelector('.stroke-weight-slider'));
