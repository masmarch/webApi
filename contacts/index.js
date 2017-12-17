const express = require('express')
const router = express.Router()
var lists = [
    {
        "ID" : "0",
        "Firstname": "Piyapong",
        "Lastname": "Paikamnam",
        "URL": "https://www.facebook.com/piyaphong.paikamnam",
        "Phone" : "082-5237431",
        "Note" : ""
    },
    {
        "ID" : "1",
        "Firstname": "Nattaphurin",
        "Lastname": "Vichit",
        "URL": "https://www.facebook.com/profile.php?id=100003002294477",
        "Phone" : "098-9367670",
        "Note" : ""
    },
    {
        "ID" : "2",
        "Firstname": "Pongsapak",
        "Lastname": "Rattanaaudomsuk",
        "URL": "https://www.facebook.com/MPongsapak",
        "Phone" : "0811558446",
        "Note" : ""
    },
    {
        "ID" : "3",
        "Firstname": "Pongsiri",
        "Lastname": "Suasad",
        "URL": "https://www.facebook.com/akkarapol.suasat",
        "Phone" : "0613269130",
        "Note" : ""
    },
    {
        "ID" : "4",
        "Firstname": "Pratchaya",
        "Lastname": "Jutavichit",
        "URL": "https://www.facebook.com/Bterpchy",
        "Phone" : "0831609631",
        "Note" : ""
    }
    ];
    indAllofList = function() {
        return lists;
    };
    findByFirstname = function (name) {
        for (var i = 0; i < lists.length; i++) {
            if (lists[i].Firstname ==name) return lists[i];
        }
    };
    findByID = function (ID) {
        for (var i = 0; i <lists.length; i++) {
            if (lists[i].ID == ID) return ID[i];
        }
    };
    router.get('/list/name/:name', (req,res) =>{
        var name = req.params.name;
        res.json(findByFirstname(name));
    })
    router.get('/list/id/:id', (req,res) =>{
        var id = req.params.id;
        res.json(findByID(id));
    })
    router.get('/list', function (req, res) {
        res.json(findAllofList());
    });
    module.exports = router