var express = require("express");
const app = express();
var router = express.Router();
const mysql = require('mysql');
const { json } = require("stream/consumers");
//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  //please change username
    password: 'password', //please change password
    database: 'sdlc'
});
//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
});

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// // create db 
// router.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE practice;'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('database created....')
//     });
// });

// // create table
// router.get('/createtb', (req, res) => {
//     let sql = 'create table auth(userid int primary key,email varchar(25),password varchar(25));'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('database created....')
//     });
// });

// // inserting static data
// router.get('/insertdata', (req, res) => {
//     let sql = 'insert into auth values(1,"aniket@gmail.com","aniket@123");'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('inserted data....')
//     });
// });

// // getting data
// router.get('/getauthdata', (req, res) => {
//     let sql = 'select * from auth;'
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('data fetched....')
//     });
// });

// // updating data
// router.get('/update/:id', (req, res) => {
//     let sql = `update auth set password="nikhil@123" where userid= ${req.params.id};`
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('data updated....')
//     });
// });
//---------------------
// get empdata
router.get('/getallemp', (req, res) => {
    let sql = 'SELECT * FROM empdata';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
router.get('/getemp/:id', (req, res) => {
    let sql = `SELECT * FROM empdata where userid=${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

// get emp under boss
router.get('/getallempundermgr/:id', (req, res) => {
    let sql = `select e.name,e.designation,e.gender,e.tel,l.description,s.statusdesc,an.award_name
                from empdata e 
                inner join applog l on e.userid=l.userid 
                inner join statab s on s.statno=l.status 
                inner join awardlog aw on aw.userid=e.userid
                inner join award an on an.award_id=aw.award_earned where e.mgrid= ${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// update emp description
router.get('/updatedesc/:id/:desc', (req, res) => {
    let sql = `update applog set description = ${req.params.desc} where userid =${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});
router.get('/authen/:username/:password', (req, res) => {
    console.log(req.params.username);
    let sql = `SELECT * FROM auth where email=${req.params.username}`;
    let query = db.query(sql, (err, result) => {
        if (err) console.log(err);
        var empdata = result[0];
        var databasepassword = JSON.stringify(empdata.password);


        if (databasepassword == req.params.password) {
            console.log("in if block");
            console.log(req.params.username);
            console.log(req.params.password);
            console.log(empdata.userid);
            var idobj = { "id": empdata.userid };
            res.send(idobj);
        }
        console.log(err);

    });
});

module.exports = router;