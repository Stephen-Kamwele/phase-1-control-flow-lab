function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
 
  if (distanceInFeet <= 400){
    return "This one is on me!"
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
    return "I will gladly take your thirty bucks."
  } else if (distanceInFeet > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return cityName === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(finalMessage){
  // Write your code here!
  switch (finalMessage) {
    case ("generous") :
      return "Thank you so much."
      break;
      case ("not as generous") :
      return "Thank you."
      break;
      default :
      return ("Bye.")
  }
}