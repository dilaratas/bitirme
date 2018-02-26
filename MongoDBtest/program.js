const mongoose = require(‘mongoose’)

const Schema = new mongoose.Schema({
    username: { type: String, unique: true, required: true }, // username kısmı tekil ve zorunlu
    name: { type: String, unique: false, required: true }, // name kısmı tekil olmayan fakat zorunlu
    age: Number, // age kısmı ise sadece number tipinde olmalı, zorunlu veya tekil değil.
  });
  /*
    Yukarıdaki örnekte basit bir schema (şema) çıkarttık.
  */
  const Users = mongoose.model('Users', Schema); // Artık dökümanımızın metodlarına Users.find()
  mongoose.connect('MONGODB_URI', err => console.log(err ? err : 'Mongo connected.'));
  const obj = {
    username: 'cagataycali',
    name: 'Çağatay Çalı',
    age: 21
  }
  
  const user = new Users(obj) // Yeni bir kullanıcı satırı oluşturalım.
  
  user.save((err, doc) => { // Yeni oluşturduğumuz satırı işleyelim.
    if (err) {
      console.error(err)
    } else {
      console.log(doc)
    }
  })