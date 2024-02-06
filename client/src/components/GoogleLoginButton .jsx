// GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from './authContext'; // assuming you have an AuthContext

const GoogleLoginButton = () => {
  const { setUserData } = useAuth();

  const responseGoogle = (response) => {
    // Handle the Google login response
    console.log(response);

    // Assuming you have a function to set user data in your AuthContext
    setUserData(response.profileObj);
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
