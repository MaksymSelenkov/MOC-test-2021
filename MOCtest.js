const pandemicStartMap = "01000000X000X011X0X";
const arrayBefore = pandemicStartMap.split('');

function showBlue() {
     const blueBox = document.createElement('div');
     blueBox.style.cssText = "background-color: blue; width: 40px; height: 40px; border: 2px solid gray; margin: 2px;";
     return blueBox;
}
function showGreen() {
     const greenBox = document.createElement('div');
     greenBox.style.cssText = "background-color: green; width: 40px; height: 40px; border: 2px solid gray; margin: 2px;";
     return greenBox;
}
function showRed() {
     const redBox = document.createElement('div');
     redBox.style.cssText = "background-color: red; width: 40px; height: 40px; border: 2px solid gray; margin: 2px;";
     return redBox;
}

//show map before
const mapBefore = document.querySelector('.mapBefore');
for (item of arrayBefore) {
     if (item === 'X') {
          mapBefore.append(showBlue());
     } else if (item === '0') {
          mapBefore.append(showGreen());
     } else if (item === '1') {
          mapBefore.append(showRed());
     }
}

//show map after
const arrayAfter = [];
let pos = 0;
for (let i = 0; i < arrayBefore.length; i++) {
     if (arrayBefore[i] === 'X') {
          arrayAfter.push(arrayBefore.slice(pos, i));
          pos = i + 1;
     }
}

let counterInfected = 0;
const mapAfter = document.querySelector('.mapAfter');
for (arr of arrayAfter) {
     for (item of arr) {
          if (arr.includes('1')) {
               for (let i = 0; i < arr.length; i++) {
                    mapAfter.append(showRed());
               counterInfected++;
               }
               mapAfter.append(showBlue());
               break;
          } else {
               for (let i = 0; i < arr.length; i++) {
                    mapAfter.append(showGreen());
               }

               mapAfter.append(showBlue());
               break;
          }

     }
}

//show total areas
let totalAreas = 0;
for (arr of arrayAfter) {
     totalAreas += arr.length;
}
let total = document.querySelector('.total');
let totalValue = document.createElement('h2');
totalValue.innerHTML = `Total: ${totalAreas} `;
total.append(totalValue);

//show infected
let infected = document.querySelector('.infected');
let infectedValue = document.createElement('h2');
infectedValue.innerHTML = `Infected: ${counterInfected} `;
infected.append(infectedValue);

//show percentage
let percentage = document.querySelector('.percentage');
let percentageValue = document.createElement('h2');
percentageValue.innerHTML = `Percentage: ${counterInfected / totalAreas * 100} %`;
percentage.append(percentageValue);