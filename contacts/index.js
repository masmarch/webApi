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
    exports.findAllofList = function() {
        return lites;
    };
    exports.findByFirstname = function (Firstname) {
        for (var i = 0; i < users.length; i++) {
            if (lists[i].Firstname ==Firstname) return lists[i];
        }
    };
    exports.findByID = function (ID) {
        for (var i = 0; i < users.length; i++) {
            if (lists[i].ID == ID) return ID[i];
        }
    };
router.get('/lites/:Firstname', (req,res) =>{
    res.json(findByFirstname(Firstname));
})