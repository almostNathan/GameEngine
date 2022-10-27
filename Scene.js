class Scene{
    constructor(height, width, fr){
        this.height = height
        this.width = width
        this.position = null
        this.sprites = []
        this.framerate = fr
        this.currentKey = null
        this.keysDown = new Array(256) 
        this.mouseButton = null

    }



    start(){

        this.canvas = document.createElement("canvas")
        this.canvas.style.backgroundColor = "yellow"
        document.body.appendChild(this.canvas)
        this.context = this.canvas.getContext("2d")
        this.canvas.width = this.width
        this.canvas.height = this.height

        //Set up key press function
        document.onkeydown = this.updateKeys
        //Set up key release function
        document.onkeyup = this.clearKeys
        //initialize keysDown Array
        this.initKeys()

        //Set up mouse movement function
        document.onmousemove = function(e){
            this.mouseX = e.pageX
            this.mouseY = e.pageY
        }
        //set up mouse clicking functions
        document.mouseClicked = false
        document.onmousedown = function(){
            this.mouseDown = true
            this.mouseClicked = true
        }
        document.onmouseup = function(){
            this.mouseDown = false
            this.mouseClicked = false
        }

        //set framerate
        this.interval = setInterval(this.update, 50)


    }
    //stop updating 
    stop(){
        clearInterval(this.interval)
    }
    clear(){
        this.context.clearRect(0,0,this.width, this.height)
    }
    hideCursor(){
        this.canvas.style.cursor = "none"
    }
    showCursor(){
        this.canvas.style.cursor = "default"
    }

    updateKeys(e){
        //set current key
        this.currentKey = e.keyCode
        console.log(e.keyCode)
        //update keysDown Array adding current key
        this.keysDown[e.keyCode] = true

    }

    //reutrn current mouse pos {x: xPos, y: yPos}

    //sets all key values to false
    initKeys(){
        this.currentKey = null
        for (let i=0; i<256; i++){
            this.keysDown[i] = false
        }
    }
    update(){
        let i = 0
    }


    //setters and getters
    //mouse position not sure if setters are necessary
    get getMouseX(){
        return this.mouseX
    }
    get getMouseY(){
        return this.mouseY
    }
    get getMousePos(){
        return {x : this.mouseX, y : this.mouseY}
    }
    set setMouseX(x){
        this.mouseX = x
    }
    set setMouseY(y){
        this.mouseY = y
    }
    //accepts object with {x,y} properties
    set setMousePos(pos){
        this.mouseX = pos.x
        this.mouseY = pos.y
    }
    //keys
    get getCurrentKey(){
        return currentKey
    }
    


    //keyboard constants (I just copied and pasted, I hope thats fine)
    K_A = 65; K_B = 66; K_C = 67; K_D = 68; K_E = 69; K_F = 70; K_G = 71;
    K_H = 72; K_I = 73; K_J = 74; K_K = 75; K_L = 76; K_M = 77; K_N = 78;
    K_O = 79; K_P = 80; K_Q = 81; K_R = 82; K_S = 83; K_T = 84; K_U = 85;
    K_V = 86; K_W = 87; K_X = 88; K_Y = 89; K_Z = 90;
    K_LEFT = 37; K_RIGHT = 39; K_UP = 38;K_DOWN = 40; K_SPACE = 32;
    K_ESC = 27; K_PGUP = 33; K_PGDOWN = 34; K_HOME = 36; K_END = 35;
    K_0 = 48; K_1 = 49; K_2 = 50; K_3 = 51; K_4 = 52; K_5 = 53;
    K_6 = 54; K_7 = 55; K_8 = 56; K_9 = 57; 
}