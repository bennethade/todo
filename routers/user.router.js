const path = require('path'); // Added to handle file paths

const jwt = require('jsonwebtoken'); // Added to handle JWT verification

const router = require('express').Router();

const UserController = require('../controller/user.controller');


// Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // expects "Bearer <token>"
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }
  try {
    const decoded = jwt.verify(token, 'secretKey');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
}



// Serve login page
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});


// Serve the registration HTML page
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
});



// Protected dashboard page
router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});





// API routes
router.post('/registration', UserController.register);
router.post('/login', UserController.login);

module.exports = router;