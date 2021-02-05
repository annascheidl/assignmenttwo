AFRAME.registerComponent('spawn-effect', {
    schema: {
    },
    init: function() {
        console.log("Occurred");
        const CONTEXT_AF= this;

        CONTEXT_AF.ducky = document.querySelector('ducky');
        

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log('Spawn duck');
            var ascene = document.querySelector('a-scene');
            var ducky = document.createElement('ducky');
            var sphere = document.createElement('a-sphere');
            ascene.appendChild(ducky);
            ascene.appendChild(sphere);
            CONTEXT_AF.sphere.setAttribute('a-sphere', {property:'position', to: '0 0.5 -10'})
            
            CONTEXT_AF.ducky.setAttribute('ducky', {property:'position', to: '0 0.5 -10'})
            CONTEXT_AF.ducky.setAttribute('ducky', {property:'scale', to: '1 1 1'})
        })
    }

})