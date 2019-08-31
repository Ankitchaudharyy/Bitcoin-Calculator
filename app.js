
var btcUsdBought, btcAmount, btcUsdToday, btsUsdTodayValue, btcUsdBoughtValue, btcAmountValue;

btcUsdBought =  document.querySelector('.price__input--bought');
btsUsdToday = document.querySelector('.price__input--now');
btcAmount = document.querySelector('.investment__btc');

// EVENTLISTENERS
var setEventListeners = function() {

    var eventOK = document.querySelector('.investment__btn').addEventListener('click', controller); 

    var eventOK2 = document.addEventListener('keypress', function(event) {

        if ( event.keycode === 13 || event.which === 13) {
            controller();
        }
    });

};

// INITIALIZE
var init = function() {

    btcUsdBought.focus();
    setEventListeners();

};

// USER INPUT
var input = function() {

    return {
        btcUsdBoughtValue: btcUsdBought.value,
        btcUsdTodayValue: btsUsdToday.value,
        btcAmountValue: btcAmount.value
    };
};

// CALCULATING BITCOIN VALUE
var calculate = function(obj) {

    var invested, current, profit, growth;

    invested = obj.btcUsdBoughtValue * obj.btcAmountValue;
    current = obj.btcUsdTodayValue * obj.btcAmountValue;
    profit = current - invested;
    growth =  Math.round(( profit / invested ) * 100);

    return {
        profitValue: profit,
        growthValue: growth
    };
};

// DISPLAYING RESULT
var UIdisplay = function(result) {

    var message = "";
    var resultField = document.querySelector('.result');

    if (result.profitValue > 0) {
        message = `Great! You made a profit of $${result.profitValue} (${result.growthValue}%).`;
        resultField.style.color = 'green';
    } 
    else if (result.profitValue < 0) {
        message = `Oh no! You're at a loss of $${result.profitValue} (${result.growthValue}%).`;
        resultField.style.color = 'red';
    } 
    else {
        message = "You're breaking even!";
    }
  
  resultField.textContent = message;
};

var controller = function() {

    var inputFields = input();

    var result = calculate(inputFields);

    UIdisplay(result);

    init();
    
};

// INITIALIZATION 
init();