let costumes = []
let grid = []
let rows = 7, cols = 7
let tilesize = 80
let gametick = 0
let level = 1
let up,left,right,down,re
let buttonwid = 560, buttonhei
let aniframe = 0

let playerx = 1, playery = 1, playermove = false
let boxx = 3, boxy = 3, boxmove = false
let gatex = 3, gatey = 1

let ykeyx = -1, ykeyy = -1
let pisx = -1, pisy = -1, pisdir = 0
let fanx = -1, fany = -1, fandir = 0, fanframe = 0, fanrange = [[], []]
let plax = -1, play = -1, plapressed = false
let Fplax = -1, Fplay = -1, Fplapressed = false, fplainvert = false



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

  //conveyor tiles
  costumes[19] = loadImage("art/conveyor/conveyor_0.png")
  costumes[20] = loadImage("art/conveyor/conveyor_1.png")
  costumes[21] = loadImage("art/conveyor/conveyor_2.png")
  costumes[22] = loadImage("art/conveyor/conveyor_3.png")
  costumes[23] = loadImage("art/conveyor/conveyor_4.png")
  costumes[24] = loadImage("art/conveyor/conveyor_5.png")
  costumes[25] = loadImage("art/conveyor/conveyor_6.png")
  costumes[26] = loadImage("art/conveyor/conveyor_7.png")

  //spike tile
  costumes[27] = loadImage("art/sprite_8.png")

  //letter tiles
  costumes[28] = loadImage("art/sprite_9.png")
  costumes[29] = loadImage("art/sprite_10.png")
  costumes[30] = loadImage("art/sprite_11.png")
  costumes[31] = loadImage("art/sprite_12.png")
  costumes[32] = loadImage("art/sprite_13.png")
}

// setup
function setup() {

  // canvas
  if (window.innerWidth >= 560) {
    createCanvas(560, 560);
  } else {
    createCanvas(window.innerWidth, window.innerWidth);
    tilesize = window.innerWidth / 7
  }

  //button stuff
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
  up.touchStarted(mup)
  right.touchStarted(mright)
  left.touchStarted(mleft)
  down.touchStarted(mdown)
  re.touchStarted(reset)
  

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
  reset()
} 

//main game loop
function draw() {
  background("#150918");
  

  
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
      } else if (grid[i][j].char == 20) {
        grid[i][j].show(19 + Math.floor(aniframe))
      } else {
        grid[i][j].show()
      }


    }
  }

  //death check
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (((i == boxy && j == boxx) || (i == playery && j == playerx)) && grid[i][j].char == 27) {
        reset()
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
  if (boxmove == false) {
    if (pisx == boxx && pisy + 1 == boxy && pisdir == 2 && plapressed) {
      boxy += 1
      boxmove == true
    }
    if (pisx == boxx && pisy - 1 == boxy && pisdir == 0 && plapressed) {
      boxy -= 1
      boxmove == true
    }
    if (pisx + 1 == boxx && pisy == boxy && pisdir == 1 && plapressed) {
      boxx += 1
      boxmove == true
    }
    if (pisx - 1 == boxx && pisy == boxy && pisdir == -1 && plapressed) {
      boxx -= 1
      boxmove == true
    }
  }

  // fan push mechanic
  let bo = false

  for (i = 0; i < fanrange[0].length; i++) {
    if (boxx == fanrange[0][i] && boxy == fanrange[1][i]) {
      bo = true
    }
  }

  if (bo && boxmove == false) {
    boxmove == true
    if (!fplainvert) {
      if (fandir == 0 && Fplapressed && gametick > 3.9) {
        bup()
      }
      if (fandir == -1 && Fplapressed && gametick > 3.9) {
        bleft()
      }
      if (fandir == 1 && Fplapressed && gametick > 3.9) {
        bright()
      }
      if (fandir == 2 && Fplapressed && gametick > 3.9) {
        bdown()
      }
    } else {
      if (fandir == 0 && !Fplapressed && gametick > 3.9) {
        bup()
      }
      if (fandir == -1 && !Fplapressed && gametick > 3.9) {
        bleft()
      }
      if (fandir == 1 && !Fplapressed && gametick > 3.9) {
        bright()
      }
      if (fandir == 2 && !Fplapressed && gametick > 3.9) {
        bdown()
      }
    }
    
  }

  // fan animation frame value
  if ((Fplapressed && !fplainvert) || (!Fplapressed && fplainvert)) {
    fanframe = (fanframe + 0.1) % 7.5
  }

  // piston plate check
  if (boxx == plax && boxy == play || playerx == plax && playery == play) {
    plapressed = true
  } else {
    plapressed = false
  }

  //conveyor move mechanic
  playermove = false
  boxmove = false
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == playery && j == playerx && (grid[i][j].char > 18 && grid[i][j].char < 27) && playermove == false) {
        
        if (grid[i][j].convdir == -1 && gametick > 3.9) {
          playermove = true
          mleft()  
        }
        if (grid[i][j].convdir == 0 && gametick > 3.9) {
          playermove = true
          mup()
        }
        if (grid[i][j].convdir == 1 && gametick > 3.9) {
          playermove = true
          mright()
        }
        if (grid[i][j].convdir == 2 && gametick > 3.9) {
          playermove = true
          mdown()
        }
      }

      if (i == boxy && j == boxx && (grid[i][j].char > 18 && grid[i][j].char < 27) && boxmove == false) {
        if (grid[i][j].convdir == -1 && gametick > 3.9) {
          boxmove = true
          bleft()   
        }
        if (grid[i][j].convdir == 0 && gametick > 3.9) {
          boxmove = true
          bup()
            
        }
        if (grid[i][j].convdir == 1 && gametick > 3.9) {
          boxmove = true
          bright()
            
        }
        if (grid[i][j].convdir == 2 && gametick > 3.9) {
          boxmove = true
          bdown()
            
        }
        
      }

      
      
    }
  }
  

  // fan plate check
  if (boxx == Fplax && boxy == Fplay || playerx == Fplax && playery == Fplay) {
    Fplapressed = true
  } else {
    Fplapressed = false
  }
  // animation frames
  aniframe = (aniframe + 0.1) % 7.5

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

