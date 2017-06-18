// задача 1

var student = {
	name: "Cat",
	lastname: "Whiskerson",
	age: "4",
	interests: ["eat", "sleep", "purr"]
};

function objPrint(object) {
	for (var key in object) {
		document.getElementById('out').innerHTML += "Characteristic " + key + " : " + object[key] + '<br>';
	};
};

objPrint(student);

// задача 3
var n;
function fibonacci(n){
	var fib = [1,1];
	for (var i = 2 ; i<= n; i++) {
		fib[i] = fib[i-1] + fib[i-2];
	};
	return fib.slice(0, n);
};
document.getElementById('out1').innerHTML += fibonacci(8);


// задача 4
function lastDigitToWord(digit)
{
    var lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));
    if (digit > 11 && digit < 15)
    {
        return 'Дней';
    }
    else
    {
        if (lastFigure == 1) return 'День';
        if (lastFigure > 1 && lastFigure < 5) return 'Дня';
        if (lastFigure == 0 || lastFigure >= 5) return 'Дней';
    }
}
// test
var days = [10, 13, 1, 25, 2, 5, 4, 344];
var result = '';
for (var i in days)
{
    result += days[i].toString() + ' - ' + lastDigitToWord(days[i]) + '\n';
}
document.getElementById('out2').innerHTML += result;