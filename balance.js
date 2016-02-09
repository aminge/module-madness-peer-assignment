var randomNumber = require('./random');
var money = require('./money');

var randomMoney = function(min, max){
    return money(randomNumber(min, max));
};

var printBalance = function(){
    return 'Account balance: \n';
};

exports.randomMoney = randomMoney;
exports.printBalance = printBalance;