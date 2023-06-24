import mongoose from 'mongoose'


const connectDB = (url) => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(url).then(() => {
            console.log('MongoDB Connected')

        })
    } catch (error) {
        console.error('Failed to connect with Mongo')
        console.error(error);
    }

}

export default connectDB;