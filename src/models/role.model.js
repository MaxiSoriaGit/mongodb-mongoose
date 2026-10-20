import { model, Schema, Types } from 'mongoose';

const roleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const RoleModel = model('Role', roleSchema);

export { RoleModel };
export default RoleModel;
