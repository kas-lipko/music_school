const express = require('express');
const homeTemplate = require('../views/home');
const studentLoginTemplate = require('../views/studentlogin');
const adminStudentsTemplate = require('../views/admin/admin');
const studentsRepo = require('../repositories/students');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(homeTemplate());
});

router.get('/student', (req, res) => {
  res.send(studentLoginTemplate());
})

router.get('/admin/students', async (req, res) => {
  const students = await studentsRepo.getAll();
  res.send(adminStudentsTemplate({students}));
})
module.exports = router;
