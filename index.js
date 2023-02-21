// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(array){
   const x = array.find((y)=>y.result === "W");
   if( x === undefined){
   return x;}
   else{
   return  x.year;}
}