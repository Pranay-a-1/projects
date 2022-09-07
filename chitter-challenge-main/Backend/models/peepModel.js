import mongoose from 'mongoose';

const peepSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    peepText: {
        type: String,
        required: [true, 'Please add a peep'],
    },
    taggedUsername: {
        type: String,
        trim: true,
        required: false,
        default: undefined
    },
},
    {
        timestamps: true
    },
    {
        collection: 'peeps',
    }
);


const Peep = new mongoose.model("Peep", peepSchema);

export default Peep;