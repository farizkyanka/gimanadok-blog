const express = require('express')
const router = express.Router()
const Post = require('../models/posts')

router.get('/', (req,res) => {
    res.render('templates/home.ejs')
})

router.get('/fitn', (req,res) => {
    res.render('templates/fitnnutri.ejs')
})

router.get('/derma', (req,res) => {
    res.render('templates/derma.ejs')
})

router.get('/mentalhealth', (req,res) => {
    res.render('templates/psych.ejs')
})

router.get('/wellness', (req,res) => {
    res.render('templates/general.ejs')
})

module.exports = router