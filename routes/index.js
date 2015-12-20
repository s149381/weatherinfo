var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Weather' });
});

/* GET the explanation page */
router.get('/information', function(req, res) {
	res.render('information', { title: 'Information' });
});

/* GET the userlist */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.post('/removeallusers', function(req, res) {
	var db = req.db;
	var collection = db.get('usercollection');
	
	collection.remove({
	}, function (err, doc){
		if (err) {
            // If it failed, return error
            res.send("There was a problem removing the information from the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
	});
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userPassword = req.body.userpassword;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "password" : userPassword
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;
