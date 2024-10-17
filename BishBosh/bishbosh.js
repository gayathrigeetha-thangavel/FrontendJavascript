
const button1 = document.querySelector('#button1');
button1.addEventListener('click', function(e) {

    e.preventDefault();

    const n = document.getElementById('loopnumber').value;
    const x = document.getElementById('bishnumber').value;
    const y = document.getElementById('boshnumber').value ;

    //debugging for if get the values from textbox
    console.log(n);
    console.log(x);
    console.log(y);
    console.log("got all the values");
    //console.log(e.target)
    document.getElementById('result').innerHTML = '';

    for(var i = 1; i<= n ; i++)
    {
        let resultText = '';
        if (i % x == 0 && i % y == 0) 
        {
            resultText = i+" BishBosh";
            console.log(i+" BishBosh");
        }
        
        else if (i % x == 0) 
        {
            resultText = i+" Bish";
            console.log( i+" Bish");
        }

        else if (i % y == 0) 
        {
            resultText = i+" Bosh";
            console.log(i+" Bosh");
        }

        else 
        {
            resultText = i;
            console.log(i+" Not divisible by given number");
        }

        document.getElementById('result').innerHTML += resultText + "<br>";
    }
    
    document.getElementById('loopnumber').value = '';
    document.getElementById('bishnumber').value = '';
    document.getElementById('boshnumber').value = '';
    
    document.getElementById('result').style.display = "block";
})

const button2 = document.querySelector('#button2');


const clearResult = (e) => {
    e.preventDefault();
    console.log("clear function called");
    var x = document.getElementById("result");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

button2.addEventListener('click', clearResult);