function mdown() {
  if (grid[playery + 1][playerx].char == 3 || grid[playery + 1][playerx].char == 20 || grid[playery + 1][playerx].char == 27) {
      if (playery != boxy - 1 || playerx != boxx) {
        playery += 1
      } else if (grid[boxy + 1][boxx].char == 3 || grid[boxy + 1][boxx].char == 20 || grid[boxy + 1][boxx].char == 27) {
        playery += 1
        boxy += 1
      }
    }
}

function mup() {
  if (grid[playery - 1][playerx].char == 3 || grid[playery - 1][playerx].char == 20 || grid[playery - 1][playerx].char == 27) {
      if (playery != boxy + 1 || playerx != boxx) {
        playery -= 1
      } else if (grid[boxy - 1][boxx].char == 3 || grid[boxy - 1][boxx].char == 20 || grid[boxy - 1][boxx].char == 27) {
        playery -= 1
        boxy -= 1
      }
    }
}

function mright() {
  if (grid[playery][playerx + 1].char == 3 || grid[playery][playerx + 1].char == 20 || grid[playery][playerx + 1].char == 27) {
      if (playerx != boxx - 1 || playery != boxy) {
        playerx += 1
      } else if (grid[boxy][boxx + 1].char == 3 || grid[boxy][boxx + 1].char == 20 || grid[boxy][boxx + 1].char == 27) {
        playerx += 1
        boxx += 1
      }
    }
}

function mleft() {
  if (grid[playery][playerx - 1].char == 3 || grid[playery][playerx - 1].char == 20 || grid[playery][playerx - 1].char == 27) {
      if (playerx != boxx + 1 || playery != boxy) {
        playerx -= 1
      } else if (grid[boxy][boxx - 1].char == 3 || grid[boxy][boxx - 1].char == 20 || grid[boxy][boxx - 1].char == 27) {
        playerx -= 1
        boxx -= 1
      }
    }
}

function bdown() {
  if (grid[boxy + 1][boxx].char == 3 || grid[boxy + 1][boxx].char == 20 || grid[boxy + 1][boxx].char == 27) {
            boxy += 1
          }
}

function bup() {
  if (grid[boxy - 1][boxx].char == 3 || grid[boxy - 1][boxx].char == 20 || grid[boxy - 1][boxx].char == 27) {
            boxy -= 1
          }
}

function bright() {
  if (grid[boxy][boxx + 1].char == 3 || grid[boxy][boxx + 1].char == 20 || grid[boxy][boxx + 1].char == 27) {
            boxx += 1
          }
}

function bleft() {
  if (grid[boxy][boxx - 1].char == 3 || grid[boxy][boxx - 1].char == 20 || grid[boxy][boxx - 1].char == 27) {
            boxx -= 1
          }
}
