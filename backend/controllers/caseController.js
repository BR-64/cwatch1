const CaseData = require('../models/Case');

const submitCase = async (req, res) => {
  try {
    const newForm = new CaseData(req.body);
    await newForm.save();
    res
      .status(200)
      .json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
};

module.exports = { submitCase };
