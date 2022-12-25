var express = require("express");
const app = express();
const mysql = require('mysql');
var router = express.Router();

// create db 
// app.get('/creatdb', (req, res) => {
//     let sql = 'CREATE DATABASE practice';
//     db.query(sql, (err, result) => {
//         if (erer) throw err;
//         console.log(resutl);
//         res.send('database created....')
//     })
// })

// get empdata
app.get('/getallemp', (req, res) => {
    let sql = 'SELECT * FROM empdata';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// get emp under boss
app.get('/getallempundermgr/:id', (req, res) => {
    let sql = `select e.name,e.designation,e.gender,e.tel,l.description,s.statusdesc,an.award_name from empdata e inner join applog l on e.userid=l.userid inner join statab s on s.statno=l.status inner join awardlog aw on aw.userid=e.userid inner join award an on an.award_id=aw.award_earned where e.mgrid= ${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// update emp description
app.get('/updatedesc/:id/:desc', (req, res) => {
    let sql = `update applog set description = ${req.params.desc} where userid =${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

module.exports = router;