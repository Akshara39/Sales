// saleStatusControllers.js

const SaleStatus = require('../models/saleStatusModels'); // Adjust the path to your SaleStatus model
const saleStatusRoutes = require('../routes/saleStatusRoutes')

const {Sales,Error}  = require('../message.json');

exports.updatesaleStatus = async (req, res) => {
  const { id } = req.params;
  const { newStatus } = req.body;

  try {
    // Find the sale status by ID and update the status
    const updatedSaleStatus = await SaleStatus.findByIdAndUpdate(id, { status: newStatus }, { new: true });

    if (!updatedSaleStatus) {
      return res.status(404).json({ message: Sales.No_Sales });
    }

    res.json(updatedSaleStatus);
  } catch (error) {
    res.status(500).json({ message: Error.Error_Message });
  }
};

exports.updatenotes = async (req, res) => {
  const { id } = req.params;
  const { newNotes } = req.body;

  try {
    // Find the sale status by ID and update the notes
    const updatedSaleStatus = await SaleStatus.findByIdAndUpdate(id, { notes: newNotes }, { new: true });

    if (!updatedSaleStatus) {
      return res.status(404).json({ message: Sales.No_Sales });
    }

    res.json(updatedSaleStatus);
  } catch (error) {
    res.status(500).json({ message: Error.Error_Message });
  }
};
