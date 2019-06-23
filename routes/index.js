var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.render('GET /register');
});

/* POST /register */
router.post('/register', (req, res, next) => {
  res.render('POST /register');
});

/* GET /login */
router.get('/login', (req, res, next) => {
  res.render('GET /login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
  res.render('POST /login');
});

/* GET user profile /profile */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* GET /forgot */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;
