const pandemicStartMap = "01000000X000X011X0X";
const arrayBefore = pandemicStartMap.split('');
const arrayAfter = [];
let counterInfected = 0;
let totalAreas = 0;

showMapBefore();
showMapAfter();
showTotalAreas();
showInfected();
showPercentage();

function showBlue() {
     const blueBox = document.createElement('div');
     blueBox.classList.add('blue', 'box');
     return blueBox;
}

function showGreen() {
     const greenBox = document.createElement('div');
     greenBox.classList.add('green', 'box');
     return greenBox;
}

function showRed() {
     const redBox = document.createElement('div');
     redBox.classList.add('red', 'box');
     return redBox;
}

function showMapBefore() {
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
}

function showMapAfter() {
     let pos = 0;
     for (let i = 0; i < arrayBefore.length; i++) {
          if (arrayBefore[i] === 'X') {
               arrayAfter.push(arrayBefore.slice(pos, i));
               pos = i + 1;
          }
     }

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
}

function showTotalAreas() {
     for (arr of arrayAfter) {
          totalAreas += arr.length;
     }
     let total = document.querySelector('.total');
     let totalValue = document.createElement('h2');
     totalValue.innerHTML = `Total: ${totalAreas} `;
     total.append(totalValue);
}

function showInfected() {
     let infected = document.querySelector('.infected');
     let infectedValue = document.createElement('h2');
     infectedValue.innerHTML = `Infected: ${counterInfected} `;
     infected.append(infectedValue);
}

function showPercentage() {
     let percentage = document.querySelector('.percentage');
     let percentageValue = document.createElement('h2');
     percentageValue.innerHTML = `Percentage: ${counterInfected / totalAreas * 100} %`;
     percentage.append(percentageValue);
}