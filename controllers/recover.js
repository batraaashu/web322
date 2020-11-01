const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/MealPkg', (req, res) =>{
    res.render('MealPkg');
});

router.get('/registration', (req, res) =>{
    res.render('registration');
});

router.get('/login', (req, res) =>{
    res.render('login');
});
router.get('/recover', (req, res) =>{
    res.render('recover');
});
router.get('/confirmation', (req, res) =>{
    res.render('confirmation');
});


module.exports = router;