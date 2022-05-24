const {Student, validate} = require('../models/student'); 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const students = await Student.find().sort('name');
  res.send(students);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let student = new Student({ 
    name: req.body.name,
    distance: req.body.distance,
    number: req.body.number
  });
  student = await student.save();
  
  res.send(student);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(req.params.id,
    { 
      name: req.body.name,
      distance: req.body.distance,
      number: req.body.number
    }, { new: true });

  if (!student) return res.status(404).send('The student with the given ID was not found.');
  
  res.send(student);
});

router.delete('/:id', async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

module.exports = router; 