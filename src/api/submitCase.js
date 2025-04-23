// api/submitForm.js
import axios from 'axios';

const submitCase = async (formData) => {
  console.log('submitting case');
  console.log(formData);

  const newForm = new FormData();
  newForm.append('topic', formData.topic);
  newForm.append('scope', formData.scope);
  newForm.append('suspect', formData.suspect);
  newForm.append('details', formData.details);
  newForm.append('province', formData.province);
  newForm.append('district', formData.district);
  newForm.append('subdistrict', formData.subdistrict);
  newForm.append('reporter', formData.reporter);
  newForm.append('file', formData.file);

  console.log(newForm);

  try {
    const response = await axios.post(
      'http://localhost:5000/api/case/submit',
      newForm,
      {
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log(response);
    return response.data; // return data for further use if needed
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error; // let the caller handle the error
  }
};

export default submitCase;
