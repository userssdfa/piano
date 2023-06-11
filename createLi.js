
function createLi(type){

    const can = document.createElement("canvas");
    const ctx = can.getContext("2d");
    const li = document.createElement("li");
    const img = document.createElement("img");

    const keyWidth = type==="white" ? 46 : 25;
    const keyHeight = type==="white" ?88 : 60;
    const padding = 2;
    const lineWidth = 2;
    const radius = 5;
    const shadowStretch = type==="white" ? 10 : 5;
    
    can.width = 50;
    can.height = 100;
    img.style.width = 50+"px";
    img.style.height = 100+"px";


    ctx.beginPath();
    ctx.lineTo(keyWidth+padding+lineWidth/2,keyHeight+padding-radius);
    ctx.lineTo(keyWidth+padding+lineWidth/2,keyHeight+padding-radius+shadowStretch);
    ctx.arc(keyWidth+padding-radius+lineWidth/2,keyHeight+padding-radius+shadowStretch,radius,0,Math.PI/2);
    ctx.lineTo(padding+radius-lineWidth/2,keyHeight+padding+shadowStretch);
    ctx.arc(padding+radius-lineWidth/2,keyHeight+padding-radius+shadowStretch,radius,Math.PI/2,Math.PI);
    ctx.lineTo(padding-lineWidth/2,keyHeight+padding-radius);
    ctx.closePath();
    ctx.fillStyle = "rgba(100,100,100,0.5)"
    ctx.strokeStyle = "rgba(100,100,100,0.5)"
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(padding,padding);
    ctx.lineTo(keyWidth+padding,padding);
    ctx.lineTo(keyWidth+padding,keyHeight+padding-radius);
    ctx.arc(keyWidth+padding-radius,keyHeight+padding-radius,radius,0,Math.PI/2);
    ctx.lineTo(padding+radius,keyHeight+padding);
    ctx.arc(padding+radius,keyHeight+padding-radius,radius,Math.PI/2,Math.PI);
    ctx.closePath();
    ctx.fillStyle = type;
    ctx.strokeStyle = "gray"
    ctx.stroke();
    ctx.fill();

    img.src = can.toDataURL();
    li.appendChild(img)
    li.style.height = keyHeight+shadowStretch+lineWidth+"px";
    li.style.width = keyWidth+lineWidth*2+"px";
    li.style.overflow = "hidden"
    li.id = "key";
    
    return li;
}