class Positionable{
    constructor(position) {
    this.position= position;
    }

   get x () {
    return this.position.x
   }
   
   get y () {
    return this.position.y
   }

   set x (value) {
    return this.position.x = value
   }

   set y (value) {
    return this.position.y = value
   }
}