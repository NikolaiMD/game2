class Entity {
    constructor ( x, y, w, h, speed, direction, integrity=100 ){
        this.x         = x;
        this.y         = y;
        this.w         = w;
        this.h         = h;
        this.speed     = speed;
        this.direction     = direction;
        this.integrity = integrity;
        this.id        = 'e-'+Math.floor(Math.random()*1000000);
    }
    render(content=``, classname = ``){
        let html = `<div id="${this.id}">
                        <div class = "entity ${classname}" style="left: ${this.x}px; top: ${this.y}px; width: ${this.w}px; height: ${this.h}px; font-size: ${this.h}px;">
                        ${content}
                        </div>
                    </div>`;
                    setInterval(()=>{
                        this.move();
                        this.paint();
                    }, 50);
                    return html;
    }
    paint(){
        document.getElementById(`${this.id}`).firstElementChild.style.left = `${this.x}px`;
        document.getElementById(`${this.id}`).firstElementChild.style.top = `${this.y}px`;
        console.log("refresh");
    }
    move(){
        if(this.direction=="right"){
            this.x+=this.speed;
        }
        if(this.direction=="left"){
            this.x-=this.speed;
        }
        if(this.direction=="down"){
            this.y+=this.speed;
        }
        if(this.direction=="up"){
            this.y-=this.speed;
        }
        console.log("move");
    }
}