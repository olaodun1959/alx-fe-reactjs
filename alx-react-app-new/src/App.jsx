import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
     
     <MainContent />
      <div className="App">
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
    <Counter/>
      <Footer />
    </div>
  );
}

export default App;

