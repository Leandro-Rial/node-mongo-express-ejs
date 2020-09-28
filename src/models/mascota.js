const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    name: String,
    description: String
})

// CREATE MODEL
const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;