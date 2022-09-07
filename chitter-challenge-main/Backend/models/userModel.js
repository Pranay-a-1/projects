import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a valid First name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please add a valid Last name'],
    },
    username: {
        type: String,
        required: [true, 'Please add a valid Username'],
        unique: [true, 'Username already taken'],
    },
    email: {
        type: String,
        required: [true, 'Please add a valid Email address'],
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Please add a valid Password'],
    },
},
    {
        timestamps: true
    },
    {
        collection: 'users',
    }
);

const User = new mongoose.model("User", userSchema);

export default User;