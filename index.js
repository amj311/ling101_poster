var app = new Vue({
    el: '#app',

    data: {
        title: "What is Language?",
        layers: [
            {
                title:'Language is Connection',
                color: 'skyblue',
                body: 'This is another body',
                active: false,
            },
            {
                title:'Language is Shared',
                color: '#4fe054',
                body: 'This is a body.',
                active: false,
            },
            {
                title:'Language is Learned',
                color: 'gold',
                body: 'This is a body.',
                active: false,
            },
            {
                title:'Language stems from Intelligence',
                color: 'white',
                body: 'This is a body.',
                active: false,
            }
        ],
        charWidth: 16,
        activeLayer: {},
        activeFocus: false,
    },

    methods: {
        activateLayer(layer) {
            if(!this.activeFocus)
            {
                this.activeLayer = layer;
                this.activeLayer.active = true;
                this.activeFocus = true;
            } 
        },
        deactivateLayer(layer) {
            if(this.activeFocus)
            {
                layer.active = false;
                this.activeFocus = false;
            } 
        },
    },

    computed: {
        layerEls() {
            return this.layers.map( layer => {
                layer.width = 7 + (this.layers.length - this.layers.indexOf(layer)) * 93 / (this.layers.length)

                let circ = document.getElementById('main-view').offsetWidth * Math.PI * (layer.width/100);
                console.log(circ)
                let charDeg = 360 / (circ / this.charWidth);

                layer.offRot = (layer.title.length * charDeg) / 2;

                layer.titleChars = Array.from(layer.title).map( (c, i) => {
                    let rot = -layer.offRot + (charDeg * i);
                    // let rot = -90;
                    return {c, rot}
                })

                return layer;
            })
        }
    }
})