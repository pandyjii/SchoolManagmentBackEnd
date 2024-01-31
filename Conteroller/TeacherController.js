const express=require('express');
const model = require('../model/TeacherModel');
const AddProductModel = require('../model/TeacherLogin')
const product = model.TeacherModel;
const Ecommerce = AddProductModel.TeachLogin;
const server=express();
const JWt = require('jsonwebtoken');

JWtKey = "Shhhh";





exports.sinup =  (req, res) => {

    try {
        const Product = new Ecommerce(req.body);
        Product.save()

        JWt.sign({ Product }, JWtKey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                res.send({ Product: "the token was not found" });
            }
            else {

                res.send({ Product, auth: token });

            }


        })


        console.log(Product);


    }
    catch (err) {
        res.send(err.message);
    }
}



exports.Login = async (req, res) => {
    if (req.body.email && req.body.password) {
        const User = await Ecommerce.findOne(req.body).select('-password');
        if (User) {


            JWt.sign({ User }, JWtKey, { expiresIn: "2h" }, (err, token) => {

                if (err) {
                    res.send({ User: "somthing went wrong" });
                }
                else {
                    res.send({ User, auth: token });

                }

            })






        }
        else {
            res.send('user not found')
        }
    }
    else {
        console.log('you are not right a correct emial& password')
        res.send("you are not right a correct emial& password")
    }






}



exports.Addproduct =  async (req, res) => {

    const Product = await new product(req.body);
    Product.save();
    res.send(Product);
    console.log(Product);


}


exports.delete = async (req, res) => {
    const id = req.params.id;
    const DeleteUser = await product.findOneAndDelete({ _id: id });
    console.log(DeleteUser);
    res.send(DeleteUser)
}

exports.getProduct =  async (req, res) => {

    const Product = await product.find({});
    res.send(Product);
    console.log("get data sucessfully");

}


exports.getUpdateProduct =  async (req, res) => {
    let id = req.params.id;
    const result = await product.findOne({ _id: id });

    if (result) {
        res.send(result)
    }
    else {
        res.send("value is not correct");
    }

}

exports.UpdateProduct = async (req, res) => {
    let id = req.params.id;
    const result = await product.updateOne({ _id: id },
        { $set: req.body }

    )

    res.send(result);
}




exports.SearchProduct = async (req, res) => {

    let key = req.params.key;

    const Product = await product.find({
        "$or": [
            { ProductName: { $regex: req.params.key } },
            { CompanyName: { $regex: req.params.key } }
        ]
    })

    if (Product) {
        res.send(Product);
    }
    else {
        res.send("data is not found")
    }

}







