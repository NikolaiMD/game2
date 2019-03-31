var space = new Space(0,0,1000,500);
    space.addEntity(new Station(0,0,100,100,5, "right"));
    space.addEntity(new Station(100,100,100,100, 5, "down"));
    console.log(space);

    document.body.innerHTML+=space.render();