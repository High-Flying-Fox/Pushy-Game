class spot {

    constructor(char, dx, dy) {
        this.x = dx
        this.y = dy
        this.char = char
    }

    show(override) {
        push()

        translate(this.x, this.y)
        if (override == null) {
            image(costumes[this.char], 0, 0)
        } else {
            image(costumes[override], 0, 0)
        }

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