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
  if (level == 6) {
    boxx = 2
    boxy = 5
    playerx = 4
    playery = 5
    gatey = 1
    gatex = 2

    pisx = -1
    pisy = -1
    fanx = 1
    fany = 2
    fandir = 1
    fanrange = [[2],[2]]
    fplainvert = true
    plax = -1
    play = -1
    Fplax = 4
    Fplay = 1

    grid[1][3].char = 3

    grid[2][2].char = 20
    grid[3][2].char = 20
    grid[4][2].char = 20
    grid[5][2].char = 20
    grid[2][2].convdir = 0
    grid[3][2].convdir = 0
    grid[4][2].convdir = 0
    grid[5][2].convdir = 0

    grid[1][1].char = 27
    grid[3][1].char = 27
    grid[4][1].char = 27
    grid[5][1].char = 27
    grid[1][3].char = 27
    grid[2][3].char = 27
    grid[3][3].char = 27
    grid[4][3].char = 27
    grid[5][3].char = 27
    grid[2][4].char = 27
    grid[3][4].char = 27
    grid[4][4].char = 27
  }
  if (level == 7) {
    playerx = 3
    playery = 3
    boxx = 3
    boxy = 1
    gatex = 4
    gatey = 2
    ykeyx = 3
    ykeyy = 5

    pisx = 6
    pisy = 2
    pisdir = -1
    fanx = -1
    fany = -1
    fandir = 0
    fanrange = [[],[]]
    fplainvert = false
    plax = 2
    play = 4
    Fplax = -1
    Fplay = -1

    grid[3][3].char = 3
    grid[4][3].char = 3
    grid[4][2].char = 3
    grid[2][4].char = 3

    grid[2][2].char = 27
    grid[3][2].char = 27

    grid[4][3].char = 5

    grid[1][1].char = 20
    grid[1][1].convdir = 1
    grid[1][2].char = 20
    grid[1][2].convdir = 1
    grid[1][3].char = 20
    grid[1][3].convdir = 1
    grid[1][4].char = 20
    grid[1][4].convdir = 1

    grid[1][5].char = 20
    grid[1][5].convdir = 2
    grid[2][5].char = 20
    grid[2][5].convdir = 2
    grid[3][5].char = 20
    grid[3][5].convdir = 2
    grid[4][5].char = 20
    grid[4][5].convdir = 2

    grid[5][5].char = 20
    grid[5][5].convdir = -1
    grid[5][4].char = 20
    grid[5][4].convdir = -1
    grid[5][3].char = 20
    grid[5][3].convdir = -1
    grid[5][2].char = 20
    grid[5][2].convdir = -1

    grid[5][1].char = 20
    grid[5][1].convdir = 0
    grid[4][1].char = 20
    grid[4][1].convdir = 0
    grid[3][1].char = 20
    grid[3][1].convdir = 0
    grid[2][1].char = 20
    grid[2][1].convdir = 0
  }
  if (level == 8) {
    playerx = 3
    playery = 5
    boxx = 3
    boxy = 3
    gatex = 4
    gatey = 1
    ykeyx = 2
    ykeyy = 2

    pisx = 2
    pisy = 1
    pisdir = 2
    fanx = -1
    fany = -1
    fandir = 0
    fanrange = [[],[]]
    fplainvert = false
    plax = 5
    play = 5
    Fplax = -1
    Fplay = -1

    grid[5][1].char = 3
    grid[5][2].char = 3
    grid[5][3].char = 3
    grid[5][4].char = 3
    grid[5][5].char = 3
    grid[2][2].char = 3
    grid[1][4].char = 3

    grid[2][1].char = 4
    grid[2][3].char = 4
    grid[2][5].char = 4
    grid[1][1].char = 4
    grid[1][3].char = 4
    grid[1][5].char = 4

    grid[2][4].char = 5

    grid[4][5].char = 20
    grid[4][5].convdir = -1
    grid[4][4].char = 20
    grid[4][4].convdir = -1
    grid[4][3].char = 20
    grid[4][3].convdir = -1
    grid[4][2].char = 20
    grid[4][2].convdir = -1

    grid[3][4].char = 20
    grid[3][4].convdir = 1
    grid[3][3].char = 20
    grid[3][3].convdir = 1
    grid[3][2].char = 20
    grid[3][2].convdir = 1
    grid[3][1].char = 20
    grid[3][1].convdir = 1
    
  }
  if (level == 9) {
    playerx = 3
    playery = 5
    boxx = 3
    boxy = 3
    gatex = -1
    gatey = -1
    ykeyx = -1
    ykeyy = -1

    pisx = -1
    pisy = -1
    pisdir = 0
    fanx = -1
    fany = -1
    fandir = 0
    fanrange = [[],[]]
    fplainvert = false
    plax = -1
    play = -1
    Fplax = -1
    Fplay = -1

    grid[5][1].char = 3
    grid[5][2].char = 3
    grid[5][3].char = 3
    grid[5][4].char = 3
    grid[5][5].char = 3
    grid[2][2].char = 30
    grid[1][4].char = 30
    grid[2][1].char = 3
    grid[2][3].char = 31
    grid[2][5].char = 3
    grid[1][1].char = 3
    grid[1][3].char = 29
    grid[1][5].char = 3
    grid[2][4].char = 32
    grid[1][2].char = 28

    grid[4][2].char = 4
    grid[4][3].char = 4
    grid[4][4].char = 4

    grid[5][5].char = 20
    grid[5][5].convdir = -1
    grid[5][4].char = 20
    grid[5][4].convdir = -1
    grid[5][3].char = 20
    grid[5][3].convdir = -1
    grid[5][2].char = 20
    grid[5][2].convdir = -1

    grid[4][5].char = 20
    grid[4][5].convdir = 2

    grid[5][1].char = 20
    grid[5][1].convdir = 0

  }
}
