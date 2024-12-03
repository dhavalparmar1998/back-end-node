import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const crudSchema = new Schema({
  name:String,
  email:String,
  mobile:Number,
  password:String,
  permissions: {
    production: {create: Boolean,read: Boolean, update:Boolean, delete:Boolean},
    Sales: {create: Boolean,read: Boolean, update:Boolean, delete:Boolean},
    inventory: {create: Boolean,read: Boolean, update:Boolean, delete:Boolean},
  }
 
});

const crudModel = mongoose.model('cruds', crudSchema);
export default crudModel;