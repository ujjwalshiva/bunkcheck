console.log("Initializing App...");

document.addEventListener("contextmenu", function(event){
    event.preventDefault();    
}, false);

function calculate() {

    let total=parseInt(document.querySelector('#total').value);
    let attended=parseInt(document.querySelector('#attended').value);
    let bunk=parseInt(document.querySelector('#bunk').value);

    if (attended<=total) {
        let currentatt = (parseFloat((attended/total*100), 10)).toFixed(2);

        console.log(currentatt);

        bunktot = total + bunk;
    
        let bunkatt = (parseFloat(((attended/bunktot)*100), 10).toFixed(2));

        let nobunkatt = (parseFloat(((attended+bunk)/bunktot)*100, 10).toFixed(2));
        
        console.log(bunkatt);

        console.log(nobunkatt);

        document.querySelector('#final').innerHTML=`Current Attendance: ${currentatt} <br> If you bunk, then value drops to <span style="color:#FA5F55">${bunkatt}</span> <br> Else, value rises to <span style="color:#69F0AE">${nobunkatt}</span>`;
    }

    else {
        document.querySelector('#final').innerHTML=`Total Classes > Attended Classes`;
    }
    
}
