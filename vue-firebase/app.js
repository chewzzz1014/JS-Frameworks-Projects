// create vue app
const app = Vue.createApp({
    data () {
        return {
            showBooks: true,
            title: 'Burning',
            author: 'Park Kim',
            age: 60,
        }
    },
    methods: {
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        },
    },
})

// tells browser when and where in dom to mount this app
app.mount('#app')



