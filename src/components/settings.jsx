import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/output.css";
import "../css/settings.css";
import GroupedLogo from "../img/Grouped_Logo.svg";
import GroupedProfile from "../img/Grouped_Profile.svg";
import Althea from "../img/Althea.svg";
import QuotesIcon from "../img/Quotes.svg";
import BookmarksIcon from "../img/Bookmarks.svg";
import ProfileSettingsIcon from "../img/Profile Settings.svg";
import SignOutIcon from "../img/sign-out.svg";

import configData from "../config.json";

export default function Settings() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    pronoun: "",
    imageUrl: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFirstUserData = async () => {
      try {
        const response = await fetch(configData.SERVER_URL + "/firstuserinfo");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.imageUrl) {
          setImageSrc(configData.SERVER_URL + `${data.imageUrl}`);
          setIsImageUploaded(true);
        }
        console.log("Fetched userId:", data._id); // Log the userId
        console.log("Fetched imageUrl", data.imageUrl);
        sessionStorage.setItem("userId", data._id);
        setForm({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          imageUrl: data.imageUrl,
        });
      } catch (error) {
        console.error("Fetching first user data failed:", error);
      }
    };

    fetchFirstUserData();
  }, []);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    // Validation for required fields
    // Validation check for required fields
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirmEmail ||
      !form.confirmPassword
    ) {
      window.alert("Please fill out all required fields.");
      return;
    }

    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      window.alert("Please enter a valid email address.");
      return;
    }

    // Check if email and confirm email match
    if (form.email !== form.confirmEmail) {
      window.alert("Email and confirm email do not match.");
      return;
    }

    // Check if password and confirm password match
    if (form.password !== form.confirmPassword) {
      window.alert("Password and confirm password do not match.");
      return;
    }

    const userId = sessionStorage.getItem("userId"); // Get userId from session storage
    if (!userId) {
      window.alert("User ID is missing. Please log in again.");
      return;
    }

    const userChange = { ...form, userId };
    console.log("Submitting for userId:", userId);
    console.log("Validation passed, proceeding with submission");
    try {
      console.log("Sending data to server");
      const response = await fetch(configData.SERVER_URL + "/settings", {
        // Change to your API's update endpoint
        method: "PUT", // or 'PATCH' depending on your API
        // body: formData,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId, // Make sure to include this in the body
          fname: form.firstName, // Update field names to match server expectations
          lname: form.lastName,
          email: form.email,
          confirmEmail: form.confirmEmail,
          password: form.password,
          confirmPassword: form.confirmPassword,
          pronoun: form.pronoun,
          // Add additional fields if needed
        }),
      });
      console.log("Response received", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Optionally process response data
      // Alert user of successful save
      console.log("Submission successful, showing alert and reloading page");
      window.alert("Information successfully saved.");
      window.location.reload();
    } catch (error) {
      window.alert(error);
      console.error("Updating user data failed:", error);
    }

    // Resetting form here might not be necessary if you navigate away
  }

  const formRef = useRef(null);

  const handleSubmitClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  const [imageSrc, setImageSrc] = useState("/img/user-icon.svg");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setImageSrc(URL.createObjectURL(file));
      setImageFile(file);
      setIsImageUploaded(true);

      const formData = new FormData();
      formData.append("image", file);
      try {
        // Assuming '/upload' is your endpoint for uploading images
        const response = await fetch(configData.SERVER_URL + "/upload", {
          method: "POST",
          body: formData,
          // Note: Fetch API does not require Content-Type header for FormData
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.fileUrl) {
          setImageFile(data.fileUrl); // Update state with the URL from the response
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle error appropriately
      }
    }
  };

  const handleRemoveImage = () => {
    setImageSrc("/img/user-icon.svg"); // Reset to default image
    setIsImageUploaded(false);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="mid-fidelity">
      <div className="fixed top-0 left-0 inset-y-0 z-50 flex w-72 flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div>
            <Link to="/" className="flex h-16 shrink-0 items-center">
              <img
                className="btn h-10 w-auto"
                src={GroupedLogo}
                alt="Company Logo"
              ></img>
            </Link>
          </div>
          <div className="icon-user-circle-wrapper">
            <img
              className="icon-user-circle"
              src={GroupedProfile}
              alt="User Profile"
            ></img>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    <Link
                      to="/althea"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={Althea}
                        alt="Crystal Ball"
                      ></img>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quotes"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={QuotesIcon}
                        alt="Quotes Icon"
                      ></img>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bookmark"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={BookmarksIcon}
                        alt="Bookmark Icon"
                      ></img>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <img
                        className="btn h-7 w-auto"
                        src={ProfileSettingsIcon}
                        alt="Cog Icon"
                      ></img>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div>
            <Link to="/signout" className="flex justify-center items-center">
              <img
                className="btn h-7 w-auto"
                src={SignOutIcon}
                alt="Sign Out Icon"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="overlap">
        <div className="text-wrapper">Profile Settings</div>
        <div className="profile-image">
          <figure
            className="image-container"
            style={
              isImageUploaded
                ? { background: `url(${imageSrc}) center / cover` }
                : {}
            }
          >
            {!isImageUploaded && (
              <img className="sample-image" src={imageSrc} alt="User" />
            )}
          </figure>
          <div className="div">
            {form.firstName} {form.lastName}
          </div>
          <label className="upload-group">
            <input
              type="file"
              id="upload-button"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="overlap-group">
              <div className="text-wrapper-2">Upload Photo</div>
            </div>
          </label>
          <div
            className="text-wrapper-3"
            onClick={handleRemoveImage}
            style={{ cursor: "pointer" }}
          >
            Remove
          </div>
          <img className="line" src="/img/line-9.svg" />
          <div className="text-wrapper-4">Image requirements:</div>
          <p className="min-px-px">
            Min. 400 px * 400 px
            <br />
            Max. 2MB
          </p>
        </div>
        <form className="profile-information" ref={formRef} onSubmit={onSubmit}>
          <div className="group-2">
            <div className="div-2">
              <input
                className="form-control pshort"
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => updateForm({ firstName: e.target.value })}
                required=""
              />
            </div>
            <label htmlFor="firstName" className="text-wrapper-5">
              First Name *
            </label>
          </div>
          <div className="group-8">
            <div className="div-2">
              <input
                className="form-control pshort"
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => updateForm({ lastName: e.target.value })}
                required=""
              />
            </div>
            <label htmlFor="lastName" className="text-wrapper-5">
              Last Name *
            </label>
          </div>
          <div className="group-3">
            <div className="div-3">
              <input
                className="form-control plong"
                id="email"
                name="email"
                type="text"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                required=""
              />
            </div>
            <label htmlFor="email" className="text-wrapper-6">
              Email Address *
            </label>
          </div>
          <div className="group-4">
            <div className="div-3">
              <input
                className="form-control plong"
                id="confirmEmail"
                name="confirmEmail"
                type="text"
                value={form.confirmEmail}
                onChange={(e) => updateForm({ confirmEmail: e.target.value })}
                required=""
              />
            </div>
            <label htmlFor="confirmEmail" className="text-wrapper-6">
              Confirm Email Address *
            </label>
          </div>
          <div className="group-5">
            <div className="div-2">
              <input
                className="form-control password"
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
                required=""
              />
              <img
                className="icon-bootstrap"
                src="/img/eye.svg"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            <label htmlFor="password" className="text-wrapper-5">
              Password *
            </label>
          </div>
          <div className="group-6">
            <div className="div-2">
              <input
                className="form-control password"
                id="confirmPassword"
                name="confirmPassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) =>
                  updateForm({ confirmPassword: e.target.value })
                }
                required=""
              />
              <img
                className="icon-bootstrap"
                src="/img/eye.svg"
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }} // Optional: Changes the cursor to a pointer when hovering over the image
              />
            </div>
            <label htmlFor="confirmPassword" className="text-wrapper-5">
              Confirm Password *
            </label>
          </div>
          <div className="group-7">
            <label htmlFor="pronoun" className="text-wrapper-6">
              Pronoun
            </label>
            <div className="div-3">
              <select
                className="form-control dropdown-select"
                id="pronoun"
                name="pronoun"
              >
                <option value="">Select...</option>
                <option value="he/him">He/Him</option>
                <option value="she/her">She/Her</option>
                <option value="they/them">They/Them</option>
                <option value="ze/zir">Ze/Zir</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* <div className="div-3">
              <img className="polygon" src="/img/triangle.svg" />
            </div>
            <div className="text-wrapper-6">Pronoun</div> */}
          </div>
        </form>
        <input
          className="submitButton"
          type="submit"
          value="Save"
          onClick={handleSubmitClick}
        />
      </div>
    </div>
  );
}
