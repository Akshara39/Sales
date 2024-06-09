// prospectControllers.js
const prospect = require('../models/prospectModels'); // Adjust the path as needed
const prospectRoutes = require('../routes/prospectRoutes');
const {Error}  = require('../message.json');

exports.viewAll = async (req, res) => {
  try {
    const prospects = await Prospect.find();
    res.json(prospects);
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }0
};

exports.addProspect = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const prospect = await prospect.create({ name, email, phone });
    res.status(201).json(prospect);
  } catch (error) {
    res.status(400).json({ message:Error.Error_Message});
  }
};

exports.addBulkProspect = async (req, res) => {
  const { prospects } = req.body;
  try {
    const insertedProspects = await Prospect.insertMany(prospects);
    res.status(201).json(insertedProspects);
  } catch (error) {
    res.status(400).json({message:Error.Error_Message });
  }
};

