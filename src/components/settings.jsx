import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "../css/settings.css";

export default function Settings() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    pronoun: "",
    imageUrl: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFirstUserData = async () => {
      try {
        const response = await fetch("http://localhost:5050/firstuserinfo");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched userId:", data._id); // Log the userId
        sessionStorage.setItem("userId", data._id);
        setForm({
          fname: data.fname,
          lname: data.lname,
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
    const userId = sessionStorage.getItem("userId");
    console.log("Submitting for userId:", userId);
    const userChange = { ...form, userId };
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("fname", form.fname);
    formData.append("lname", form.lname);
    formData.append("email", form.email);
    formData.append("password", form.password);
    if (imageFile) {
      formData.append("image", imageFile); // Append the image file if it's available
    }
    try {
      const response = await fetch("http://localhost:5050/settings", {
        // Change to your API's update endpoint
        method: "PUT", // or 'PATCH' depending on your API
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Optionally process response data

      navigate("/");
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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      setImageSrc(URL.createObjectURL(file));
      setImageFile(file);
      setIsImageUploaded(true);
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
      <div className="sidebar">
        <div className="overlap-2">
          <div className="signout">
            <div className="signout-text">
              <div className="text-wrapper-7">Sign out</div>
            </div>
            <img className="signout-icon" src="/img/signout-icon.svg" />
          </div>
          <div className="profile-settings">
            <div className="text-wrapper-8">Profile Settings</div>
            <img className="settings-icon" src="/img/settings-icon.svg" />
          </div>
          <div className="bookmarks">
            <img className="bookmark-icon" src="/img/bookmark-icon.svg" />
            <div className="text-wrapper-9">Bookmarks</div>
          </div>
          <div className="quotes">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">Quotes</div>
              <img className="scroll-icon" src="/img/scroll-icon.svg" />
            </div>
          </div>
          <div className="althea">
            <div className="overlap-3">
              <div className="text-wrapper-11">Althea</div>
              <img
                className="crystall-ball-icon"
                src="/img/crystall-ball-icon.svg"
              />
            </div>
          </div>
          <div className="search">
            <div className="overlap-4">
              <input
                className="search-for"
                form-control="Search for..."
                type="text"
              />
              <img className="search-icon" src="/img/search-icon.svg" />
            </div>
          </div>
          <div className="profile-group">
            <img
              className="notification-icon"
              src="/img/notification-icon.svg"
            />
            <div className="user-icon-wrapper">
              <img className="user-icon" src="/img/user-icon.svg" />
            </div>
            <img className="img" src="/img/settings-icon.svg" />
          </div>
          <div className="logo">
            <div className="text-wrapper-12">Good Fortune</div>
            <div className="overlap-group-wrapper">
              <img className="overlap-group-3" src="/img/logo.svg" />
            </div>
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
            {form.fname} {form.lname}
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
          <div className="notification">
            <div className="top">
              <div className="icon">
                <img className="icon-jam-icons" src="/img/check.svg" />
              </div>
              <div className="content">
                <div className="title-subtitle">
                  <div className="title">Successfully Saved.</div>
                  <p className="subtitle">
                    Your profile settings have been saved.
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="close">
                  <img className="icon-jam-icons" src="/img/close.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="profile-information" ref={formRef} onSubmit={onSubmit}>
          <div className="group-2">
            <div className="div-2">
              <input
                className="form-control pshort"
                id="fname"
                name="fname"
                type="text"
                value={form.fname}
                onChange={(e) => updateForm({ fname: e.target.value })}
                required=""
              />
            </div>
            <label htmlFor="fname" className="text-wrapper-5">
              First Name *
            </label>
          </div>
          <div className="group-8">
            <div className="div-2">
              <input
                className="form-control pshort"
                id="lname"
                name="lname"
                type="text"
                value={form.lname}
                onChange={(e) => updateForm({ lname: e.target.value })}
                required=""
              />
            </div>
            <label htmlFor="lname" className="text-wrapper-5">
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
                id="conemail"
                name="conemail"
                type="text"
                required=""
              />
            </div>
            <label htmlFor="conemail" className="text-wrapper-6">
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
                id="conpassword"
                name="conpassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                required=""
              />
              <img
                className="icon-bootstrap"
                src="/img/eye.svg"
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer" }} // Optional: Changes the cursor to a pointer when hovering over the image
              />
            </div>
            <label htmlFor="conpassword" className="text-wrapper-5">
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
