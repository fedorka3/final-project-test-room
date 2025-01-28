const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");

//Creates player class
class player {

    //Constructor
    constructor(x, y, velocity = {xl: 0, xr: 0, y: 0}, speed, size = {width: 65, height: 65}) {
        
        //Positions
        this.x = x
        this.y = y
        
        //Speed/velocity
        this.velocity = velocity
        this.speed = speed

        this.size = size
    }
    
    //Draws character
    draw() {

        //Move on x-axis
        this.x += this.velocity.xl
        this.x += this.velocity.xr
    
        //Move on y-axis
        this.y += this.velocity.y

        ctx.fillStyle = '#00b7e0'
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height)
    }
}

//Creates plr object
const plr = new player(40, 40, undefined, 5.5, undefined)

//Listeners for movement
window.addEventListener('keydown', (e) => {
    if (e.code == 'KeyD') plr.velocity.xr = plr.speed
    if (e.code == 'KeyA') plr.velocity.xl = -plr.speed
    if (e.code == 'KeyW') plr.velocity.y = -plr.speed
    if (e.code == 'KeyS') plr.velocity.y = plr.speed

})

window.addEventListener('keyup', (e) => {
    if (e.code == 'KeyD') plr.velocity.xr = 0
    if (e.code == 'KeyA') plr.velocity.xl = 0
    if (e.code == 'KeyW') plr.velocity.y = 0
    if (e.code == 'KeyS') plr.velocity.y = 0
})

//Animates character
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    plr.draw()
    requestAnimationFrame(animate)
}

//Calles animate
animate()