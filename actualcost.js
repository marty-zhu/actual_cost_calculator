const actualCost = document.querySelector('span#actual-cost');
const submitBtn = document.querySelector('button#submit-button');

function getValues() {
    let inputs = document.getElementsByClassName('text-input-field')
    globalThis.values = {};
    for (let input of inputs) {
        values[input.id] = parseFloat(input.value);
    }
    values['time'] = values['time'] / 60;
    let tripType = document.querySelector('input[type="radio"]:checked').value;
    if (tripType == 1) {
        values['distance'] *= 2;
        values['time'] *= 2;
    }
    console.log(values);
}

function convertToCostPerMile() {
    return costPerMile = (1 / values['fueleconomy']) * values['gasprice'];
}

function calActualCost() {
    getValues();
    let costPerMile = convertToCostPerMile();
    let tripTotalCost = costPerMile * values['distance'] + values['other'];
    let myOppotunityCost = values['myhourlyrate'] * values['time'];
    let finalCost = tripTotalCost + myOppotunityCost - values['offsets'] + values['itemcost'];
    actualCost.innerText = finalCost.toFixed(2);
}

submitBtn.addEventListener('click', calActualCost);
