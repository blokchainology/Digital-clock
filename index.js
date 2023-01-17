setInterval(function (){
    const clock = document.querySelector(".display");
    let time = new Date() ;
    let secend = time.getSeconds() ;
    let minit = time.getMinutes() ;
    let hours = time.getHours() ;
    let day = "AM";

    if(hours > 12){
        day = "PM";
        hours = hours - 12 ;
    }

    if(secend < 10){
        secend = "0" + secend ;
    }

    if(minit < 10 ){
        minit = "0" + minit ;
    }

    if(hours < 10 ){
        hours = "0" + hours ;
    }

    clock.textContent = hours + ":" +   minit + ":" + secend + " " + day;
})

