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

    //button = createButton("Reset")
    //button.addClass("middle")
    
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
  if (level == 5) {
    playerx = 5
    playery = 1
    boxx = 1
    boxy = 5
    gatex = 2
    gatey = 1

    ykeyx = -1
    ykeyy = -1

    pisx = 0
    pisy = 1
    pisdir = 1

    fanx = 1
    fany = 6
    fandir = 0
    fanrange = [[1, 1, 1, 1], [2, 3, 4, 5]]

    plax = 3
    play = 2

    Fplax = 3
    Fplay = 5

    grid[1][3].char = 4
    grid[2][2].char = 4
    grid[3][2].char = 4
    grid[4][2].char = 4
    grid[5][2].char = 4

    grid[1][1].char = 3
    grid[1][4].char = 3
    grid[2][4].char = 3
    grid[4][4].char = 3
    grid[4][5].char = 3


  }
}
