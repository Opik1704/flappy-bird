class Bird{
    constructor(canvas_,img){
        this.foto = img
        this.canvas = canvas_
        this.y = 0
        this.status1 = "oo"
    }
    born(){
        this.y = 0
        this.status1 = "alive"
    }
    aborn(){
        this.status1 = "ded"
    }
    prig(){
        if (this.status1 == "alive") {
            console.log("PRIIIIG")
            for(let i = 0;i < 20;i++){
                if(this.y > 0){
                    this.y = this.y - i
            }
        }
    }
}
    padenie_pt(){
        this.y = this.y + 10 
        if(this.y > this.canvas.height ){  
            console.log("zzzz") 
            this.status1 = "ded"

        }
    }
    draw(ctx) {
        ctx.drawImage(this.foto,this.canvas.width / 2 - 300 ,this.y,60,60)
    }
    getStatus(){
        return this.status1
    }
    get_y(){
        return this.y
    }
}

export {Bird};