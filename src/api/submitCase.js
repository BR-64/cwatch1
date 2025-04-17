// api/submitForm.js
import axios from 'axios';

const submitCase = async (formData) => {
  console.log('submitting case');
  console.log(formData);
  try {
    const response = await axios.post(
      'http://localhost:5000/api/case/submit',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data; // return data for further use if needed
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error; // let the caller handle the error
  }
};

export default submitCase;
