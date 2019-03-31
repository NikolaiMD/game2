class Station extends Entity{
    constructor( x, y, w, h, speed, direction, integrity=100, proximity=10, repair=10 ){
        super(x, y, w,h,speed, direction, integrity);
        this.proximity = proximity;
        this.repair = repair;
    }
    render(){
        let html = super.render(`<i class="fas fa-tools"></i>`,'station');
        return html;
    }
}