const express = require('express')
const router = express.Router()
var lists = [
    {
        "ID": "0",
        "Firstname": "Piyapong",
        "Lastname": "Paikamnam",
        "URL": "https://www.facebook.com/piyaphong.paikamnam",
        "Phone": "082-5237431",
        "Note": ""
    },
    {
        "ID": "1",
        "Firstname": "Nattaphurin",
        "Lastname": "Vichit",
        "URL": "https://www.facebook.com/profile.php?id=100003002294477",
        "Phone": "098-9367670",
        "Note": ""
    },
    {
        "ID": "2",
        "Firstname": "Pongsapak",
        "Lastname": "Rattanaaudomsuk",
        "URL": "https://www.facebook.com/MPongsapak",
        "Phone": "081-1558446",
        "Note": ""
    },
    {
        "ID": "3",
        "Firstname": "Pongsiri",
        "Lastname": "Suasad",
        "URL": "https://www.facebook.com/akkarapol.suasat",
        "Phone": "061-3269130",
        "Note": ""
    },
    {
        "ID": "4",
        "Firstname": "Pratchaya",
        "Lastname": "Jutavichit",
        "URL": "https://www.facebook.com/Bterpchy",
        "Phone": "083-1609631",
        "Note": ""
    }
];
findAllofList = function () {
    return lists;
};
findByID = function (id) {
    for (var i = 0; i < lists.length; i++) {
        if (lists[i].ID == id) return lists[i];
    }
};
findByFirstname = function (name) {
    for (var i = 0; i < lists.length; i++) {
        if (lists[i].Firstname == name) return lists[i];
    }
};
// ค้นหาทั้งหมด
router.get('/list', function (req, res) {
    res.json(findAllofList());
})
// ค้นหาด้วยชื่อ
router.get('/list/name/:name', (req, res) => {
    var name = req.params.name;
    res.json(findByFirstname(name));
})
// ค้นหาด้วยรหัส
router.get('/list/id/:id', (req, res) => {
    var id = req.params.id;
    res.json(findByID(id));
})
//เพิ่มข้อมูล
router.post('/list/add', (req, res) => {
    var newlist = req.body
    newlist.ID = lists.length
    lists.push(newlist)
    res.status(201).json('Add new list ID: ' + newlist.ID + ' FIRSTNAME: ' + newlist.Firstname + ' Complete')
})
//อัปเดตข้อมูลที่มีอยู่
router.put('/list/update/:id', (req, res) => {
    var uplist = req.body
    var id = req.params.id
    lists[id] = uplist
    res.status(200).json('Update Complete!')
})
//ลบข้อมูล
router.delete('/list/delete/:id', (req, res) => {
    var id = req.params.id
    lists.splice(id, 1)
    res.status(201).json('Delete Complete!')

})

module.exports = router