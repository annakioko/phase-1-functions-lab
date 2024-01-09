// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
  }
  
  
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feetInBlock = 264; 
    return blocks * feetInBlock;
  }
  
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    const feetInBlock = 264; 
    return distance * feetInBlock;
  }
  
 
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  