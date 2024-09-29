// // Mengimpor module mongoose untuck interact dengan MongoDB
// const mongoose = require('mongoose');

// // Menghubungkan ke MongoDB pada database movie_db
// mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
//     .then(() => {
//         // Pesan jika koneksi berhasil
//         console.log('Koneksi terhubung ke MongoDB');
//     })
//     .catch((err) => {
//         // Pesan jika koneksi gagal
//         console.log('Koneksi gagal', err);
//     });

// // Membuat skema untuk koleksi 'movies'
// const movieSchema = new mongoose.Schema({
//     title: String,   // Judul film
//     genre: String,   // Genre film
//     year: Number,    // Tahun rilis film
//     rating: Number,  // Rating film
//     director: String // Sutradara film
// });

// // Membuat model berdasarkan skema di atas
// const Movie = mongoose.model('Movie', movieSchema);

// // Movie.updateOne({title: "Naruto"}, {rating:9.0})
// // .then((result) => {
// //     //      Menampilkan hasil pencarian
// //      console.log(result)
// // }).catch((err) => {


// //      // Menampilkan pesan jika pencarian gagal
// //     console.log('Gagal menampilkan data', err)
// //  });

// // Mencari film yang dirilis pada tahun 2023 atau lebih baru
// // Movie.find({year: {$gte: 2023}}).then((result) => {
// //     // Menampilkan hasil pencarian
// //     console.log(result)
// // }).catch((err) => {
// //     // Menampilkan pesan jika pencarian gagal
// //     console.log('Gagal menampilkan data', err)
// // });

// // Menambahkan beberapa data film ke dalam koleksi 'movies'
// // Movie.insertMany([
// //     {
// //         title: "Naruto",
// //         genre: "Action",
// //         year: 2022,
// //         rating: 9.0,
// //         director: "Paramount"
// //     },
// //     {
// //         title: "Batman",
// //         genre: 'Action',
// //         year: 2023,
// //         rating: 7.0,
// //         director: "Paramount"
// //     },
// //     {
// //         title: 'Flash',
// //         genre: 'Action',
// //         year: 2024,
// //         rating: 6.0,
// //         director: "Paramount"
// //     },
// //     {
// //         title: 'Venom',
// //         genre: 'Action',
// //         year: 2019,
// //         rating: 9.0,
// //         director: "Marvel"
// //     },
// //     {
// //         title: 'Captain America',
// //         genre: 'Action',
// //         year: 2018,
// //         rating: 9.0,
// //         director: "Marvel"
// //     },
// //     {
// //         title: 'Hulk',
// //         genre: 'Action',
// //         year: 2012,
// //         rating: 9.0,
// //         director: "Marvel"
// //     }
// // ]).then((result) => {
// //     // Menampilkan pesan dan hasil jika data berhasil ditambahkan
// //     console.log('Data berhasil ditambahkan');
// //     console.log(result);
// // }).catch((err) => {
// //     // Menampilkan pesan jika penambahan data gagal
// //     console.log('Gagal menambahkan data', err);
// // });

// // Movie.deleteOne({title: "Naruto"}).then((result) => {
// //     console.log(result)
// // }).catch((err) => {
// //     console.log("Gagal Menghapus")
// // });
