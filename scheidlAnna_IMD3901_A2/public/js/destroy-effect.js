AFRAME.registerComponent('destroy-effect', {
    schema: {
        duration: {type: 'int', default: 1000}
    },
    init: function() {
        console.log("Destroy");
        const CONTEXT_AF= this;
        CONTEXT_AF.isSlamming = false;
        CONTEXT_AF.slammer = document.querySelector(".slammer");
       
        // CONTEXT_AF.slammer.setAttribute('up', {property:'position', from: (0, 3, -10),to: (0, 10, -10), enabled:false});
        CONTEXT_AF.el.addEventListener('click', function() {
            CONTEXT_AF.slammer.setAttribute('animation', {property:'position', to:{x:0, y:3, z:-10}, dur: 1000, enabled:false});     

            console.log('Destroy duck');
            var isCreated = localStorage.getItem("isCreated");

            if(CONTEXT_AF.isSlamming === true) {
                console.log('stop it');
                CONTEXT_AF.slammer.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSlamming = false;
            } else {
                console.log('start slammin');
                CONTEXT_AF.slammer.setAttribute('animation', {enabled:true});
                CONTEXT_AF.isSlamming = true;
            }

            var chkPos = CONTEXT_AF.slammer.getAttribute('position.y')
            var duckBye = document.querySelector('duck');
            const ascene = document.querySelector('a-scene');
            const entity = document.querySelector('.duck');
            
            duckBye.setAttribute("visible", false);
        })
    }

})