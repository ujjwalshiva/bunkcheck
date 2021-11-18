console.log("Initializing App...");

//Formula: [P x R x (1+R) ^N]/ [(1+R) ^ (N-1)]

function calculate() {

    let total=document.querySelector('#total').value;
    let attended=document.querySelector('#attended').value;
    let bunk=document.querySelector('#bunk').value;

    if (attended<=total) {
        let currentatt = (parseFloat((attended/total*100), 10)).toFixed(2);

        console.log(currentatt);
    
        let bunkatt = (parseFloat((attended/(total + bunk))*1000, 10).toFixed(2));

        console.log(bunkatt);

        document.querySelector('#final').innerHTML=`Current Attendance: ${currentatt} <br> You're attendance will drop to ${bunkatt}`;
    }

    else {
        document.querySelector('#final').innerHTML=`Total Classes > Attended Classes`;
    }
    

    //Old Formula Below
    //const interest = (amount * (interestrate * 0.01)) / months;
    //let payment = ((amount / months) + interest).toFixed(0);


    /*let amount=document.querySelector('#amount').value;
    let interestrate=document.querySelector('#interestrate').value;
    let months=document.querySelector('#months').value;

    if (amount=='' || interestrate==''|| months=='') {
        document.querySelector('#final').innerHTML=`<h4 style='color:#ef5350'>Enter Values</h4>`;
    }

    else {
        const interest = interestrate/1200;
    
        let top = Math.pow((1+interest),months);
        let bottom = top - 1;
        let ratio = top/bottom;
        let emi = (amount * interest * ratio).toFixed(0);

        document.querySelector('#final').innerHTML=`Your EMI is ${emi}`;      
    
        console.log(amount, interestrate, months);
    }*/

    
}
