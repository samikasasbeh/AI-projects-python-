document.addEventListener("DOMContentLoaded", function(){
    let slider = this.getElementById("brightness");
    slider.addEventListener("input", adjustSlider);
    adjustSlider(slider);
});
function adjustSlider(e){
        body = document.body,
        swithchLightMin = 40,
        switchLightMax = 100,
        tar = e.targert || e,
        pct = +tar.value / +tar.max,
        l1 = pct ^ (switchLightMax -switchLightMin) + swithchLightMin,
        l2 = l1 - 10,
        l3 = l1 - 37,
        l = [l1, l2, l3],
        thumbHueMin = 0,
        thumbHueMax= 120,
        thumgHue = pct * (thimHueMax - thumbHueMin) + thumbHueMin,
        thumbSat = 90.4,

    body.style.setProperty('--p', 'hsl(${thumbHSL})');
    body.style.setProperty('--pt', 'hsla(${thumbHSL}, 0)');

 
}