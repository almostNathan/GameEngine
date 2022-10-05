class Scene{
    constructor(size, fr){
        this.size = size
        this.position = null
        this.sprites = []
        this.framerate = fr
        this.keyState = []
        this.mouseButton = null

        this.canvas = document.createElement("canvas")
        document.body.appendChild(this.canvas)
        this.context = this.canvas.getContext("2d")
    }

    start(){

    }
    end(){

    }
    pause(){

    }
    clear(){

    }
    hideCursor(){

    }
    showCursor(){

    }

    getMousePos(){
    }
}