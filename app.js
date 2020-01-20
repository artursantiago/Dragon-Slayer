new Vue({
    el: '#app',
    data: {
        running: false,
        knightLife: 100,
        dragonLife: 0,
    },
    computed: {
        hasResult() {
            return this.knightLife == 0 || this.dragonLife == 0
        }
    },
    methods: {

    },
    watch: {

    }
})