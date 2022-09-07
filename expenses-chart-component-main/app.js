window.onload = function() {

let ok =fetch("data.json", {cache: "no-cache"}).then(response => response.json()).then( data => dataReady(data));


function dataReady(data){
    console.log(data[0].amount);
    for(let i=0; i<=6; i++){
        console.log(data[i].day);
        switch(data[i].day){
            case "mon":
                const pon = document.getElementsByClassName("pon")[0];
                pon.style.height = (data[i].amount)*3 + "px";
                break;
            case "tue":
                const wto = document.getElementsByClassName("wto")[0];
                wto.style.height = (data[i].amount)*3 + "px";
                break;
            case "wed":
                const sro = document.getElementsByClassName("sro")[0];
                console.log(sro)
                sro.style.height = (data[i].amount)*3 + "px";
                break;
            case "thu":
                const czw = document.getElementsByClassName("czw")[0];
                console.log(czw)
                czw.style.height = (data[i].amount)*3 + "px";
                break;
            case "fri":
                const pia = document.getElementsByClassName("pia")[0];
                console.log(pia)
                pia.style.height = (data[i].amount)*3 + "px";
                break;
            case "sat":
                const sob = document.getElementsByClassName("sob")[0];
                console.log(sob)
                sob.style.height = (data[i].amount)*3 + "px";
                break;
            case "sun":
                const ndz = document.getElementsByClassName("niedz")[0];
                console.log(ndz)
                ndz.style.height = (data[i].amount)*3 + "px";
                break;
            default:
                console.log("something went wrong");
                break;


    }
    
    }



}}