let radioBtns = document.querySelectorAll('input[type="radio"]');
let tipParsent = 0;
let result = 0;
radioBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tipParsent =   parseFloat(this.dataset['amount']);
    })
})
document.querySelector('.calcBtn').addEventListener('click', () => {
   let amount = parseInt(document.getElementById('amount').value);
   let people =  parseInt(document.getElementById('people').value);
    result = (amount * tipParsent) / people;
    if(result > 0) {
        document.querySelector('.result').style.visibility = 'visible';
        document.querySelector('.resultAmount').innerHTML = result;
    }



   

})
document.querySelector('.resetBtn').addEventListener('click', () => {
    document.getElementById('amount').value = '';
    document.getElementById('people').value = '';
    document.querySelector('.result').style.visibility = 'hidden';
})