var app = new Vue({
    el: '#app',

    data: {
        title: "What is Language?",
        layers: [
            {
                title:'Language is Connection',
                color: 'rgb(60, 164, 232)',
                body: 'Everyone desires a connection with someone else, and language is the way we create connections. Physical connection, verbal connection, or even simply emotional connection all require language of some sort.',
                active: false,
            },
            {
                title:'Language is Shared',
                color: 'skyblue',
                body: 'If there was only one single intelligence in the entire universe, would it develop a langauge? There would be no need for communication of any sort. Language exists because intellegences want to engage with each other.',
                active: false,
            },
            {
                title:'Language is Alive',
                color: '#7ae83c',
                body: 'Language is fluid and evolving. Every time a word of a language is spoken, it shifts ever so slightly.',
                active: false,
            },
            {
                title:'Language is Learned',
                color: 'gold',
                body: 'Everyone has to acquire language. While the desrire to communicate is inherent in intelligence, the use of language requires that we learn it\'s rules and methods in each new medium.',
                active: false,
            },
            {
                title:'Language is Eternal',
                color: 'white',
                body: 'Wherever and whenever there exists intelligence, language will develop as a medium for communication.',
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