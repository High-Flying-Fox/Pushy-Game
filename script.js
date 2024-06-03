function Spot(index, char) {
    this.index = index
    this.char = char

    this.show = function(i, j) {

        let node = document.getElementById("s" + this.index).textContent = grid[i][j].char
    }
}



grid = []

cols = 5
rows = 5

playerX = 0
playerY = 0

boxX = 2
boxY = 2

targetX = 3
targetY = 0

function make2DArray(cols, rows) {
    
    let arr = [];
    
    
    arr = new Array(cols);
    for (let j = 0; j < arr.length; j++) {
    arr[j] = new Array(rows);
    }
    
    return arr
}

function setup() {

grid = make2DArray(cols, rows);

for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
        grid[i][j] = new Spot((j + 1) + i * 5, " ")
    }
}

console.table(grid)
}

function draw() {

    grid[targetY][targetX].char = "@"
    grid[boxY][boxX].char = "#"
    grid[playerY][playerX].char = "&"

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            grid[i][j].show(i, j);
        }
    }

}

function keyPressed() {

    grid[playerY][playerX].char = " "
    grid[boxY][boxX].char = " "

    if (key == 's') {
        if (playerY !== cols - 1) {
            if (boxY == playerY + 1) {
                if (boxY !== cols - 1) {
                    playerY += 1
                }
            } else {
                playerY += 1
            }
            
        }
    }
    if (key == 'w') {
        if (playerY !== 0) {
            playerY -= 1
        }
    }
    if (key == 'a') {
        if (playerX !== 0) {
            playerX -= 1
        }
    }
    if (key == 'd') {
        if (playerX !== rows - 1) {
            playerX += 1
        }
    }
        
}







