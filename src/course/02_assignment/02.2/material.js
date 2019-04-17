// ------------------------------------------------- //
// 24/02/19
// Evan MacHale - N00150552
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web
// ------------------------------------------------- //

// Global
const { MDCSlider } = mdc.slider;
const { MDCCheckbox } = mdc.checkbox;
const { MDCFormField } = mdc.formField;
const { MDCSelect } = mdc.select;
const { MDCNotchedOutline } = mdc.notchedOutline;

// font slider
const font_slider = new mdc.slider.MDCSlider(document.querySelector('.font-slider'));
// spawn range slider
const spawn_range_slider = new mdc.slider.MDCSlider(document.querySelector('.spawn-range-slider'));
// lerp slider
// const lerp_slider = new mdc.slider.MDCSlider(document.querySelector('.lerp-slider'));
// point density slider
const point_density_slider = new mdc.slider.MDCSlider(document.querySelector('.point-density-slider'));
// shape size slider
const shape_size_slider = new mdc.slider.MDCSlider(document.querySelector('.shape-size-slider'));

// nofill checkbox
const no_fill_checkbox  = new MDCCheckbox(document.querySelector('.fill-checkbox'));
no_fill_checkbox.checked = true;
const no_fill_checkbox_input = document.querySelector('.fill-checkbox input');
// nostroke checkbox
const no_stroke_checkbox  = new MDCCheckbox(document.querySelector('.stroke-checkbox'));
const no_stroke_checkbox_input = document.querySelector('.stroke-checkbox input');
// stroke weight slider
const stroke_weight_slider = new mdc.slider.MDCSlider(document.querySelector('.stroke-weight-slider'));

// atan checkbox
const atan_checkbox  = new MDCCheckbox(document.querySelector('.atan-checkbox'));
const atan_checkbox_input = document.querySelector('.atan-checkbox input');

// shape select not working
// const shape_select = new MDCSelect(document.querySelector('.shape-select'));
// const notchedOutline = new mdc.notchedOutline.MDCNotchedOutline(document.querySelector('.mdc-notched-outline'));
// const shape_select = new mdc.select.MDCSelect(document.querySelector('.shape-select'));
// shape_select.listen('MDCSelect:change', () => {
//   console.log(`Selected option at index ${shape_select.selectedIndex} with value "${shape_select.value}"`);
// });
// console.log(shape_select.value);
