/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
                index: function (req,res){
                                res.view('userIndex');
                },
                list: function(req,res){
                                User.find()
                                .then(function(users){
                                                res.view('userList',{
                                                        users: users
                                                });
                                });
                },
                page: function(req,res){
                        res.view("userPage");
                },
                create:function(req,res){
                        var name = req.body.name;
                        User.create({
                                name: name
                        })
                        .then(function (user){
                                res.redirect("/user/list");
                        });
                },
                destroy: function(req,res){
                        var id = req.params['id'];
                        User.destroy({
                                id: id
                        })
                        .then(function(user){
                                res.redirect("/user/list");
                        });
                }
};

