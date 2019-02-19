// ------------------------------------------------- //
// 18/02/19
// Evan MacHale - N00150552
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web
// ------------------------------------------------- //

// slider
const { MDCSlider } = mdc.slider;
const font_slider = new mdc.slider.MDCSlider(document.querySelector('.mdc-slider'));
font_slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
