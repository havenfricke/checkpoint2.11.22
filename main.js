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
    fruitMultiplier: 1,
    fruitWorker: 0,
    fruitFertilizer: 0,
    fruitTools: 0,
    fruitKnowledge: 0
  }
}



function getFruit() {
  myDict.myThings.fruit += (1 * myDict.myThings.fruitMultiplier)
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

function drawUpgrades() {
  let template = ''
  for (let key in myDict) {
    let upgradesBought = myDict[key]
    template += `
    <span class="col-12 text-center border-bottom border-dark">
    <h3>UPGRADES</h3>
  </span>


  <span class="col-12 text-start p-1" 2>Botany Knowlegde: ${upgradesBought.fruitKnowledge}</span>
  <!--Clicking upgrade-->

  <span class="col-12 text-start p-1" 2>Fertilizer Strength: ${upgradesBought.fruitFertilizer}</span>
  <!--automatic upgrade-->

  <span class="col-12 text-start p-1" 2>Workers: ${upgradesBought.fruitWorker}</span>
  <!--automatic upgrade-->

  <span class="col-12 text-start p-1" 2>Tools: ${upgradesBought.fruitTools}</span>
  <!--automatic upgrade-->

  <div>
    <span class="col-12 text-start p-1" 2>Green Thumb Multiplier: x${upgradesBought.fruitMultiplier}</span>
    <!--total upgrades-->
  </div>`
  }
  document.getElementById('upgrades').innerHTML = template
}

drawUpgrades()


function buyBook() {
  if (myDict.myThings.fruit <= 10) { return }
  if (myDict.myThings.fruit >= 10)
    myDict.myThings.fruit -= 10
  myDict.myThings.fruitMultiplier += 2
  myDict.myThings.fruitKnowledge += 1
  drawFruit()
  drawUpgrades()
  console.log('book bought, Botany knowledge:', myDict.myThings.fruitKnowledge)
}



function buyFertilizer() {

}

function buyWorker() {

}

function buyTools() {

}

















