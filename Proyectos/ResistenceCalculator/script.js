document.getElementById('band1').addEventListener('change', updateBandColor);
document.getElementById('band2').addEventListener('change', updateBandColor);
document.getElementById('band3').addEventListener('change', updateBandColor);
document.getElementById('band4').addEventListener('change', updateBandColor);

const colors = {
    "0": "black",
    "1": "brown",
    "2": "red",
    "3": "orange",
    "4": "yellow",
    "5": "green",
    "6": "blue",
    "7": "violet",
    "8": "gray",
    "9": "white",
    "-1": "gold",
    "-2": "silver"
};

function updateBandColor(event) {
    const bandNumber = event.target.id.replace('band', '');
    const bandColor = colors[event.target.value];
    document.querySelector(`.band${bandNumber}`).style.backgroundColor = bandColor;
}

function calculateResistance() {
    const band1 = parseInt(document.getElementById('band1').value);
    const band2 = parseInt(document.getElementById('band2').value);
    const band3 = parseInt(document.getElementById('band3').value);
    const band4 = parseFloat(document.getElementById('band4').value);

    const resistanceValue = (band1 * 10 + band2) * Math.pow(10, band3);
    const toleranceValue = band4;

    document.getElementById('result').innerText = `Resistencia: ${resistanceValue} Ω ±${toleranceValue}%`;
}