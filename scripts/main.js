Events.on(ContentInitEvent, () => {
    Timer.schedule(() => {
        Vars.content.blocks().each(b => {
            if(b instanceof LogicBlock) b.buildVisibility = BuildVisibility.hidden;
            
            if(b instanceof LogicDisplay) b.buildVisibilty = BuildVisibility.hidden;
        });
        
        Groups.build.each(b => {
            if(b instanceof LogicBlock) b.kill();
            
            if(b instanceof LogicDisplay) b.kill();
        });
    }, 3, 5, -1);
});