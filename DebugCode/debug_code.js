function performOperation(){
    let n1=parseInt(document.getElementById('input1').value);
    let n2=parseInt(document.getElementById('input2').value);
    if(!isNaN(n1) && !isNaN(n2)){
        let r=multiply(n1,n2);
        displayResult(r);
    }else{
        displayResult('Please enter valid numbers');
    }
    function multiply(a,b){
        debugger;
        return a*b;
    }
    function displayResult(r){
        const resultElement=document.getElementById('result');
        resultElement.textContent=`The result is: ${r}`;
    }
}