// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */



var maleCount = function(array) {
    return array.filter(function(customer) {
        return customer.gender === 'male';
    }).length;
};


var femaleCount = function(array) {
   return array.reduce(function(count, customer) {
    return customer.gender === 'female' ? count + 1 : count;
   }, 0);
};


var oldestCustomer = function(array) {  //use reduce method with no seed
    return array.reduce(function(oldest, customer) {
        if(customer.age > oldest.age) {
            return customer;
        } else {
            return oldest;
        }
    }, array[0]).name;
}

var youngestCustomer = function(array) {
    return array.reduce(function(youngest, customer) {
        if(customer.age < youngest.age) {
            return customer;
        } else {
            return youngest;
        }
    }, array[0]).name;
}

var averageBalance = function(array) {
    //check if array is empty
    if (array.length === 0) return 0;

    //calculate the total balance using reduce
    var totalBalance = array.reduce(function(acc, customer) {
        //remove the dollar sign and commas, the convert to a floating-point number
        var balance = parseFloat(customer.balance.replace(/[$,]/g, ''))
    return acc + balance;
    }, 0);

    //calculate and return average balance
    return totalBalance / array.length;
}


var firstLetterCount = function(array, letter) {
    //convert the letter to lowercase for case sensitive comparison
    var lowerCaseLetter = letter.toLowerCase();

    //filter the array to find names that start with the given letter 
    var count = array.filter(function(customer) {
        //convert the first letter of the name to lowercase and compare
        return customer.name[0].toLowerCase() === lowerCaseLetter;
    }).length;

    //return the count
    return count;
}

var friendFirstLetterCount = function(array, customer, letter) {
    //convert the letter to lowercase for case sensitive comparison
    var lowerCaseLetter = letter.toLowerCase();
    
    var friends = [];

    //iterate through the array to find the customer
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            //get the friends of the found customer
            friends = array[i].friends;
            break; //exit the loop once the customer is found
        }
    }

    //if no customer was found, return 0
    if (friends.length === 0) return 0;

    //count friends names that start with the given letter
    var count = friends.filter(function(friend) {
        return friend.name[0].toLowerCase() === lowerCaseLetter;
    }).length;

    //return the count
    return count;
};

var friendsCount = function(array, name) {
    var result = [];

    //iterte through each customer in the array
    for(var i = 0; i < array.length; i++) {
        var customer = array[i];
        var friends = customer.friends;

        //check if any of the friends names match the given name
        for(var j = 0; j < friends.length; j++) {
            if(friends[j].name === name) {
                //add the customers name to the result array
                result.push(customer.name);
                //stop checking this customer once we find a match
                break;
            }
        }
    }
    return result;
}

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
