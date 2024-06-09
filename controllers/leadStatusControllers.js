// leadStatusControllers.js
const leadStatus = require('../models/leadStatusModels');
const leadStatusRoutes = require('../routes/leadStatusRoutes') // Adjust the path as needed
const {Error,Lead}  = require('../message.json');

// Update lead status
exports.updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { newLeadStatus } = req.body;

  try {
    const updatedLeadStatus = await LeadStatus.findByIdAndUpdate(
      id,
      { leadStatus: newLeadStatus },
      { new: true }
    );

    if (!updatedLeadStatus) {
      return res.status(404).json({ message: Lead.Lead_Not_Found });
    }

    res.json(updatedLeadStatus);
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};

// Update notes
exports.updateNotes = async (req, res) => {
  const { id } = req.params;
  const { newNotes } = req.body;

  try {
    const updatedLeadStatus = await LeadStatus.findByIdAndUpdate(
      id,
      { notes: newNotes },
      { new: true }
    );

    if (!updatedLeadStatus) {
      return res.status(404).json({ message: Lead.Lead_Not_Found });
    }

    res.json(updatedLeadStatus);
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};
