
document.getElementById('weight-input').addEventListener('input', weightOutput);

const elWeightOutput = document.getElementById('weight-output');
elWeightOutput.style.visibility = 'hidden'; // hides all weight output elements

function weightOutput(e) {
    elWeightOutput.style.visibility = 'visible';
    let weight = e.target.value;
    document.getElementById('grams-output-numbers').innerHTML = weight / 0.0022046;
    document.getElementById('kg-output-numbers').innerHTML = weight / 2.2046;
    document.getElementById('oz-output-numbers').innerHTML = weight * 16;
}