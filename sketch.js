let costumes = []
let grid = []
let rows = 7, cols = 7
let tilesize = 80
let gametick = 0
let level = 1
let up,left,right,down,re
let buttonwid = 560, buttonhei

let playerx = 1, playery = 1
let boxx = 3, boxy = 3
let gatex = 3, gatey = 1

let ykeyx = -1, ykeyy = -1
let pisx = -1, pisy = -1, pisdir = 0
let fanx = -1, fany = -1, fandir = 0, fanframe = 0, fanrange = [[], []]
let plax = -1, play = -1, plapressed = false
let Fplax = -1, Fplay = -1, Fplapressed = false



//loads pixel art
function preload() {
  // main tiles
  costumes[0] = loadImage("art/sprite_0.png")
  costumes[1] = loadImage("art/sprite_1.png")
  costumes[2] = loadImage("art/sprite_2.png")
  costumes[3] = loadImage("art/sprite_3.png")
  costumes[4] = loadImage("art/sprite_4.png")
  costumes[5] = loadImage("art/sprite_5.png")
  costumes[6] = loadImage("art/sprite_6.png")

  //piston tiles
  costumes[7] = loadImage("art/piston/piston_0.png")
  costumes[8] = loadImage("art/piston/piston_1.png")
  costumes[9] = loadImage("art/piston/piston_2.png")

  //pressure plate
  costumes[10] = loadImage("art/sprite_7.png")

  //fan tiles
  costumes[11] = loadImage("art/fan/fan_0.png")
  costumes[12] = loadImage("art/fan/fan_1.png")
  costumes[13] = loadImage("art/fan/fan_2.png")
  costumes[14] = loadImage("art/fan/fan_3.png")
  costumes[15] = loadImage("art/fan/fan_4.png")
  costumes[16] = loadImage("art/fan/fan_5.png")
  costumes[17] = loadImage("art/fan/fan_6.png")
  costumes[18] = loadImage("art/fan/fan_7.png")
}

// setup
function setup() {

  //i hate mobile
  document.addEventListener('touchmove', function(e) {
    if (window.scrollY === 0 && e.touches[0].pageY > 0) {
        e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });

  // canvas
  if (window.innerWidth >= 560) {
    createCanvas(560, 560);
  } else {
    createCanvas(window.innerWidth, window.innerWidth);
    tilesize = window.innerWidth / 7
  }

  up = createButton("/\\")
  up.parent(document.getElementById("up"))
  left = createButton("<")
  left.parent(document.getElementById("side"))
  right = createButton(">")
  right.parent(document.getElementById("side"))
  down = createButton("\\/")
  down.parent(document.getElementById("down"))
  re = createButton("Reset")
  re.parent(document.getElementById("reset"))
  up.addClass("middle")
  right.addClass("middle")
  left.addClass("middle")
  down.addClass("middle")
  re.addClass("middle")
  // grid
  grid = Array2d(rows, cols)

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new spot(4, j * tilesize, i * tilesize)
    }
  }

  // grass
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      grid[i][j].char = 3
    }
  }
} 

//main game loop
function draw() {
  background(220);

  // grid run thought
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      // tile override if's
      if (j == playerx && i == playery) {
        grid[i][j].show(2)
      } else if (j == pisx && i == pisy + 1 && pisdir == 2 && plapressed) {
        grid[i][j].show(9)
      } else if (j == pisx && i == pisy - 1 && pisdir == 0 && plapressed) {
        grid[i][j].show(9)
      } else if (j == pisx + 1 && i == pisy && pisdir == 1 && plapressed) {
        grid[i][j].show(9)
      } else if (j == pisx - 1 && i == pisy && pisdir == -1 && plapressed) {
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
      } else if (j == Fplax && i == Fplay) {
        grid[i][j].show(10)
      } else if (j == fanx && i == fany) {
        grid[i][j].show(11 + Math.floor(fanframe))
      } else {
        grid[i][j].show()
      }

    }
  }

  // level end check
  if (boxx == gatex && boxy == gatey) {
    level += 1
    levelchange(level)
  }

  // key pick up
  if (boxx == ykeyx && boxy == ykeyy) {

    ykeyx = -1
    ykeyy = -1

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].lock("y")
      }
    }
  }

  // piston push mechanic
  if (pisx == boxx && pisy + 1 == boxy && pisdir == 2 && plapressed) {
    boxy += 1
  }
  if (pisx == boxx && pisy - 1 == boxy && pisdir == 0 && plapressed) {
    boxy -= 1
  }
  if (pisx + 1 == boxx && pisy == boxy && pisdir == 1 && plapressed) {
    boxx += 1
  }
  if (pisx - 1 == boxx && pisy == boxy && pisdir == -1 && plapressed) {
    boxx -= 1
  }

  // fan push mechanic
  let bo = false

  for (i = 0; i < fanrange[0].length; i++) {
    if (boxx == fanrange[0][i] && boxy == fanrange[1][i]) {
      bo = true
    }
  }

  if (bo) {
    if (fandir == 0 && Fplapressed && gametick > 3.9) {
      boxy -= 1
    }
  }

  // fan animation frame value
  if (Fplapressed) {
    fanframe = (fanframe + 0.1) % 7.5
  }

  // piston plate check
  if (boxx == plax && boxy == play || playerx == plax && playery == play) {
    plapressed = true
  } else {
    plapressed = false
  }

  // fan plate check
  if (boxx == Fplax && boxy == Fplay || playerx == Fplax && playery == Fplay) {
    Fplapressed = true
  } else {
    Fplapressed = false
  }

  // game tick set
  gametick = ((gametick += 0.1) %  4)
}

// 2d grid list function
function Array2d(rows, cols) {
  let arr = new Array(cols)

  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows)
  }

  return arr
}

function reset() {
  levelchange(level)
}
