canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover;
    rover_imageTag.src=rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",keydown);

function keydown(e){
    keyPressed=e.keyCode;


    if(keyPressed==='38'){
        up();
    }

    if(keyPressed==='40'){
        down();
    }

    if(keyPressed==='37'){
        left();
    }

    if(keyPressed==='39'){
        right();
    }


}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();

    }


}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
}