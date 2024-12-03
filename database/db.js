import mongoose from 'mongoose';

async function connection(){
    await mongoose.connect('mongodb+srv://admin:admin@cluster1.3xukv.mongodb.net/user_management');
}

export default connection;