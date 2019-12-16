var app = new Vue({
    el: '#app',

    data: {
        title: "What is Language?",
        layers: [
            {
                title:'Language is Connection',
                color: 'rgb(60, 164, 232)',
                body: 'This is another body',
                active: false,
            },
            {
                title:'Language is Shared',
                color: 'skyblue',
                body: 'This is a body.',
                active: false,
            },
            {
                title:'Language is Alive',
                color: '#7ae83c',
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
                title:'Language is Eternal',
                color: 'white',
                body: 'This is a body.',
                active: false,
            }
        ],
        mainBgDefault: '#fff',
        mainBg: '#fff',
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
                this.mainBg = this.activeLayer.color;
            } 
        },
        deactivateLayer(layer) {
            if(this.activeFocus)
            {
                layer.active = false;
                this.activeFocus = false;
                this.mainBg = this.mainBgDefault;
            } 
        },
    },

    computed: {
        layerEls() {
            return this.layers.map( layer => {
                layer.width = 15 + (this.layers.length - this.layers.indexOf(layer)) * 85 / (this.layers.length)

                let circ = document.getElementById('main-view').offsetWidth * Math.PI * (layer.width/100);
                console.log(circ)
                let charDeg = 360 / (circ / this.charWidth);

                layer.offRot = ((layer.title.length-1) * charDeg) / 2;

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