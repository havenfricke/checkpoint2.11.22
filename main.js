let plant = {
  paul: {
    fruit: 3,
    fertilizer: 0,
    love: 0
  }
}

let myDict = {
  myThings: {
    fruit: 0,
    fruitMultiplier: 0,
    fruitWorker: 0,
    fruitFertilizer: 0,
    fruitTools: 0
  }
}





function getFruit() {
  myDict.myThings.fruit += 1
  console.log(myDict.myThings.fruit);
  drawFruit()
}

function drawFruit() {
  let template = ''
  for (let key in myDict) {
    let fruitCount = myDict[key]
    template += `
    <span class="col-12 text-center p-1">
        <h2>FRUIT: ${fruitCount.fruit}</h2>
      </span>`
  }
  document.getElementById('fruit-count').innerHTML = template
}

drawFruit()

















