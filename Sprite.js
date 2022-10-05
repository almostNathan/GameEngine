class Sprite{
    constructor(height, width, xPos, yPos, image){
        this.height = height
        this.width = width
        this.xPos = xPos
        this.yPos = yPos
        this.compSpeed = {dx:0, dy:0}
        this.speed = 0
        this.moveAngle = 0
        this.image = image
        this.imageAngle = null
        this.scene = null
        this.boundAcion = "delete"
        this.visible = true
    }
        //TODO
        collidesWith(/*sprite*/){

        }
        checkBounds(){
            
        }
        addForce(){

        }
        distanceTo(/*sprite*/){
            
        }
        angleTo(/*sprite*/){

        }


        hide(){
            this.visible = false
        }
        show(){
            this.visible = true
        }

/******GETTERS/SETTERS*******/
        //HEIGHT set/get
        set height(height){
            this.height = height
        }
        get height(){
            return this.height
        }

        //WIDTH set/get
        set width(){
            this.width = width
        }
        get width(){
            return this.width
        }

        //SIZE set/get
        set size(width, height){
            this.height = height
            this.width = width
        }
        get size(){
            return {width: this.width, height: this.height}
        }

        //POSITION set/get
        set pos(x, y){
            this.xPos = x
            this.yPos = y
        }
        set xPos(x){
            this.xPos = x
        }
        set yPos(y){
            this.yPos = y
        }

        get pos(){
            return {x: this.xPos, y: this.yPos}
        }
        get xPos(){
            return this.xPos
        }
        get yPos(){
            return this.xPos
        }

        //SPEED set/get
        set speed(spd){
            this.speed = spd
        }
        get speed(){
            return this.speed
        }

        //IMAGE get/set
        set image(img){
            this.image  = img
        }
        get image(){
            return this.image
        }
        //IMAGEANGLE get/set
        set imageAngle(angle){
            this.imageAngle = angle
        }
        get imageAngle(){
            return this.imageAngle
        }

        //MOVEANGLE get/set
        set moveAngle(angle){
            this.moveAngle = angle
        }
        get moveAngle(){
            return this.moveAngle
        }

        //BOUNDACTION get/set
        set boundAction(action){
            this.boundAction = action
        }

        //VISIBLE get/set
        set visible(isVisible){
            this.isVisible
        }
        get visible(){
            return this.visible
        }



}