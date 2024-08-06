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

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

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
