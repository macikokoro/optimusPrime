// Checking for primeness
function optimusPrime(n) {
    isPrime = true;
    var isPrime = true;
    for (var i = 2; i < n && isPrime; i++) {
        if (n % i === 0) {
            isPrime = false;
        } else {
            isPrime = true;
        }
    }
    if (isPrime) {
        console.log("The migthy All Spark says is prime!");
    } else {
        console.log("Trust the cube! this number is not a prime.");
    }
}

var candidate = prompt("I Optimus Prime request a number!")

optimusPrime(candidate);
