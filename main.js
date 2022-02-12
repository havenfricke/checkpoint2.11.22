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
    fruitKnowledge: 0,
    hiddenMultiplier: 1
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
    <span class="col-12 text-center text-light p-1">
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
    <span class="col-12 text-start text-light border-bottom border-dark">
    <h3>UPGRADES</h3>
  </span>


  <span class="col-12 text-start text-light p-1" 2>Botany Knowlegde: ${upgradesBought.fruitKnowledge}</span>
  <!--Clicking upgrade-->

  <span class="col-12 text-start text-light p-1" 2>Fertilizer Strength: ${upgradesBought.fruitFertilizer}</span>
  <!--automatic upgrade-->

  <span class="col-12 text-start text-light p-1" 2>Workers: ${upgradesBought.fruitWorker}</span>
  <!--automatic upgrade-->

  <span class="col-12 text-start text-light p-1" 2>Tools: ${upgradesBought.fruitTools}</span>
  <!--automatic upgrade-->

  <div>
    <span class="col-12 text-start text-light p-1" 2>Green Thumb Multiplier: x${upgradesBought.fruitMultiplier}</span>
    <!--total upgrades-->
  </div>`
  }
  document.getElementById('upgrades').innerHTML = template
}

drawUpgrades()


function buyBook() {
  if (myDict.myThings.fruit <= 25) { return }
  if (myDict.myThings.fruit >= 25)
    myDict.myThings.fruit -= 25
  myDict.myThings.fruitMultiplier += 1
  myDict.myThings.fruitKnowledge += 1
  drawFruit()
  drawUpgrades()
  console.log('book bought, Botany knowledge:', myDict.myThings.fruitKnowledge)
}



function buyFertilizer() {
  if (myDict.myThings.fruit <= 100) { return }
  if (myDict.myThings.fruit >= 100)
    myDict.myThings.fruit -= 100
  myDict.myThings.fruitMultiplier += 2
  myDict.myThings.fruitFertilizer += 1
  drawFruit()
  drawUpgrades()
}

function buyWorker() {
  if (myDict.myThings.fruit <= 250) { return }
  if (myDict.myThings.fruit >= 250)
    myDict.myThings.fruit -= 10
  myDict.myThings.fruitWorker += 1
  drawFruit()
  drawUpgrades()
  setBuyWorker()
}

function workerJob() {
  myDict.myThings.fruit += (2 * myDict.myThings.hiddenMultiplier)
  console.log(myDict.myThings.fruit)
  drawFruit()
}

function setBuyWorker() {
  if (myDict.myThings.fruitWorker < 0.5) { return }
  if (myDict.myThings.fruitWorker >= 1)
    setInterval(workerJob, 5000)
  drawFruit()
}


function buyTools() {
  if (myDict.myThings.fruit <= 100) { return }
  if (myDict.myThings.fruit >= 100)
    myDict.myThings.fruit -= 500
  myDict.myThings.hiddenMultiplier += 5
  myDict.myThings.fruitTools += 3
  drawFruit()
  drawUpgrades()
}

setBuyWorker()
drawFruit()















