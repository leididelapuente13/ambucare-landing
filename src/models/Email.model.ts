import mongoose, {Schema, Document} from "mongoose";

export interface IEmail extends Document {
    email: string;
}

const EmailSchema: Schema = new Schema<IEmail>({
    email: { type: String, required: true, unique: true }
});

export default mongoose.models.Email || mongoose.model<IEmail>("Email", EmailSchema);