class Space extends Entity{
    constructor( x, y, w, h, speed){
       super(x, y, w, h, speed);
       this.entities = []; //shuttles and other stuff
       this.id       = 'space';
    }
    addEntity(entity){
        this.entities.push(entity);
    }
    render(){
        //RENDER FOR ALL ELEMENTS IN SPACE
        let content=``;
        for(let i = 0; i<this.entities.length; i++){
            content+=this.entities[i].render();
        }
        let html = super.render(content);
        return html;
    }
}