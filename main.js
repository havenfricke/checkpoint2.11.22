let myDict = {
  myThings: {
    fruit: 0,
    fruitWorker: 0,
    fruitAlchemist: 0,
    fruitFertilizer: 0,
    fruitTools: 0,
    fruitKnowledge: 0,
    greenThumbMultiplier: 1,
    workerEfficiency: 0,
    bookMultiplier: 1,
    fertilizerMultiplier: 1,
    workerMultiplier: 1,
    toolMultiplier: 1,
    RnDMultiplier: 1,
    fruitAlchemistHiddenNumber: 0
  }
}



//Botany knowledge + Fertilizer Strength = green thumb multiplier
//Tools * workers or Alchemist = worker efficiency multiplier

function getFruit() {
  myDict.myThings.fruit += (1 * myDict.myThings.greenThumbMultiplier)
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
    <div class="row d-flex justify-content-start">
    <span class="col-6 text-start text-light border-bottom border-dark">
    <h3>UPGRADES</h3>
    </span>
    </div>


  <span class="col-12 text-start text-light p-1">Botany Knowlegde: ${upgradesBought.fruitKnowledge + 1}</span>
  <!--Clicking upgrade-->

  <div>
  <span class="col-12 text-start text-light p-1">Fertilizer Strength: ${upgradesBought.fruitFertilizer}</span>
  </div>
  <!--automatic upgrade-->
  
  <span class="col-12 text-start text-light p-1">Tools: ${upgradesBought.fruitTools}</span>
  <!--automatic upgrade-->

  <div>
  <span class="col-12 text-start text-light p-1">Workers: ${upgradesBought.fruitWorker}</span>
  </div>
  <!--automatic upgrade-->

  <div>
  <span class="col-12 text-start text-light p-1">Alchemists: ${upgradesBought.fruitAlchemist}</span>
  </div>
  <!--automatic upgrade-->


    <span class="col-12 text-start text-light p-1">Green Thumb Multiplier: x ${upgradesBought.greenThumbMultiplier}</span>
    <!--total upgrades-->



  <span class="col-12 text-start text-light p-1">Labor Efficiency Multiplier: x ${upgradesBought.workerEfficiency}</span>
  <!--total upgrades-->
`
  }
  document.getElementById('upgrades').innerHTML = template
}

drawUpgrades()

function drawShopPrice() {
  let template = ''
  for (let key in myDict) {
    let inflation = myDict[key]
    template += `
    <span class="col-12 text-center text-light p-1">
    <h2>UPGRADES STORE</h2>
    </span>

    <div class="row d-flex brighter text-center text-light border-bottom justify-content-center">
    <span class="col-2">+ 1 Green Thumb</span><span class="col-2">+ 3 Green Thumb</span><span class="col-2">+ 1
      Fruit / 10 seconds</span><span class="col-2">x3 Efficiency / Laborer</span><span class="col-2">+ 1 Fruit / 1
      Second</span>
  </div>

  <div class="row d-flex justify-content-center p-2">

    <button id="buy-book" onclick="buyBook()" type="button" class="col-2 rounded-pill p-3 btn-success">${(inflation.bookMultiplier * 25)} FRUITS: BOTANY BOOK</button>

    <button id="buy-fertilizer" onclick="buyFertilizer()" type="button" class="col-2 p-3 rounded-pill btn-warning">${(inflation.fertilizerMultiplier * 100)} FRUITS: FERTILIZER</button>

    <button id="buy-worker" onclick="buyWorker()" type="button" class="col-2 p-3 rounded-pill btn-primary">${inflation.workerMultiplier * 250} FRUITS: WORKER</button>

    <button id="buy-tools" onclick="buyTools()" type="button" class="col-2 p-3 rounded-pill btn-danger">${(inflation.toolMultiplier * 500)} FRUITS: TOOLS</button>

    <button id="buy-RnD" onclick="buyRnD()" type="button" class="col-2 p-3 rounded-pill btn-info">${(inflation.RnDMultiplier * 10000)} FRUITS: ALCHEMIST</button>

    </div>`
  }
  document.getElementById('shop').innerHTML = template
  drawFruit()
}

drawShopPrice()



function buyBook() {
  if (myDict.myThings.fruit < (25 * myDict.myThings.bookMultiplier)) { return }
  if (myDict.myThings.fruit >= (25 * myDict.myThings.bookMultiplier))
    myDict.myThings.fruit -= (25 * myDict.myThings.bookMultiplier)
  myDict.myThings.greenThumbMultiplier += 1
  myDict.myThings.fruitKnowledge += 1
  myDict.myThings.bookMultiplier += 1
  drawFruit()
  drawUpgrades()
  drawShopPrice()
  console.log('book bought, Botany knowledge:', myDict.myThings.fruitKnowledge)
}



function buyFertilizer() {
  if (myDict.myThings.fruit < (100 * myDict.myThings.fertilizerMultiplier)) { return }
  if (myDict.myThings.fruit >= (100 * myDict.myThings.fertilizerMultiplier))
    myDict.myThings.fruit -= (100 * myDict.myThings.fertilizerMultiplier)
  myDict.myThings.greenThumbMultiplier += 5
  myDict.myThings.fruitFertilizer += 5
  myDict.myThings.fertilizerMultiplier += 1
  drawFruit()
  drawUpgrades()
  drawShopPrice()
}

function buyWorker() {
  if (myDict.myThings.fruit < (250 * myDict.myThings.workerMultiplier)) { return }
  if (myDict.myThings.fruit >= (250 * myDict.myThings.workerMultiplier))
    myDict.myThings.fruit -= (250 * myDict.myThings.workerMultiplier)
  myDict.myThings.fruitWorker += 1
  myDict.myThings.workerEfficiency += (1 * myDict.myThings.fruitTools)
  myDict.myThings.workerMultiplier += 1
  drawFruit()
  drawUpgrades()
  setBuyWorker()
  drawShopPrice()
}

function workerJob() {
  myDict.myThings.fruit += (1 * myDict.myThings.fruitTools)
  console.log(myDict.myThings.fruit)
  drawFruit()
}

function setBuyWorker() {
  if (myDict.myThings.fruitWorker < 0.5) { return }
  if (myDict.myThings.fruitWorker >= 1)
    setInterval(workerJob, 10000)
  drawFruit()
}


function buyTools() {
  if (myDict.myThings.fruit < (500 * myDict.myThings.toolMultiplier)) { return }
  if (myDict.myThings.fruit >= (500 * myDict.myThings.toolMultiplier))
    myDict.myThings.fruit -= (500 * myDict.myThings.toolMultiplier)
  myDict.myThings.workerEfficiency += (3 * myDict.myThings.fruitWorker)
  myDict.myThings.workerEfficiency += (3 * myDict.myThings.fruitAlchemistHiddenNumber)
  myDict.myThings.fruitTools += 3
  myDict.myThings.toolMultiplier += 1
  drawFruit()
  drawUpgrades()
  drawShopPrice()
}

function buyRnD() {
  if (myDict.myThings.fruit < (10000 * myDict.myThings.RnDMultiplier)) { return }
  if (myDict.myThings.fruit >= (10000 * myDict.myThings.RnDMultiplier))
    myDict.myThings.fruit -= (10000 * myDict.myThings.RnDMultiplier)
  myDict.myThings.fruitAlchemistHiddenNumber += 1
  myDict.myThings.workerEfficiency += (1 * myDict.myThings.fruitTools)
  myDict.myThings.fruitAlchemist += 1
  myDict.myThings.RnDMultiplier += 1
  drawFruit()
  drawUpgrades()
  drawShopPrice()
  setBuyAlechemist()
}

function alchemistJob() {
  myDict.myThings.fruit += (1 * myDict.myThings.fruitTools)
  console.log(myDict.myThings.fruit)
  drawFruit()
}

function setBuyAlechemist() {
  if (myDict.myThings.fruitAlchemist < 0.5) { return }
  if (myDict.myThings.fruitAlchemist >= 1)
    setInterval(alchemistJob, 1000)
  drawFruit()
}

setBuyAlechemist()
setBuyWorker()
drawFruit()















