Events.on(ContentInitEvent, () => {
    Timer.schedule(() => {
        Vars.content.blocks().each(b => {
            if(b instanceof LogicBlock) b.buildVisibility = BuildVisibility.hidden;
            continue;
            
            if(b instanceof LogicDisplay) b.buildVisibilty = BuildVisibility.hidden;
            return;
        });
        
        Groups.build.each(b => {
            if(b instanceof LogicBlock) b.kill();
            continue;
            
            if(b instanceof LogicDisplay) b.kill();
            return;
        });
    }, 3, 5, -1);
});