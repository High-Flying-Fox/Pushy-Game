class spot {

    constructor(char, dx, dy) {
        this.x = dx
        this.y = dy
        this.char = char
    }

    show(override) {
        push()

        translate(this.x, this.y)
        

        if (override == 7 || override == 8 || override == 9) {
            
            imageMode(CENTER)
            angleMode(DEGREES)
            translate(40, 40)
            rotate((pisdir * 90) + 90)
            
            
        }

        if (override == null) {
            image(costumes[this.char], 0, 0)
        } else {
            image(costumes[override], 0, 0)
        }

        imageMode(CORNER)
        pop()
        
    }

    lock(color) {
        if (color == "y") {
            if (this.char == 5) {
                this.char = 3
            }
        }
    }
}