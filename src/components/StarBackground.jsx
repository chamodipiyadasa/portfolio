import { useEffect, useState } from "react";

// id size x y opacity animationduration

// id size x y delay animationduration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
     
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // Fixed: Use unique ID for each star
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    console.log('Stars generated:', newStars);
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4; // Fixed: Set a fixed number of meteors
    const newMeteors = [];
    
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i, // Fixed: Use unique ID for each star
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    console.log('Meteors generated:', newMeteors);
    setMeteors(newMeteors);
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="star animate-pulse-subtle absolute bg-white rounded-full" 
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%", // Fixed: Use percentage for responsive positioning
            top: star.y + "%",   // Fixed: Use percentage for responsive positioning
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }} 
        />
      ))}

 {meteors.map((meteor) => (
        <div 
          key={meteor.id} 
          className="meteor animate-meteor" 
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%", // Fixed: Use percentage for responsive positioning
            top: meteor.y + "%",   // Fixed: Use percentage for responsive positioning
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }} 
        />
      ))}

    </div>
  );
};