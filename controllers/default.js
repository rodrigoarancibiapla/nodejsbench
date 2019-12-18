var express = require('express'),
    router = express.Router();

const companies = require('../models/companies');
const MongoClient = require('mongodb').MongoClient;


router.get('/companies/:employees', async function(req, res) {
    try {
        var result = await companies.getByEmployeesNumber(req.params.employees);
        result.length = Math.min(result.length, 100);

        res.status(200).send(result);

    } catch (e) {
        res.status(500);
        console.log("ERROR:" + e);
    }

});

module.exports = router;