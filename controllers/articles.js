var express = require('express');
var router = express.Router();
var db = require('../models');




router.get('/', function(req,res){
	db.article.findAll().then(function(articles){
		res.render('articles/all', {results: articles});
	});
});

router.get('/:id', function(req,res){

	db.article.findById(req.params.id).then(function(article){
		res.render('articles/show', {result: article});
	})
})


module.exports = router;