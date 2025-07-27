class Pip{
    constructor(canvas_,foto1_,foto2_){
        this.foto = foto1_
        this.foto2 = foto2_
        this.canvas = canvas_
        this.max = this.canvas.height / 1.4
        this.visp = Math.floor(Math.random() * this.max)
        console.log(this.visp)
        this.dira = 400;
        this.y =  this.canvas.height  - this.visp
        this.x = this.canvas.width
    }
    getX(){
        return this.x; 
    }
    nach(){
        this.x = this.canvas.width
    }
    getX(){
        return this.x
    }
    dvig(){
        this.x = this.x - 5
    }
    draw(ctx,x)
    {

        ctx.drawImage(this.foto2,  this.x ,0, 40,this.canvas.height - this.visp - this.dira)

        
        ctx.drawImage(this.foto, this.x ,this.canvas.height - this.visp, 40,this.visp) // ???
    }
    //generate(){
        //Math.floor()
    //    length = Math.random() * max
    //    return length;
    //}
    
    getColisY(){
        this.A = this.canvas.height - this.visp
        return this.A
    }
    getColisY2(){
        this.B = this.canvas.height - this.visp - this.dira
        return this.B
    }
    getColisX(){
        return this.x
    }
}

export {Pip};