function currentDateTime (){
  var data = new Date();
  var year = data.getFullYear();
  var month = data.getMonth();
  var day = data.getDate();
  var hours = data.getHours();
  var minutes = data.getMinutes();
  var seconds = data.getSeconds();
  //return "date:"+year +"-"+ month +"-"+ day + " time:"+ hours+ ":"+minutes+":"+seconds
  return{ my_date: year+"-"+month+"-"+day, my_time: hours+":"+minutes+":"+seconds }
};

module.exports.currentDataTime = currentDateTime;
