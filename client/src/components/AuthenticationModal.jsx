import React, { useState, useEffect } from 'react';
import './auth.css';

const AuthenticationModal = ({ setBlur, blur, setIsLoggedIn, isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const showModalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(showModalTimeout);
  }, []);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setBlur(true);
  };

  const handleToggleAuthType = () => {
    setIsRegistering(!isRegistering);
  };

  const handleAuthentication = async () => {
    try {
      const apiUrl = isRegistering ? 'http://localhost:8000/api/user/register' : 'http://localhost:8000/api/user/login';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle successful authentication (e.g., update state, close modal)
        setIsLoggedIn(true); // Update login status
      } else {
        const error = await response.json();
        console.error(error);
        // Handle authentication error (e.g., show error message)
      }
    } catch (error) {
      console.error(error);
      // Handle other errors
    }
  };

  // Close modal if logged in
  useEffect(() => {
    if (isLoggedIn) {
      setShowModal(false);
      setBlur(false); // Reset blur
    }
  }, [isLoggedIn]);

  return (
    <div style={{ textAlign: 'center' }}>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleToggleModal}>
              X
            </span>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <label>
              Email ID:&nbsp; 
              <input
                type="text"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: '5px', border: '2px solid black', padding: '0.3rem' }}
              />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              Password:&nbsp;
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginTop: '3px', borderRadius: '5px', border: '2px solid black', padding: '0.3rem' }}
              />
            </label>

            <br />
            <br />
            <button
              onClick={handleAuthentication}
              style={{ padding: '3px 10px', backgroundColor: 'white', borderRadius: '5px', fontWeight: 'bold' }}
            >
              {isRegistering ? 'Register' : 'Login'}
            </button>
            <h3>Or</h3>
            <button
              style={{
                color: 'black',
                border: '2px solid black',
                padding: '0.5rem',
                borderRadius: '5px',
                background: 'white',
                fontWeight: 'bold',
              }}
            >
              <a>Login with Google</a>
            </button>
            <p onClick={handleToggleAuthType}>
              {isRegistering ? 'Already have an account? Login here.' : 'Don\'t have an account? Register here.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationModal;
