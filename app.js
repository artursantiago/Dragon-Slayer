new Vue({
    el: '#app',
    data: {
        running: false,
        knightLife: 100,
        dragonLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.knightLife == 0 || this.dragonLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.knightLife = 100
            this.dragonLife = 100
            this.logs = []
        },

        attack(special){
            this.hurt("knightLife", 7, 12, false, "Dragon", "Knight", "dragon-log")
            if(this.dragonLife > 0){
                this.hurt("dragonLife", 5, 10, special, "Knight", "Dragon", "knight-log")
            }
        },

        hurt(prop, min, max, special, source, target, cls){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`The ${source} hit the ${target} with ${hurt}%.`, cls )
        },

        healAndHurt(){
            this.hurt("knightLife", 7, 12, false, "Dragon", "Knight", "dragon-log")
            this.heal(10, 15)
        },

        heal(min, max){
            const heal = this.getRandom(7, 12)
            this.knightLife = Math.min(this.knightLife + heal, 100)
            this.registerLog(`The Knight healead ${heal}% of his life.`, "knight-log")
        },

        getRandom(min , max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        registerLog(text, cls){
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})