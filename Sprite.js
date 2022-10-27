class Sprite{
    constructor(height, width, xPos, yPos, image){
        this.height = height
        this.width = width
        this.xPos = xPos
        this.yPos = yPos
        this.speed = 0
        this.compSpeed = {dx:0, dy:0}
        this.acceleration = 0
        this.compAccel = {ddx:0, ddy:0}
        this.moveAngle = 0
        this.image = image
        this.imageAngle = null
        this.scene = null
        this.boundAcion = DELETE
        this.visible = true
    }
    //TODO
    draw(){
        this.scene.context = context
        context.save()
        context.translate(this.xPos, this.yPos)
        context.rotate(this.imageAngle)
        context.drawImage(this.image, width, height)

    }
    update(){

    }
    vectProject(){

    }
    addForce(){

    }
    //idea - change how player/enemy bullets work
    setBoundAction(){}

    collidesWith(otherObject){

    }
    checkBounds(){
        
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
    set setHeight(height){
        this.height = height
    }
    get getHeight(){
        return this.height
    }

    //WIDTH set/get
    set setWidth(width){
        this.width = width
    }
    get getWidth(){
        return this.width
    }


    //POSITION set/get
    set setXPos(x){
        this.xPos = x
    }
    set setYPos(y){
        this.yPos = y
    }

    get getPos(){
        return {x: this.xPos, y: this.yPos}
    }
    get getXPos(){
        return this.xPos
    }
    get getYPos(){
        return this.xPos
    }

    //SPEED set/get
    set setSpeed(spd){
        this.speed = spd
    }
    get getSpeed(){
        return this.speed
    }

    //IMAGE get/set
    set setImage(img){
        this.image  = img
    }
    get getImage(){
        return this.image
    }
    //IMAGEANGLE get/set
    set setImageAngle(angle){
        this.imageAngle = angle
    }
    get getImageAngle(){
        return this.imageAngle
    }

    //MOVEANGLE get/set
    set setMoveAngle(angle){
        this.moveAngle = angle
    }
    get getMoveAngle(){
        return this.moveAngle
    }

    //BOUNDACTION get/set
    set setBoundAction(action){
        this.boundAction = action
    }

    //VISIBLE get
    get getVisible(){
        return this.visible
    }



}