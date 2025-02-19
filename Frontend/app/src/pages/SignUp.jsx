import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Footer from "../components/Footer";
import styles from "../form.module.css"; // Import the CSS module

export default function SignUpForm() {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    physicalAddress: "",
    idNumber: "",
    userCategory: "",
    skill: "",
    charge: "",
    password: "",
    passwordRepeat: "",
    attachment: null,
    acceptTerms: false,
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.passwordRepeat) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    if (!formData.acceptTerms) {
      setErrorMessage("You must accept the Terms & Privacy.");
      return;
    }

    // If validation passes, clear error and handle submission
    setErrorMessage("");
    console.log("Form submitted:", formData);
    // Here you can send the form data to the backend
  };

  const handleCancel = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel? You will be redirected to the homepage."
    );
    if (confirmCancel) {
      navigate("/"); // Redirect to home page
    }
  };


  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.centerContent}>
            <h1>Lend A Hand</h1>
            <p>Please fill in this form to create an account.</p>
          </div>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <label htmlFor="surname">
            <b>Surname</b>
          </label>
          <input
            type="text"
            placeholder="Enter Surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <label htmlFor="email">
            <b>Email Address</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <label htmlFor="physicalAddress">
            <b>Physical Address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Physical Address"
            name="physicalAddress"
            value={formData.physicalAddress}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <label htmlFor="idNumber">
            <b>ID Number/ passport</b>
          </label>
          <input
            type="text"
            placeholder="Enter ID Number"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <div className={styles.selectContainer}>
            <label htmlFor="userCategory">
              <b>Category</b>
            </label>
            <select
              name="userCategory"
              value={formData.userCategory}
              onChange={handleInputChange}
              required
              className={styles.input}
            >
              <option value="">--Select your category--</option>
              <option value="seller">Selling Skills</option>
              <option value="buyer">Finding Skills</option>
            </select>
          </div>

          {formData.userCategory === "seller" && (
            <div id="skillsSection">
              <label htmlFor="skill">
                <b>Skill You're Selling</b>
              </label>
              <input
                type="text"
                placeholder="Enter your skill"
                name="skill"
                value={formData.skill}
                onChange={handleInputChange}
                className={styles.input}
              />

              <label htmlFor="charge">
                <b>How Much You Charge</b>
              </label>
              <input
                type="text"
                placeholder="Enter your rate"
                name="charge"
                value={formData.charge}
                onChange={handleInputChange}
                className={styles.input}
              />

              <label htmlFor="attachment">
                <b>Add Attachments (e.g., qualifications)</b>
              </label>
              <input
                type="file"
                name="attachment"
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          )}

          <div className={styles.passwordContainer}>
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`toggle-password ${showPassword ? "show" : ""}`}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>

          <div className={styles.passwordContainer}>
            <label htmlFor="passwordRepeat">
              <b>Repeat Password</b>
            </label>
            <input
              type={showPasswordRepeat ? "text" : "password"}
              placeholder="Repeat Password"
              name="passwordRepeat"
              value={formData.passwordRepeat}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <i
              onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
              className={`toggle-password ${showPasswordRepeat ? "show" : ""}`}
            >
              {showPasswordRepeat ? "👁️" : "👁️‍🗨️"}
            </i>
          </div>

          {errorMessage && (
            <div id="error-message" className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}

          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />{" "}
            Remember me
          </label>

          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
            />{" "}
            Accept Terms & Privacy
          </label>

          <div className={styles.clearfix}>
            <button
              type="button"
              className={styles.cancelbtn}
              onClick={handleCancel}
            >
              X
            </button>
            <Link to={'/workers'}>
            <button type="submit" className={styles.signupbtn}>
              
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}
