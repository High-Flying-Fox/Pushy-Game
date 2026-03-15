class spot {

    constructor(char, dx, dy) {
        this.x = dx
        this.y = dy
        this.char = char
    }

    //display tiles
    show(override) {
        push()

        translate(this.x, this.y)
        
        //piston override
        if (override == 7 || override == 8 || override == 9) {
            
            imageMode(CENTER)
            angleMode(DEGREES)
            translate(tilesize / 2, tilesize / 2)
            rotate((pisdir * 90) + 90)
            
            
        }

        //fan override
        if (override == 11 || override == 12 || override == 13 || override == 14 || override == 15 || override == 16 || override == 17 || override == 18) {
            
            imageMode(CENTER)
            angleMode(DEGREES)
            translate(tilesize / 2, tilesize / 2)
            rotate((fandir * 90) + 90)
            
            
        }

        // general override
        if (override == null) {
            image(costumes[this.char], 0, 0, tilesize, tilesize)
        } else {
            image(costumes[override], 0, 0, tilesize, tilesize)
        }

        imageMode(CORNER)
        pop()
        
    }

    //lock stuff
    lock(color) {
        if (color == "y") {
            if (this.char == 5) {
                this.char = 3
            }
        }
    }
}