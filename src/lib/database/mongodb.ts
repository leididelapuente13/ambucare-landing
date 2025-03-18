import * as mongoose from 'mongoose';

export const connectdb = async (): Promise<void> => {
    try {
        const mongo_uri = process.env.MONGO_URI;
        const database = process.env.DB_NAME;

        if(!mongo_uri || !database) {
            throw new Error('Mongo URI or Database name not provided');
        }

        await mongoose.connect(mongo_uri, { dbName: database });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
}