
const validPin = 1234
// add money features
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    // every form value access
    const bank = document.getElementById('bank').value ;

    const accountNumber = document.getElementById('account-number').value;

    const amount = parseInt(document.getElementById('add-amount').value);

    const pin = parseInt(document.getElementById('add-pin').value);

   const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length<11){
        alert('please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert("please provide valid pin number")
        return;
    }

   const totalNewAvailableBalance = amount + availableBalance;

   document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})

// cashout money feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()

    const amountW = parseInt(document.getElementById('withdraw-amount').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    const totalNewAvailableBalance = availableBalance - amountW;
   
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
})


// toggling feature
document.getElementById('add-btn').addEventListener('click',function(){
    document.getElementById('Cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})

document.getElementById('cashout-btn').addEventListener('click',function(){
      document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('Cash-out-parent').style.display = 'block';
})