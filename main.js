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
    hiddenMultiplier: 1,
    bookMultiplier: 1,
    fertilizerMultiplier: 1,
    workerMultiplier: 1,
    toolMultiplier: 1,
    RnDMultiplier: 1
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
    <span class="col-12 text-start text-light p-1" 2>Green Thumb Level: ${upgradesBought.fruitMultiplier}</span>
    <!--total upgrades-->
  </div>

  <div>
  <span class="col-12 text-start text-light p-1" 2>Worker Efficiency Level: ${(upgradesBought.hiddenMultiplier * 1)}</span>
  <!--total upgrades-->
</div>`
  }
  document.getElementById('upgrades').innerHTML = template
}

drawUpgrades()

function drawShopPrice() {
  let template = ''
  for (let key in myDict) {
    let inflation = myDict[key]
    template += `<span class="col-12 text-center text-light p-3">
    <h2>UPGRADES STORE</h2>
  </span>

  <div class="row d-flex justify-content-center p-2">

    <button id="buy-book" onclick="buyBook()" type="button" class="col-2 rounded-pill p-3 btn-success">${(inflation.bookMultiplier * 25)} FRUITS:
      BOTANY
      BOOK</button>
    <button id="buy-fertilizer" onclick="buyFertilizer()" type="button"
      class="col-2 p-3 rounded-pill btn-warning">${(inflation.fertilizerMultiplier * 100)}
      FRUITS: FERTILIZER</button>
    <button id="buy-worker" onclick="buyWorker()" type="button" class="col-2 p-3 rounded-pill btn-primary">${inflation.workerMultiplier * 250}
      FRUITS:
      BUY
      WORKER</button>
    <button id="buy-tools" onclick="buyTools()" type="button" class="col-2 p-3 rounded-pill btn-danger">${(inflation.toolMultiplier * 500)} FRUITS:
      BUY
      TOOLS</button>
    <button id="buy-RnD" onclick="buyRnD()" type="button" class="col-2 p-3 rounded-pill btn-info">${(inflation.RnDMultiplier * 10000)} FRUITS:
      BUY SCIENCTIST</button>
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
  myDict.myThings.fruitMultiplier += 1
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
  myDict.myThings.fruitMultiplier += 2
  myDict.myThings.fruitFertilizer += 1
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
  myDict.myThings.workerMultiplier += 1
  drawFruit()
  drawUpgrades()
  setBuyWorker()
  drawShopPrice()
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
  if (myDict.myThings.fruit < (500 * myDict.myThings.toolMultiplier)) { return }
  if (myDict.myThings.fruit >= (500 * myDict.myThings.toolMultiplier))
    myDict.myThings.fruit -= (500 * myDict.myThings.toolMultiplier)
  myDict.myThings.hiddenMultiplier += 1
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
  myDict.myThings.hiddenMultiplier += 1
  myDict.myThings.fruitFertilizer += 3
  myDict.myThings.RnDMultiplier += 1
  drawFruit()
  drawUpgrades()
  drawShopPrice()
}

setBuyWorker()
drawFruit()















