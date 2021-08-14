import Conveter from "./converter";
class Utility{
    isPM (time){
    let hours = time.split(":")[0];
    if (hours >= 12) {
        return "PM";
    } else {
        return "AM";
    }
};
 getWindSpeed (systemUsed, windInMph){
    return  systemUsed == "metric" ? windInMph : Conveter.mpsToMph(windInMph);  
 }
 

 getVisibility(systemUsed, visibilityInKm){
    return   systemUsed == "metric"
        ? (visibilityInKm / 1000).toPrecision(2)
        : kmToM(visibilityInKm / 1000);
 }

 getTime (systemUsed, currentTime, timezone){
     return systemUsed == "metric"
    ? `${parseInt(convertTime(currentTime, timezone)[0].split(":")[0])}:${
        Conveter.convertTime(currentTime, timezone)[0].split(":")[1]
      }`
    : Conveter.timeToAMPM(convertTime(currentTime, timezone)[0]);
 }


 getAMPM (systemUsed, currentTime, timezone){
     return systemUsed == "imperial" ? this.isPM(Conveter.convertTime(currentTime, timezone)[0]) : "";

 }
}

  
  export default Utility;