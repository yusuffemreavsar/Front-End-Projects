const newDate="1 October 2022";
const daysE1=document.getElementById('days')
const hoursE1=document.getElementById('hours')
const minsE1=document.getElementById('mins')
const secondsE1=document.getElementById('seconds')

function countDown(){
    const newIphonedate=new Date(newDate);
    const currentDate=new Date();
    const sec=(newIphonedate-currentDate)/1000;
    const days=Math.floor(sec/3600/24);  
    const hours=Math.floor(sec/3600) % 24;  
    const min=Math.floor(sec/60) % 60;
    const seconds=Math.floor(sec)%60;
    daysE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minsE1.innerHTML=min;
    secondsE1.innerHTML=seconds;
    
}
countDown();
setInterval(countDown,1000)