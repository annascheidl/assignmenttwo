AFRAME.registerComponent('spawn-effect', {
    schema: {
    },
    init: function() {
        console.log("Occurred");
        const CONTEXT_AF= this;
        CONTEXT_AF.isCreated = false;
       // Made for future multiple ducks --> CONTEXT_AF.toCreate = false;
        CONTEXT_AF.ducky = document.querySelector('.ducky');
        CONTEXT_AF.slammer = document.querySelector('.slammer');


        CONTEXT_AF.el.addEventListener('click', function() {

                
            console.log('Spawn duck');
          
            const ascene = document.querySelector('a-scene');
       //     var ducky = document.createElement('ducky');
            
            const duck = document.createElement("a-entity")

            duck.setAttribute('gltf-model', '\assets/scene.gltf')
            duck.setAttribute('position', {x:0, y:0.5, z:-10})
            duck.setAttribute('scale', {property:'scale', to: '5 1 1'})
            duck.setAttribute('visible', true);
            
            ascene.appendChild(duck);
            //ascene.appendChild(sphere);
            //CONTEXT_AF.sphere.setAttribute('a-sphere', {property:'position', to: '0 0.5 -10'})
            var isCreated = true;
            localStorage.setItem("isCreated", isCreated);        
            
        

        })
    },


})