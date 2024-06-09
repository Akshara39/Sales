// controllers/vendorControllers.js
const Vendor = require('../models/vendorModels');
const vendoroutes = require('../routes/vendorRoutes');
const {Error,VENDOR}  = require('../message.json');

exports.getAllvendor = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate('vendorCategoryId');
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};

exports.addvendor = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.status(201).json(vendor);
  } catch (error) {
    res.status(400).json({ message:Error.Error_Message });
  }
};

exports.updatdevendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vendor);
  } catch (error) {
    res.status(400).json({ message:Error.Error_Message });
  }
};

exports.deletevendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};

exports.getById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id).populate('vendorCategoryId');
    if (!vendor) {
      return res.status(404).json({ message: VENDOR.Vendor_Not_Found });
    }
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};


// Get all vendor categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await VendorCategory.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};

// Add a new vendor category
exports.addCategory = async (req, res) => {
  try {
    const category = await VendorCategory.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message:Error.Error_Message });
  }
};

// Delete a vendor category
exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.body;

  try {
    const deletedCategory = await VendorCategory.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ message: VENDOR.Vendor_category });
    }

    res.json({ message: 'Vendor category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message:Error.Error_Message });
  }
};

// Update a vendor category
exports.updateCategory = async (req, res) => {
  const { categoryId, updatedLabel } = req.body;

  try {
    const updatedCategory = await VendorCategory.findByIdAndUpdate(
      categoryId,
      { label: updatedLabel },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: VENDOR.Vendor_category });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message:Error.Error_Message});
  }
};
