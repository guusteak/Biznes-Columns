window.onload = function() {

for(let i=1; i<=7; i++){
    let col = () =>{
        argumentpassed = i;
        validate(argumentpassed);
    }
    col(i);
}

function validate (argumentpassed) {
    console.log(argumentpassed);
    switch(argumentpassed){
        case 1:
            const pon = document.getElementsByClassName("pon")[0];
            console.log(pon)
            pon.style.height = "40px"
            break;
        case 2:
            const wto = document.getElementsByClassName("wto")[0];
            console.log(wto)
            wto.style.height = "50px"
            break;
        case 3:
            const sro = document.getElementsByClassName("sro")[0];
            console.log(sro)
            sro.style.height = "60px"
            break;
        case 4:
            const czw = document.getElementsByClassName("czw")[0];
            console.log(czw)
            czw.style.height = "70px"
            break;
        case 5:
            const pia = document.getElementsByClassName("pia")[0];
            console.log(pia)
            pia.style.height = "80px"
            break;
        case 6:
            const sob = document.getElementsByClassName("sob")[0];
            console.log(sob)
            sob.style.height = "90px"
            break;
        case 7:
            const ndz = document.getElementsByClassName("niedz")[0];
            console.log(ndz)
            ndz.style.height = "100px"
            break;
        default:
            console.log("something went wrong");
            break;
            
    }

}}