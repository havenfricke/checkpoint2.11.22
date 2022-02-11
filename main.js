let plants = {
  Paul: {
    water: 100,
    fertilizer: 100,
    love: 100
  },
  Frank: {
    water: 100,
    fertilizer: 100,
    love: 100
  },
  George: {
    water: 100,
    fertilizer: 100,
    love: 100
  },
  Nancy: {
    water: 100,
    fertilizer: 100,
    love: 100
  },
}

function drawPlants() {
  let template = ''
  for (let key in plants) {
    let care = plants[key]
    template += `<span class="col-2 selectable">
    <h1>🌳</h1>
    <div class="progress" style="height: 5px;">
    Water
      <div onclick="giveWater()" class="progress-bar" role="progressbar" style="width: ${care.water}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">${care.water}</div>
    Fertilizer
        <div onclick="giveWater()" class="progress-bar" role="progressbar" style="width: ${care.fertilizer}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">${care.fertilizer}</div>
    Love
        <div onclick="giveWater()" class="progress-bar" role="progressbar" style="width: ${care.love}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">${care.love}</div>
    </div>
    </div>`
  }
  document.getElementById('plant-row').innerHTML = template
}

drawPlants()