
class Key {
    static W = 52;
    static H = 113;
    static createKeyLi(can,keyType,left,top,id){
        if(!can)throw new Error("canvasを指定してください")
        this.can = can;
        this.ctx = this.can.getContext("2d");

        this.keyScale = keyType==="white"?2:2.5;
        this.keyWidth = keyType==="white"?50:25;
        this.keyHeight = this.keyWidth * this.keyScale;
        this.padding = 2;
        this.radius = keyType==="white"?10:5;
        this.shadowStretch = keyType==="white"?10:5;
        this.lineWidth = 2
        this.left = left
        this.top = top



        this.imgElement;
        this.liElement;
        //initialize
        this.can.width = this.keyWidth + this.lineWidth*2;
        this.can.height = this.keyHeight + this.lineWidth*6;
        this.ctx.lineWidth = this.lineWidth;

        this.imgElement =  document.createElement("img");
        this.liElement = document.createElement("li");

        this.liElement.style.width = this.can.width+"px"
        this.liElement.style.height = this.can.height+"px"
        this.liElement.style.position = "absolute"
        this.liElement.style.top = this.top+"px"
        this.liElement.style.left = this.left+"px";
        this.liElement.id = id

        //drawing
        //ctx.fillStyle = "skyblue"
        //ctx.fillRect(0,0,can.width,can.height)
        this.ctx.beginPath();
        this.ctx.lineTo(this.keyWidth+this.padding+this.lineWidth/2,this.keyHeight+this.padding-this.radius);
        this.ctx.lineTo(this.keyWidth+this.padding+this.lineWidth/2,this.keyHeight+this.padding-this.radius+this.shadowStretch);
        this.ctx.arc(this.keyWidth+this.padding-this.radius+this.lineWidth/2,this.keyHeight+this.padding-this.radius+this.shadowStretch,this.radius,0,Math.PI/2);
        this.ctx.lineTo(this.padding+this.radius-this.lineWidth/2,this.keyHeight+this.padding+this.shadowStretch);
        this.ctx.arc(this.padding+this.radius-this.lineWidth/2,this.keyHeight+this.padding-this.radius+this.shadowStretch,this.radius,Math.PI/2,Math.PI);
        this.ctx.lineTo(this.padding-this.lineWidth/2,this.keyHeight+this.padding-this.radius);
        this.ctx.closePath();
        this.ctx.fillStyle = "rgba(100,100,100,0.5)"
        this.ctx.strokeStyle = "rgba(100,100,100,0.5)"
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.padding,this.padding);
        this.ctx.lineTo(this.keyWidth+this.padding,this.padding);
        this.ctx.lineTo(this.keyWidth+this.padding,this.keyHeight+this.padding-this.radius);
        this.ctx.arc(this.keyWidth+this.padding-this.radius,this.keyHeight+this.padding-this.radius,this.radius,0,Math.PI/2);
        this.ctx.lineTo(this.padding+this.radius,this.keyHeight+this.padding);
        this.ctx.arc(this.padding+this.radius,this.keyHeight+this.padding-this.radius,this.radius,Math.PI/2,Math.PI);
        this.ctx.closePath();
        this.ctx.fillStyle = keyType;
        this.ctx.strokeStyle = "gray"
        this.ctx.stroke();
        this.ctx.fill();
    // ペースト
        this.imgElement.src = this.can.toDataURL();
        this.liElement.appendChild(this.imgElement)
        return this.liElement;
    }
}