var express = require('express');
var router = express.Router();
var User = require('../lib/User');
var jwt = require('jsonwebtoken');
const multer = require('multer');
// const upload = multer({dest: 'public/uploads'})
// set Storage engine
// const storage = multer.diskStorage({
//   dest: 'public/uploads',
//   filename: function(req, file, cb){
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// init upload
const upload = multer({
  dest: 'public/uploads',
  filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
}); 

router.post('/login', function(req, res){
  var email     = req.body.email;
  var password  = req.body.password;
  
  User.findOne({email: email, password: password}, function(err, user){
    var token = jwt.sign({user}, 'my-secret-key')
    if(err) {
      console.log(err);
      return res.status(500).send();
    }
    if(!user) {
      return res.status(404).send();
    }
    req.session.user = user;
    // return res.status(200).send(user)
    res.status(200)
    res.json({
      user: user,
      token: token
    })
  })
});

router.get('/dashboard', function(req, res){
  if(!req.session.user) {
    return res.status(401).send();
  }
  return res.status(200).send("Welcome to super-secret API!");
})

router.post('/register', function(req, res){
  var firstname = req.body.firstname;
  var lastname  = req.body.lastname;
  var email     = req.body.email;
  var password  = req.body.password;
  var idea      = req.body.idea;
  var title     = req.body.title;
  var image     = req.body.image;

  var newUser = new User();
  newUser.firstname = firstname;
  newUser.lastname  = lastname;
  newUser.email     = email;
  newUser.password  = password;
  newUser.idea      = idea;
  newUser.title     = title;
  newUser.image     = image;
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

router.get('/userdata/:id', function (req, res) {
  var id = req.params.id;
  User.findOne({_id: id}, function (err, foundData) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.send(foundData);
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

// *TEST UPLOAD*

// router.post('/', upload.any(), function (req, res, next) {
//   res.send(req.files)
// }); 

router.put('/uploadimage/:id', upload.any(), function(req, res){
  var id = req.params.id;
  User.findOne({_id: id}, function(err, foundObject){
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
      foundObject.image = req.files.image;
      foundObject.save(function(err, updateObject){
        if(err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.send('image masuk');
          res.send(updateObject.files)
        }
      })
    }
  })
});

// router.post('/uploadimg', function(req,res) {  
//   upload(req,res, function(err) {  
//       if(err) {  
//         console.log(err);
//         res.status(500).send();
//       }  
//       res.send("File is uploaded successfully!");  
//   });  
// });  

// router.post('/uploadimg', (req, res) => {
//   upload(req, res, (err) => {
//     if(err){
//       res.status(500).send(err);
//     } else {
//       console.log(req.file);
//       res.send('Done!')
//     }
//   })
// })

router.delete('/userdata/:id', function(req, res){
  var id = req.params.id;
  User.findOneAndRemove({_id: id}, function(err){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send('Berhasil di delete')
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
