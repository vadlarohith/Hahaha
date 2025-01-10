// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [text, setText] = useState("Hey Hai...");
//   const [typing, setTyping] = useState(false);

//   const texts = ["Hey Hai...", "Seeing you in a Saree, especially in a Green Saree💚💚💚", "It's just a WOWWWwwwwwwwwww", "I Like it💚", "Actually I Loved it💚💚💚", "Your green saree is stunning, but it’s your smile that makes the color truly come alive."
// ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (typing) {
//       let currentText = texts[currentIndex];
//       let i = 0;
//       let typingInterval = setInterval(() => {
//         setText((prevText) => currentText.substring(0, i));
//         i++;
//         if (i > currentText.length) {
//           clearInterval(typingInterval);
//         }
//       }, 100);
//     }
//   }, [typing, currentIndex]);

//   const handleClick = () => {
//     if (text === texts[currentIndex]) {
//       setTyping(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         setTyping(true);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="section">
//         <h1>{text}</h1>
//         <button className="change-text-button" onClick={handleClick}>
//           Change Text
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App1.css';

function App() {
  const [text, setText] = useState("Hey Hai...");
  const [sliding, setSliding] = useState(false);

  const texts = [
    "Hey Hai...", 
    "Seeing you in a Saree, especially in a Green Saree💚💚💚", 
    "It's just a WOWWWwwwwwwwwww", 
    "I Like it💚", 
    "Actually I Loved it💚💚💚", 
    "Oka pickup line gurthocchindhi em anukoku😛", 
    "Your green saree is stunning, but it’s your smile that makes the color truly come alive.", 
    "Hahaha😛😛", 
    "Okay Bye Bye👋👋👋 Take Care"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    if (currentIndex === texts.length - 1) return; // Don't do anything if it's the last text
    
    setSliding(true);
    setTimeout(() => {
      setText(texts[(currentIndex + 1) % texts.length]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setSliding(false);
    }, 500);
  };

  return (
    <div className="App">
      <div className="section">
        <h1 className={sliding ? 'slide' : ''}>{text}</h1>
        {currentIndex < texts.length - 1 && (
          <button className="change-text-button" onClick={handleClick}>
            Change Text
          </button>
        )}
      </div>
      
    </div>
  );
}

export default App;

