var express = require('express');
var router = express.Router();
var User = require('../lib/User');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res){
  var firstname = req.body.firstname;
  var lastname  = req.body.lastname;
  var email     = req.body.email;
  var password  = req.body.password;
  var idea      = req.body.idea;
  var title     = req.body.title;

  var newUser = new User();
  newUser.firstname = firstname;
  newUser.lastname  = lastname;
  newUser.email     = email;
  newUser.password  = password;
  newUser.idea      = idea;
  newUser.title     = title;
  newUser.save(function(err, saveUser){
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    res.send(saveUser);
    return res.status(200).send();

  })
});

router.get('/userdata', function (req, res) {
  User.find({}, function (err, foundData) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.send(foundData);
      console.log('Berhasil menampilkan data')
    }
  })
});

router.put('/update/:id', function(req, res){
  var id = req.params.id;
  User.findOne({_id: id}, function(err, foundObject){
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
      // foundObject.firstname = req.body.firstname;
      // foundObject.lastname = req.body.lastname;
      foundObject.idea = req.body.idea;
      foundObject.title = req.body.title;
      foundObject.save(function(err, updateObject){
        if(err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.send(updateObject);
          console.log('berhasil meng-update')
        }
      })
    }
  })
});

router.delete('/userdata/:id', function(req, res){
  var id = req.params.id;
  User.findOneAndRemove({_id: id}, function(err){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send(); 
    console.log('Berhasil di delete')
  })
})

module.exports = router;








// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test')

// var mySchema = mongoose.Schema({
//   icecreamname: String,
//   name: String
// });

// var ChoiceModel = mongoose.model('choices', mySchema);

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/check', function (req, res) {
//   var resObject = { msg: 'ok' };
//   res.send(resObject);
// });


// router.get('/likes', function (req, res) {
//   ChoiceModel.find({}, function (err, foundData) {
//     if (err) {
//       console.log(err);
//       res.status(500).send();
//     } else {
//       res.send(foundData);
//       console.log('Berhasil menambahkan data')
//     }
//   })
// });

// router.post('/likes/:icecreamname/:name', function (req, res) {
//   var choice = req.params.icecreamname;
//   var name = req.params.name;
//   var newChoice = new ChoiceModel();
//   newChoice.icecreamname = choice;
//   newChoice.name = name;
//   newChoice.save(function (err, saveObject) {
//     if (err) {
//       console.log(err);
//       res.status(500).send();
//     } else {
//       res.send(saveObject);
//       console.log('Berhasil menambah data')
//     }
//   });
// });

// router.put('/likes/:id', function(req, res){
//   var id = req.params.id;
//   ChoiceModel.findOne({_id: id}, function(err, foundObject){
//     if(err) {
//       console.log(err);
//       res.status(500).send();
//     } else {
//       foundObject.name = req.body.name;
//       foundObject.icecreamname = req.body.icecreamname;
//       foundObject.save(function(err, updateObject){
//         if(err) {
//           console.log(err);
//           res.status(500).send();
//         } else {
//           res.send(updateObject);
//           console.log('berhasil meng-update')
//         }
//       })
//     }
//   })
// });

// router.delete('/likes/:id', function(req, res){
//   var id = req.params.id;
//   ChoiceModel.findOneAndRemove({_id: id}, function(err){
//     if(err){
//       console.log(err);
//       return res.status(500).send();
//     }
//     return res.status(200).send(); 
//     console.log('Berhasil di delete')
//   })
// })

// module.exports = router;
