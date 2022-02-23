import { Schema, model } from 'mongoose';

const LinkedAppSchema = new Schema(
  {
    userID: { type: String, required: true },
    type: { type: Number, required: true },
    id: { type: Number },
    cachedData: {
      username: { type: String },
      email: { type: String },
      avatar: { type: String },
    },
  },
  { versionKey: false, timestamps: true },
);

export default model('linkedApps', LinkedAppSchema);
