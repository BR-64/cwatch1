const express = require('express');
const multer = require('multer');
const router = express.Router();
const { submitCase, caseList } = require('../controllers/caseController');

// const caseSubmit = multer({ dest: 'uploads/' });

// multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      'C:/Users/user/OneDrive/Desktop/pKiaCourse/React_study/cwatch1/backend/uploads'
    );
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + 'pete' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
  },
});
const upload = multer({ storage: storage });

router.post('/submit', upload.array('file', 3), submitCase);
// router.post('/submit', upload.array('originalname', 3), submitCase);
router.get('/caselist', caseList);

module.exports = router;
