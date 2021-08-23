let d = new Date()
var hour = d.getHour()

$("#weekly-schedule").dayScheduleSelector({
//options here
startTime: '09:00',
endTime: '17:00',
setInterval: 30
});

console.log("this is working");
