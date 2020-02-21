//design an elevtor system for a building
// first 5floors 1 elevator
//second 2 elevators
// third 50 floors and 
$(document).ready(function(){
    let elevator = $("#elevator");
    const floors = 5;
    
    function heightFor(floorNumber){
        return (floors*118) - floorNumber*118 + "px"
    }
    
    let speed = 500;
    $(document).keydown(function(event){
        let keyAsInt = parseInt(event.key)
        
        if (keyAsInt > 0 && keyAsInt <= floors){
            elevator.css('top', heightFor(keyAsInt));
        }
    })
    
    
    $(".click-me").click(function(e){
        let floorHeight = (($(this).data().floor)-1)*118;
        elevator.css({top: floorHeight + "px"});
    });
        $(".click-el").click(function(e){
        let floorHeight = (($(this).data().floor)-1)*118;
        elevator.css({top: floorHeight + "px"});
    });
});
