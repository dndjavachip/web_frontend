var express = require('express');
var dbInstance = require('../dao');
var fs = require('fs')

exports.checkManager = function (req, res) { // GET Method(Read)

    var manager_id = req.params.manager_id;
    console.log(manager_id);
    dbInstance.dbConnection.query('SELECT manager_id from USER_MANAGER where manager_id=?', [manager_id], function (err, rows, fields) {

        if (rows.length == 0)
            res.status(200).json(
                {
                    "manager_check": "false"
                }
            );
        else
            res.status(200).json({
                "manager_check": "true"
            });
    });
};

exports.signupManager = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./views/manager/singup.html', (err, data) => {
        if (err) {
            return console.error(err);
        }
        res.end(data, 'utf-8');
    });
}

exports.createManager = function (req, res, next) { // POST Method(CREATE)
    var managers = req.body;
    var managerinfo = [managers.manager_id,managers.manager_pw];
    console.log(managerinfo);


    dbInstance.dbConnection.query('INSERT INTO USER_MANAGER VALUES (?,?)', managerinfo, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "manager registered sucessfully" // send id & encrypt password.
            });
        }

    });

};
