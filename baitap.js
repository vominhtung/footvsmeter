function footToMeter(foot) {
    let meter = 0.305 * foot;
    return meter;
}
function meterToFoot(meter) {
    let foot = 3.279 * meter;
    return foot;
}
let foot = prompt("nhập foot:");
document.write(foot + "foot" + "=" + footToMeter(foot)+ "meter")
document.write("<br>")
let meter = prompt("nhập meter");
document.write(foot + "meter" + "=" + meterToFoot(meter)+ "foot")