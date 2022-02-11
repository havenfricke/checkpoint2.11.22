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
    let water = plants[key]
    template += `<span class="col-2 selectable">
    <h1>🌳</h1>
    <div class="progress" style="height: 5px rounded;">
      <div onclick="giveWater()" class="progress-bar" role="progressbar" style="width: ${}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100"></div>
        <div onclick="giveWater()" class="progress-bar" role="progressbar" style="width: ${}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100"></div>
        <div onclick="giveWater()" class="progress-bar" role="progressbar" style="width: ${}%;" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100"></div>
    </div>`
  }
}