const express = require('express');

const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add');
});


router.post('/add', (req, res) => {
    res.send('Received');
});

router.get('/ctasporcobrar', async (req, res) => {
   const ctasxcob = await pool.query('SELECT * FROM cuentasxcobrar')
   res.render('links/ctasporcobrar', { ctasxcob })
});

module.exports = router;