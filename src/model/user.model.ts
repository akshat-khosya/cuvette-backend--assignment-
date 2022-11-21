import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
    username: string;
    password: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
};

const userSchema = new mongoose.Schema<IUser>({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
    }
},{
    timestamps: true,
})

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    const user = this as IUser;
    return bcrypt.compare(candidatePassword, user.password).catch(e => false);
}

export const User = mongoose.model<IUser>("User", userSchema);



