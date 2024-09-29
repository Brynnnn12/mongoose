// Mengimpor module mongoose untuck interact dengan MongoDB
const mongoose = require('mongoose');

// Menghubungkan ke MongoDB pada database movie_db
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then(() => {
        // Pesan jika koneksi berhasil
        console.log('Koneksi terhubung ke MongoDB');
    })
    .catch((err) => {
        // Pesan jika koneksi gagal
        console.log('Koneksi gagal', err);
    });

const productSchema =mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})
const Product = mongoose.model('Product', productSchema)

const tshirt = new Product({ name: 'T-shirt Polos', price: 200000})

tshirt.save().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log("err")
});