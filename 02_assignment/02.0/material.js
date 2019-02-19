// ------------------------------------------------- //
// 18/02/19
// Evan MacHale - N00150552
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web
// ------------------------------------------------- //

// Global
const { MDCSlider } = mdc.slider;

// font slider
const font_slider = new mdc.slider.MDCSlider(document.querySelector('.font-slider'));
// font_slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));

// point density slider
const point_density_slider = new mdc.slider.MDCSlider(document.querySelector('.point-density-slider'));

// shape size slider
const shape_size_slider = new mdc.slider.MDCSlider(document.querySelector('.shape_size_slider'));
