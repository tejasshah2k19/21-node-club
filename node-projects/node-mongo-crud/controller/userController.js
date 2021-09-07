var User = require("../model/userModel")
var mongoose = require("mongoose")
exports.saveuser = function (req, res) {

    //post -> body 

    let u = new User({
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password
    })

    u.save(function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        } else {
            res.json({
                status: 200,
                data: data,
                msg: "user save successfully"
            })
        }
    })
}


exports.authenticate = function (req, res) {

    let email = req.body.email;
    let password = req.body.password;

    User.find({ $and: [{ "email": email }, { "password": password }] }, function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: err,
                msg: "Something went wrong"
            })
        } else {
            if (data.length == 0) {
                res.json({
                    status: -1,
                    data: { "email": email, "password": password },
                    msg: "Invalid Credentials"
                })

            } else {
                res.json({
                    status: 200,
                    data: data,
                    msg: "user save successfully"
                })
            }
        }
    })

}

exports.getAllUsers = function (req, res) {


    User.find(function (err, data) {
        res.json({
            status: 200,
            data: data,
            msg: "data"
        })
    })
}

exports.getUserById = function (req, res) {
    console.log(req.params.userId)
    if (mongoose.isValidObjectId(req.params.userId)) {
        User.find({ _id: req.params.userId }, function (err, data) {
            if (err) {

                res.json({
                    status: -1,
                    data: err,
                    msg: "Somethin went Wrong"
                })
            } else {
                if (data.length == 0) {

                    res.json({
                        status: -1,
                        data: req.params.userId,
                        msg: "Invalid UserId"
                    })
                } else {

                    res.json({
                        status: 200,
                        data: data,
                        msg: "success...."
                    })
                }
            }
        })
    } else {
        res.json({
            status: -1,
            data: req.params.userId,
            msg: "Invalid UserId"
        })
    }
}

exports.updateUser = function (req, res) {

    User.updateOne({ _id: req.body._id }, { $set: { firstName: req.body.firstName } }, function (err, data) {
        if (err) {
            res.json({
                status: -1,
                data: req.body,
                msg: "Something went wrong"
            })
        } else {
           //user.find
            res.json({
                status: 200,
                data: req.body,
                msg: "user udpated"
            })
        }
    })

}

