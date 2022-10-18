let date = new Date();
let dayArray = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekend = ["Sunday","Saturday"]
// console.log(dayArray[date.getDay()])
weekend.forEach((ele)=>{
  if(ele === dayArray[date.getDay()]){
      alert("Weekend")
    }else{
        alert("Weekday")
  }
})