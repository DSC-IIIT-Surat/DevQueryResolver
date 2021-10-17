const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            requried: true,
            unique: true,
        },
        password: {
            type: String,
            requried: true,
        }
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('user', UserSchema);
module.exports = User;