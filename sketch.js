let costumes = []
let grid = []
let rows = 7, cols = 7
let playerx = 1, playery = 1
let boxx = 3, boxy = 3
let gatex = 3, gatey = 1
let ykeyx = -1, ykeyy = -1
let pisx = -1, pisy = -1, pisdir = 0
let plax = -1, play = -1, plapressed = false
let level = 1

function preload() {
  costumes[0] = loadImage("art/sprite_0.png")
  costumes[1] = loadImage("art/sprite_1.png")
  costumes[2] = loadImage("art/sprite_2.png")
  costumes[3] = loadImage("art/sprite_3.png")
  costumes[4] = loadImage("art/sprite_4.png")
  costumes[5] = loadImage("art/sprite_5.png")
  costumes[6] = loadImage("art/sprite_6.png")
  costumes[7] = loadImage("art/sprite_7.png")
  costumes[8] = loadImage("art/sprite_8.png")
  costumes[9] = loadImage("art/sprite_9.png")
  costumes[10] = loadImage("art/sprite_10.png")
}

function setup() {
  createCanvas(560, 560);

  grid = Array2d(rows, cols)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new spot(4, j * 80, i * 80)
    }
  }

  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      grid[i][j].char = 3
    }
  }
} 

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (j == playerx && i == playery) {
        grid[i][j].show(2)
      } else if (j == pisx && i == pisy + 1 && pisdir == 2 && plapressed) {
        grid[i][j].show(9)
      } else if (j == boxx && i == boxy) {
        grid[i][j].show(0)
      } else if (j == gatex && i == gatey) {
        grid[i][j].show(1)
      } else if (j == ykeyx && i == ykeyy) {
        grid[i][j].show(6)
      } else if (j == pisx && i == pisy) {
        if (plapressed) {
          grid[i][j].show(8)
        } else {
          grid[i][j].show(7)
        }
      } else if (j == plax && i == play) {
        grid[i][j].show(10)
      } else {
        grid[i][j].show()
      }

    }
  }

  if (boxx == gatex && boxy == gatey) {
    level += 1
    levelchange(level)
  }

  if (boxx == ykeyx && boxy == ykeyy) {

    console.log("yellow key")

    ykeyx = -1
    ykeyy = -1

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {

        grid[i][j].lock("y")

      }
    }
  }

  if (pisx == boxx && pisy + 1 == boxy && pisdir == 2 && plapressed) {
    boxy += 1
  }

  if (boxx == plax && boxy == play || playerx == plax && playery == play) {
    plapressed = true
  } else {
    plapressed = false
  }
  
}

function Array2d(rows, cols) {
  let arr = new Array(cols)

  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows)
  }

  return arr
}

function keyPressed() {
  if (key == "s") {
    if (grid[playery + 1][playerx].char == 3) {
      if (playery != boxy - 1 || playerx != boxx) {
        playery += 1
      } else if (grid[boxy + 1][boxx].char == 3) {
        playery += 1
        boxy += 1
      }
    }
  }
  if (key == "w") {
    if (grid[playery - 1][playerx].char == 3) {
      if (playery != boxy + 1 || playerx != boxx) {
        playery -= 1
      } else if (grid[boxy - 1][boxx].char == 3) {
        playery -= 1
        boxy -= 1
      }
    }
  }
  if (key == "d") {
    if (grid[playery][playerx + 1].char == 3) {
      if (playerx != boxx - 1 || playery != boxy) {
        playerx += 1
      } else if (grid[boxy][boxx + 1].char == 3) {
        playerx += 1
        boxx += 1
      }
    }
  }
  if (key == "a") {
    if (grid[playery][playerx - 1].char == 3) {
      if (playerx != boxx + 1 || playery != boxy) {
        playerx -= 1
      } else if (grid[boxy][boxx - 1].char == 3) {
        playerx -= 1
        boxx -= 1
      }
    }
  }
  if (key == "r") {
    levelchange(level)
  }
}



function levelchange(level) {
  if (level == 1) {
    playerx = 1
    playery = 1
    boxx = 3
    boxy = 3
    gatex = 3
    gatey = 1
  }
  if (level == 2) {
    playerx = 1
    playery = 1
    boxx = 4
    boxy = 4
    gatex = 5
    gatey = 2

    grid[3][5].char = 4
    grid[3][4].char = 4
    grid[3][3].char = 4
  }
  if (level == 3) {
    playerx = 1
    playery = 1
    boxx = 3
    boxy = 2
    gatex = 5
    gatey = 5

    ykeyx = 4
    ykeyy = 2

    grid[3][1].char = 4
    grid[3][2].char = 5
  }
  if (level == 4) {
    playerx = 1
    playery = 4
    boxx = 2
    boxy = 2
    gatex = 5
    gatey = 5

    ykeyx = 2
    ykeyy = 1

    pisx = 2
    pisy = 0
    pisdir = 2

    plax = 5
    play = 1

    grid[3][1].char = 3
    grid[3][3].char = 3
    grid[3][4].char = 3
    grid[3][5].char = 3

    grid[1][1].char = 4
    grid[1][4].char = 4

    grid[4][4].char = 4
    grid[4][5].char = 4
    grid[2][4].char = 4

    grid[5][4].char = 5

  }
}

