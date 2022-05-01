// Dependencies
const express = require('express');
const Portfolio = require('../models/Portfolio');

// Initialize
const portfoliosRouter = express.Router();

// Get All Portfolio
portfoliosRouter.get('/', async (req, res) => {
    // Submit To Database
    try {
        const data = await Portfolio.find({});
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Create Portfolio
portfoliosRouter.post('/', async (req, res) => {
    const newPortfolio = new Portfolio(req.body);

    // Submit To Database
    try {
        const data = await newPortfolio.save();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Update Portfolio
portfoliosRouter.put('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Portfolio.findByIdAndUpdate(id, req.body);
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Delete Portfolio
portfoliosRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Portfolio.findByIdAndRemove(id);
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Single Portfolio
portfoliosRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Portfolio.findById(id).exec();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Export
module.exports = portfoliosRouter;