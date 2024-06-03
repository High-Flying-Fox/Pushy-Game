function Spot(index, char) {
    this.index = index
    this.char = char

    this.show = function(i, j) {

        let node = document.getElementById("s" + this.index).textContent = grid[i][j].char
    }
}

function vectorToIndex(x, y) {
    return (x + 1) + y * 5
}

grid = []

cols = 5
rows = 5

playerX = 0
playerY = 0
playerIndex = vectorToIndex(playerX, playerY)

boxX = 2
boxY = 2
boxIndex = vectorToIndex(boxX, boxY)

targetX = 3
targetY = 0
targetIndex = vectorToIndex(targetX, targetY)

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
        grid[i][j] = new Spot(vectorToIndex(j, i), " ")
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
            if (boxIndex == playerIndex + rows) {
                if (boxY !== cols - 1) {
                    playerY += 1
                    boxY += 1
                }
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







