import{Bird} from "./pt.js";
import {Pip} from "./pp.js";

let sc = 0;
let canvasW;
let canvasH;
let score = 0;
let record = 0;
let loaded_images = 0;
let  a = 0
//let pip
let pips = []
let vis_pt = 300
let bird
let ctx 
let padeniee
let cr_pips

const canvas = document.getElementById("screen");

function drawOsn(){
    addEventListener("mousedown", mouseClick)
    setInterval(drawFrame, 20)

}
function drawFrame(){
    const ctx = canvas.getContext("2d")
    makeFullscreen(ctx)
    drawBackground(ctx)
    if(bird.getStatus() != "alive"){
        console.log(bird.getStatus())
        if(Math.round(score)  > record){
            record = Math.round(score) 
        }
        pips = []
        drawMenu(ctx)
        clearInterval(padeniee)
        clearInterval(schet)
        clearInterval(cr_pips)
        pips.forEach(pip => {
            pip.nach()
        })
    }
    if(bird.getStatus() == "alive"){
        bird.draw(ctx)
        check_dead()
        console.log("DDDDDDDD",score)
        //score = Math.floor(score)
        pips.forEach(pip => {
            pip.dvig()
            pip.draw(ctx)
        })
        //score = Math.floor(score)
        ///(pip.draw(x)).forEach(pips)
        //if (pip.getColisX()  < 0){
        //    pips.pop(pip)
        //}
    }
}
function schet(){   
 ////   schet = setInterval(scsc,5000)
}
function startGame(){
    bird.born()
   // setTimeout(schet, 11000);
    padeniee = setInterval(padenie,40)
    cr_pips = setInterval(createPips,5000)
    // if (pip.getColisX()  < 0){
    //     for(let i = 0;i< 100;i++){
    //         pips.pop(pip)
    //     }
    // }
}
function scsc(){
    score = score + 1
}
function check_score(){

}

function check_dead(){
    pips.forEach(pip => {

        for(let i = 0;i < 100;i = i + 0.1){
            if((bird.get_y() > pip.getColisY() || bird.get_y() < pip.getColisY2())  && (pip.getX()- 40)+ i  == (canvas.width / 2 - 300))
            {
                bird.aborn()
            }
            if((bird.get_y() < pip.getColisY() || bird.get_y() > pip.getColisY2())  && (pip.getX()- 40)+ i  == (canvas.width / 2 - 300)){
                console.log(score)
                score = score + 0.2
            }
        }
    })
}
function createPips() {
    console.log("Сделана")
    let pip = new Pip(canvas,images.pip,images.pip69)
    pips.push(pip)
    sc = 0
}
function makeFullscreen(ctx) {
    canvas.height = document.body.clientHeight
    canvas.width = document.body.clientWidth
    canvasW =  document.body.clientWidth
    canvasH = canvas.height
    let ptic_x = canvas.width - 500
}
function padenie(){
    bird.padenie_pt()
}
function drawBackground(ctx){
    ctx.drawImage(images.fon,0,0,canvas.width,canvas.height)
}
function drawMenu(ctx){
    let text
    let text1
    console.log(record)
    console.log(score)
    text = "Рекорд:" + record
    ctx.fillStyle = "red"
    ctx.font = "148px serif";
    ctx.fillText(text, canvasW - 350, canvasH - 100,300,100);

    text1 = "Нажмите чтобы начать заново"
    ctx.fillStyle = "red"
    ctx.font = "148px serif";
    ctx.fillText(text1, canvasW  / 2 - 500 , canvasH / 2,1000,500);
}
function mouseClick(e) {
    if(bird.getStatus() == "alive"){
        bird.prig();   
    }
    else
        startGame();
}
const images = {
     //"fon":"https://bogatyr.club/uploads/posts/2023-03/1678337906_bogatyr-club-p-moskou-siti-bashni-foni-vkontakte-4.png",
     "fon":"./cicis.jpg",
     "ptica":"./svin.png",
     //"ptica2":"https://ic.pics.livejournal.com/muzika_dogdia/16781452/2106765/2106765_original.jpg"
     "pip":"./pipe.png",
     "pip69":"./pipe69.png"
}
function loadAllImages() {

    Object.keys(images).forEach((image_title) => {
        let img = new Image()

        img.addEventListener("load", () => {
            loaded_images += 1

            if (loaded_images === Object.keys(images).length) {
                console.log("sssf")
                drawOsn()   
            }
        });
        img.src = images[image_title]
        images[image_title] = img
    })
    bird = new Bird(canvas,images.ptica)
}
loadAllImages()