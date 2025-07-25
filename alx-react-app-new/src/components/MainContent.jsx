import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
      <UserProfile name="Ada Lovelace" age={36} bio="First computer programmer." />
      <UserProfile name="Grace Hopper" age={85} bio="Pioneer of computer programming." />
      <UserProfile name="Alan Turing" age={41} bio="Father of theoretical computer science." />
    </main>
  );
};

export default MainContent;
