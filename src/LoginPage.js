import React, { useState } from 'react';

const LoginPage = () => {
  const [isPatientFormVisible, setIsPatientFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    dob: '',
    disease: '',
    bloodGroup: '',
    diabetes: false,
    hypertension: false,
    allergies: false
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // After submitting, redirect to another page
    window.location.href = "https://vajra-healthcare-portal.vercel.app/"; // Replace with your desired link
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="ml-10">
          <h2 className="text-xl">VAJRA HEALTHCARE PORTAL</h2>
        </div>
        <div className="mr-10 space-x-6">
          <a href="#" className="hover:text-blue-400">Contact Us</a>
          <a href="#" className="hover:text-blue-400">About Us</a>
        </div>
      </nav>

      {/* Login Options */}
      <div className="flex justify-center items-center mt-12 space-x-16">
        {/* Doctor Card */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center hover:shadow-md">
          <img
            src="https://img.freepik.com/premium-vector/medical-doctor-cartoon-icon_24908-9144.jpg"
            alt="Doctor"
            className="w-44 h-44 object-contain"
          />
          <h2 className="text-2xl font-semibold mt-4">Login as Doctor</h2>
          <a href="/doctor-login" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg">
            Login
          </a>
        </div>

        {/* Patient Card */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center hover:shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5170/5170737.png"
            alt="Patient"
            className="w-44 h-44 object-contain"
          />
          <h2 className="text-2xl font-semibold mt-4">Login as Patient</h2>
          <button
            onClick={() => setIsPatientFormVisible(!isPatientFormVisible)}
            className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-8 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>

      {/* Patient Form */}
      {isPatientFormVisible && (
        <div className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Patient Information</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Disease / Symptoms</label>
                <input
                  type="text"
                  name="disease"
                  value={formData.disease}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              {/* Checkbox Options for Diseases */}
              <div>
                <label className="block font-medium">Do you have any of the following?</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="diabetes"
                      checked={formData.diabetes}
                      onChange={handleFormChange}
                      className="form-checkbox"
                    />
                    <span className="ml-2">Diabetes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="hypertension"
                      checked={formData.hypertension}
                      onChange={handleFormChange}
                      className="form-checkbox"
                    />
                    <span className="ml-2">Hypertension</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="allergies"
                      checked={formData.allergies}
                      onChange={handleFormChange}
                      className="form-checkbox"
                    />
                    <span className="ml-2">Allergies</span>
                  </label>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Description Section */}
      <div className="max-w-5xl mx-auto text-center mt-20 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Health Care System</h2>
        <p className="text-gray-700">
          The purpose of the project entitled as “HEALTHCARE MANAGEMENT SYSTEM” is to computerize the medical data 
          and patient’s medical history which is user-friendly, simple, fast, and cost-effective. It deals with the 
          collection of patient’s information, diagnosis details, etc. Traditionally, it was done manually. The main 
          function of the system is to register and store patient details and doctor details and retrieve these details 
          as and when required, and also to manipulate these details meaningfully.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
