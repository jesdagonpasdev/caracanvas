var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(50, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(85, 75);
    ctx.arc(50, 75, 35, 0, Math.PI, false);
    ctx.moveTo(40, 65);
    ctx.arc(35, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(70, 65);
    ctx.arc(65, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();
}
var x = 0;
var y = 0;
var bool = true;
canvas.width = 800;
var enter = true;

function movimiento() {
    if(enter){    
        if ((x < canvas.width - 100) && (bool)) {
            x += 5;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(50 + x, 75, 50, 0, Math.PI * 2, true);
            ctx.moveTo(85 + x, 75);
            ctx.arc(50 + x, 75, 35, 0, Math.PI, false);
            ctx.moveTo(40 + x, 65);
            ctx.arc(35 + x, 65, 5, 0, Math.PI * 2, true);
            ctx.moveTo(70 + x, 65);
            ctx.arc(65 + x, 65, 5, 0, Math.PI * 2, true);
            ctx.stroke();
            y = 85 + x;
            requestAnimationFrame(movimiento);
        } else {
            bool = false;
            x -= 5;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(50 + x, 75, 50, 0, Math.PI * 2, true);
            ctx.moveTo(85 + x, 75);
            ctx.arc(50 + x, 75, 35, 0, Math.PI, false);
            ctx.moveTo(40 + x, 65);
            ctx.arc(35 + x, 65, 5, 0, Math.PI * 2, true);
            ctx.moveTo(70 + x, 65);
            ctx.arc(65 + x, 65, 5, 0, Math.PI * 2, true);
            ctx.stroke();
            y = 85 + x;
            requestAnimationFrame(movimiento);
            if (x == 0)
                bool = true;
        }
    }
}
requestAnimationFrame(movimiento);

window.addEventListener("keydown", function(){
    if(event.key=='Enter'){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(50 + x, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(85 + x, 75);
        ctx.arc(50 + x, 75, 35, 0, Math.PI, false);
        ctx.moveTo(40 + x, 65);
        ctx.arc(35 + x, 65, 5, 0, Math.PI * 2, true);
        ctx.moveTo(70 + x, 65);
        ctx.arc(65 + x, 65, 5, 0, Math.PI * 2, true);
        ctx.stroke();
        if(enter)
            enter=false;
        else
            enter=true;
            movimiento();
        return;
    }
    if((event.key=="ArrowRight") && (enter==false)){
        x+=5;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(50 + x, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(85 + x, 75);
        ctx.arc(50 + x, 75, 35, 0, Math.PI, false);
        ctx.moveTo(40 + x, 65);
        ctx.arc(35 + x, 65, 5, 0, Math.PI * 2, true);
        ctx.moveTo(70 + x, 65);
        ctx.arc(65 + x, 65, 5, 0, Math.PI * 2, true);
        ctx.stroke();
        
    }
    if((event.key=="ArrowLeft") && (enter==false)){
        x-=5;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(50 + x, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(85 + x, 75);
        ctx.arc(50 + x, 75, 35, 0, Math.PI, false);
        ctx.moveTo(40 + x, 65);
        ctx.arc(35 + x, 65, 5, 0, Math.PI * 2, true);
        ctx.moveTo(70 + x, 65);
        ctx.arc(65 + x, 65, 5, 0, Math.PI * 2, true);
        ctx.stroke();
        
    }
},true);