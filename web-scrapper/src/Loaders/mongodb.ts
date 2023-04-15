import mongoose from 'mongoose';

async function startDB() {
    await mongoose.connect('mongodb://localhost:27017/web-scrapper');
};

export default startDB;
