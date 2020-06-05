'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var x = req.query.x;
    var y = req.query.y;
    var method = req.query.method;

    function calculator(method, x, y) {
        if (method == 'divide') {
            console.log(x + " / " + y + " = " + (parseInt(x) / parseInt(y)))
        }
        else if (method == 'multiply') {
            console.log(x + " * " + y + " = " + (parseInt(x) * parseInt(y)))
        }
        else if (method == 'add') {
            console.log(x + " + " + y + " = " + (parseInt(x) + parseInt(y)))
        }
        else if (method == 'subtract') {
            console.log(x + " - " + y + " = " + (parseInt(x) - parseInt(y)))
        }
        else {
            console.log('Error! please select any method')
        }
    }

    calculator(req.query.method, req.query.x, req.query.y);

    res.render('index', { title: "Gurasees's calculator" });
});

module.exports = router;
