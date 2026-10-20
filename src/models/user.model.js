import { model, Schema, Types } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    roles: [
      {
        type: Types.ObjectId,
        ref: 'Role',
        required: true,
      },
    ],
  },
  {
    versionKey: false,
  },
);

const UserModel = model('User', userSchema);

export { UserModel };
export default UserModel;
