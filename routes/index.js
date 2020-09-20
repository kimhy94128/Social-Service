const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mypage', (req, res) => {
  res.render('mypage', {title: 'mypage'})
})

module.exports = router;
