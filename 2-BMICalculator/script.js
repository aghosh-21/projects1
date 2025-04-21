function calbmi() {
    const cm=Number(document.getElementById('height').value);
    
    const kg=Number(document.getElementById('weight').value);
    
    if(!cm || !kg || cm<=1|| kg<=1){
        document.getElementById('results').innerText=`please enter right data`; 
        return;
    }
    const result=(kg*10000)/(cm*cm);
    
    document.getElementById('results').innerText=`the result is : ${result.toFixed(2)}`;}// toFixed return string
    
    document.querySelector('button').addEventListener('click',function (e) {
        e.preventDefault();//server ae patabe na
        calbmi();
    });//after attaching to EventListener it submit form to server and reload;
    