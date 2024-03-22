import { useState } from "react";
const NameChange = () => {
    const [nameData, setNameData] = useState([]);

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    age: '',
    currentAddress: '',
    previousName: '',
    dateOfChange: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNameData = [...nameData, formData];
    setNameData(newNameData);
    console.log('Name Change Data submitted:', formData);
    console.log('Name Data array:', newNameData);
    setFormData({
      fullName: '',
      fatherName: '',
      motherName: '',
      age: '',
      currentAddress: '',
      previousName: '',
      dateOfChange: '',
    });
  };
    return ( 
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="fatherName">Father's Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="motherName">Mother's Name:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="currentAddress">Current Address:</label>
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="previousName">Previous Name:</label>
          <input
            type="text"
            id="previousName"
            name="previousName"
            value={formData.previousName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfChange">Date of Name Change:</label>
          <input
            type="date"
            id="dateOfChange"
            name="dateOfChange"
            value={formData.dateOfChange}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Affidavit</button>
      </form>
     );
}
 
export default NameChange;