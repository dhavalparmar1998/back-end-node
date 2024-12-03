import crudModel from "../models/userModel.js";
import { checkencryptvalue, dataencrypt } from "../middlewares/encryptdata.js";

const addRecord = async(req,res)=>{
    try {
        const { name, email, mobile, password, permissions } = req.body;
        var instance = new crudModel({name, email, mobile, password, permissions});
        var dbData = await instance.save();
        res.status(200).send({data:null , message: "User Added Successfully"})
        
    } catch (err) {
        console.log(err.message);
        res.status(403).send({data:null , message:"Error Adding User" })

        
    }
}

const showRecord = async(req,res)=>{
    try {
        var dbData = await crudModel.find();
        res.status(200).send({data:dbData})
    } catch (err) {
        console.log(err.message);
        res.status(403).send({data:null , message:"No Document Saved" })
        
    }
}

const showRecordById = async (req,res)=>{
    console.log(req.params.userid);
    try {
        var dbData = await crudModel.findById(req.params.userid);
        res.status(200).send({data:dbData})
        
    } catch (err) {
        console.log(err.message);
        res.status(403).send({data:null , message:"No Document Saved" })


        
    }
}

const deleteRecord = async(req,res)=>{
    console.log("delete called");
    try {
        var dbData = await crudModel.findByIdAndDelete(req.params.userid);
        res.status(200).send({data:null, status:true, message:"User Deleted Successfully"})
        
    } catch (err) {
        console.log(err.message);
        res.status(403).send({data:null , message:"No Document Saved" })
        
    }
}

const updateRecord = async (req,res)=>{
    try {
        var dbData = await crudModel.findByIdAndUpdate(req.params.userid , req.body);
        res.status(200).send({data:null , status:true , message: "User Updated Successfully"})
        
    } catch (err) {
        console.log(err.message);
        res.status(403).send({data:null , message:"Error Updating User" })
        
    }
}

export {
    addRecord,
    showRecord,
    updateRecord,
    deleteRecord,
    showRecordById,
    checkencryptvalue,
    dataencrypt
}
