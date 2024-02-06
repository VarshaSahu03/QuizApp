import React, { useState } from 'react';
import QuizHeader from './components/QuizHeader';
import QuizArea from './components/QuizArea';
import AuthenticationModal from './components/AuthenticationModal'; 

const App = () => {
  const [blur, setBlur] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  return (
    <div>
      <QuizHeader />
      <AuthenticationModal blur={blur} setBlur={setBlur} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <QuizArea/>
    </div>
  )
}

export default App;
