import React, {useState } from 'react';
// import '../Register/register.module.css';
import style from '../Register/register.module.css';

const Register = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    password: '',
    confirmPassword: '',
    // image: null
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    password: '',
    confirmPassword: '',
    // image: ''
  });  
  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'image') {
      setFormData(prevState => ({ ...prevState, [name]: event.target.files[0] }));
      setFormErrors(prevState => ({ ...prevState, [name]: '' }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
      setFormErrors(prevState => ({ ...prevState, [name]: '' }));
    }
  };
 
  

  const handleSubmit = event => {
    event.preventDefault();
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.age) {
      errors.age = 'Age is required';
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(errors).length === 0) {
      console.log(formData); // replace with actual submit logic
    } else {
      let errorMessage = '';
      Object.keys(errors).forEach(key => {
        errorMessage += errors[key] + '\n';
      });
      alert(errorMessage);
    }
  };


  return (
    <div className={style['full']}> 
    <div className={style['register-form']}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </label>
      
<label>
  Age:
  <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
  {formErrors.age && <span className="error">{formErrors.age}</span>}
</label>
<label>
  Gender:
  <select name="gender" value={formData.gender} onChange={handleInputChange}>
    <option value="">-- Select Gender --</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  {formErrors.gender && <span className="error">{formErrors.gender}</span>}
</label>
<label>
  Password:
  <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
  {formErrors.password && <span className="error">{formErrors.password}</span>}
</label>
<label>
  Confirm Password:
  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
  {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
</label>
{/* <label>
  Video:
  <video ref={videoRef} autoPlay></video>
  <button onClick={handleCapture}>Capture Image</button>
  {image && <img src={image} alt="captured frame" />}
  {formErrors.image && <span className="error">{formErrors.image}</span>}
</label> */}


<button type="submit" disabled={Object.keys(formErrors).some(key => formErrors[key])}>Submit</button>
</form>
  </div>
  </div>
  );
}; 



 export default Register;

// import React, { useState, useRef } from "react";

// function Register() {
//   const [cameraStream, setCameraStream] = useState(null);
//   const canvasRef = useRef(null);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//       });
//       setCameraStream(stream);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const stopCamera = () => {
//     cameraStream.getTracks().forEach((track) => track.stop());
//     setCameraStream(null);
//   };

  // const captureImage = () => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // Set canvas dimensions to match the video stream dimensions
  //   canvas.width = cameraStream.getVideoTracks()[0].getSettings().width;
  //   canvas.height = cameraStream.getVideoTracks()[0].getSettings().height;

  //   // Draw video frame onto canvas
  //   ctx.drawImage(
  //     cameraStream.getVideoTracks()[0],
  //     0,
  //     0,
  //     canvas.width,
  //     canvas.height
  //   );

  //   // Convert canvas to data URL and download as image file
  //   const dataURL = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");
  //   link.download = "webcam-capture.png";
  //   link.href = dataURL;
  //   link.click();
  // };
//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
  
//     // Set canvas dimensions to match the video stream dimensions
//     canvas.width = cameraStream.getVideoTracks()[0].getSettings().width;
//     canvas.height = cameraStream.getVideoTracks()[0].getSettings().height;
  
//     // Draw video frame onto canvas
//     const videoTrack = cameraStream.getVideoTracks()[0];
//     if (videoTrack instanceof HTMLVideoElement) {
//       ctx.drawImage(videoTrack, 0, 0, canvas.width, canvas.height);
//     }
  
//     // Convert canvas to data URL and download as image file
//     const dataURL = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.download = "webcam-capture.png";
//     link.href = dataURL;
//     link.click();
//   };
  
//   return (
//     <div>
//       {cameraStream ? (
//         <div>
//           <video autoPlay ref={(video) => {if (video) video.srcObject = cameraStream}} />
//           <button onClick={captureImage}>Capture Image</button>
//           <button onClick={stopCamera}>Stop Camera</button>
//           <canvas ref={canvasRef} style={{ display: "none" }} />
//         </div>
//       ) : (
//         <button onClick={startCamera}>Capture Webcam</button>
//       )}
//     </div>
//   );
// }

// export default Register;

// import React, { useState, useRef } from "react";

// function Register() {
//   const [cameraStream, setCameraStream] = useState(null);
//   const canvasRef = useRef(null);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//       });
//       setCameraStream(stream);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const stopCamera = () => {
//     cameraStream.getTracks().forEach((track) => track.stop());
//     setCameraStream(null);
//   };

//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas dimensions to match the video stream dimensions
//     canvas.width = cameraStream.getVideoTracks()[0].getSettings().width;
//     canvas.height = cameraStream.getVideoTracks()[0].getSettings().height;

//     // Draw video frame onto canvas
//     ctx.drawImage(
//       cameraStream.getVideoTracks()[0],
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     );

//     // Convert canvas to data URL and download as image file
//     const dataURL = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.download = "webcam-capture.png";
//     link.href = dataURL;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       {cameraStream ? (
//         <div>
//           <video autoPlay ref={(video) => (video.srcObject = cameraStream)} />
//           <button onClick={captureImage}>Capture Image</button>
//           <button onClick={stopCamera}>Stop Camera</button>
//           <canvas ref={canvasRef} style={{ display: "none" }} />
//         </div>
//       ) : (
//         <button onClick={startCamera}>Capture Webcam</button>
//       )}
//     </div>
//   );
// }

// export default Register;
