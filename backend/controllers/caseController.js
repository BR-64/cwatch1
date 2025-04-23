const CaseData = require('../models/Case');
const Case = require('../models/Case');

const submitCase = async (req, res) => {
  try {
    console.log('show me :', req.body);

    const caseReport = ({
      topic,
      scope,
      suspect,
      details,
      province,
      district,
      subdistrict,
      reporter,
      file,
    } = req.body);

    console.log(caseReport);
    console.log(caseReport.file);

    const newCase = new CaseData(caseReport);

    await newCase.save();

    res
      .status(200)
      .json({ message: 'Form submitted successfully', data: newCase });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
};

const caseList = async (req, res) => {
  try {
    console.log('case data fetching');
    const cases = await Case.find({});
    res.json(cases);
  } catch (error) {
    console.error('Error fetching cases:', error);
    res.status(500).json({ message: 'Failed to fetch cases' });
  }
};

module.exports = { submitCase, caseList };
