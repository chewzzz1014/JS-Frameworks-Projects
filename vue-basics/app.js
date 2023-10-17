// create vue app
const app = Vue.createApp({
    data () {
        return {
            url: 'https://chewzzz1014.github.io/portfolio-website/',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'https://m.media-amazon.com/images/I/51robSuEIcL._SY445_SX342_.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'https://bci.kinokuniya.com/jsp/images/book-img/97805/97805750/9780575089914.JPG', isFav: true},
            ],
            title: 'Burning',
            author: 'Park Kim',
            age: 60,
            x: 0,
            y: 0,
        }
    },
    methods: {
        toogleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) console.log(data)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(item) {
            item.isFav = !item.isFav
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter(b => b.isFav)
        }
    },
})

// tells browser when and where in dom to mount this app
app.mount('#app')



