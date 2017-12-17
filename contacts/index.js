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
        "Firstname": "NongMarch",
        "Lastname": "songpunsibpad",
        "URL": "https://www.facebook.com/MPongsapak",
        "Phone" : "",
        "Note" : ""
    },
    {
        "ID" : "3",
        "Firstname": "NongAut",
        "Lastname": "Widwew",
        "URL": "https://www.facebook.com/akkarapol.suasat",
        "Phone" : "",
        "Note" : ""
    },
    {
        "ID" : "4",
        "Firstname": "NongBut",
        "Lastname": "some body help me",
        "URL": "https://www.facebook.com/Bterpchy",
        "Phone" : "",
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
    router.get('/lites/:name', (req,res) =>{
        var name = req.params.name;
        res.json(findByFirstname(name));
    })
    router.get('/lites', function (req, res) {
        res.json(findAllofList());
    });