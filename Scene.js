class Scene{
    constructor(size, fr){
        this.size = size
        this.position = null
        this.sprites = []
        this.framerate = fr
        this.currentKey = null
        this.keysDown = new Array(256) 
        this.mouseButton = null

        this.canvas = document.createElement("canvas")
        document.body.appendChild(this.canvas)
        this.context = this.canvas.getContext("2d")
    }

    start(){
        //TODO
        document.onkeydown = this.updateKeys
        //TODO
        document.onkeyup = this.clearKeys

        document.onmousemove = this.updateMousePos
        document.mouseClicked = false
        document.onmousedown = function(){
            this.mouseDown = true
            this.mouseClicked = true
        }
        document.onmouseup = function(){
            this.mouseDown = false
            this.mouseClicked = false
        }


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
    //reutrn current mouse pos {x: xPos, y: yPos}
    updateMousePos(e){
        this.mouseX = e.pageX
        this.mouseY = e.pageY
    }

    //sets all key values to false
    initKeys(){
        for (i=0; i<256; i++){
            keysDown[i] = false
        }
    }
}