import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'

const usuarioSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true    
        },
        email: {
            type: String,
            unique: true
        },
        password:{
            type: String,
            required: true
        }

    },
    {
    timestamps: true,
    versionKey: false
    }

);
usuarioSchema.statics.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
export default model ("Usuario", usuarioSchema);