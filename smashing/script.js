const canvas=
document.getElementsById("canvas");

const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const paryiclesArray = []

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
 draw = (x , y)=>{
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI)
    context.strokeStyle = this.VideoColorSpace;

}
}
const update = () => {
    this.x = this.x + this.speedX;
    this.y = this.y +this.speedY;
}
const handleDrawCircle = (event) =>{
    x = event.x;
    y = event.y;
    for (let i=0;  i<20; i++){
    const particle = new Particle(x, y);

    }
}
const animate = () =>{

}

canvas.addEventListener('click',
    handleDrawCircle)