const path = require('path'); // Added to handle file paths



const router = require('express').Router();

const UserController = require('../controller/user.controller');


// Serve login page
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});


// Serve the registration HTML page
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
});



// Handle registration form submission
router.post('/registration', UserController.register);
router.post('/login', UserController.login);

module.exports = router;