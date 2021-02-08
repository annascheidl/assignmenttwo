AFRAME.registerComponent('return-slammer', {
    schema: {
        duration: {type: 'int', default: 20000}
    },
    
    

    init: function() {
        console.log("Slamminbammin");
        const CONTEXT_AF= this;
        CONTEXT_AF.readyGo = false;
        CONTEXT_AF.raise = document.querySelector(".slammer");

        
       
        CONTEXT_AF.el.addEventListener('click', function() {
            CONTEXT_AF.raise.setAttribute('animation', {property:'position', to:{x:0, y:10, z:-10}, dur: 20000, enabled:false});
            
            if(CONTEXT_AF.readyGo === true) {
                console.log('stop raising');
                CONTEXT_AF.raise.setAttribute('animation', {enabled:false});
                
                CONTEXT_AF.readyGo = false;
            } else {
                console.log('raise slammer');
                
                CONTEXT_AF.raise.setAttribute('animation', {enabled:true});
                CONTEXT_AF.readyGo = true;
            }


        })
    }

})
