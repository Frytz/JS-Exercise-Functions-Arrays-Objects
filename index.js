// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
 */
function addNumbers(a, b) {
    
    return a + b;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
 */
function makePersonObject(iD, aName, eMail) {
    return {
        id: iD,
        name: aName,
        email: eMail
    };
}


/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
 */

function getName(aPerson) {

    return `hello, my name is ${aPerson.name}`;

}


/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
 */
//                       arugement
 function makeSmartPerson(aName) {

     return {
    //     // propery:arguement
         name: aName,
    //   //method        
        sum: (a, b) => a + b, 
    //     sum: function(a, b) {
    //         return a + b;
        speak: () => `Hello, my name is ${aName}`
    //     },
    //     speak: function() {

    //         return ` Hello, my name is ${aName}`;
    //     }
     }

}



/*
// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/
/**
 * ### Example Array Challenge:
 * 
 * @instructions
 * get3rdCar() should return the string `The car is a Land Rover Defender Ice Edition`
 * 
 *
 * NOTE: This example has been completed for you.
 **/
 function get3rdCar(inventory) {
    console.log(inventory)
    const the3rd = inventory.find((item, index) => {
        return index === 2 // we use 2 because index is zero-based.
    })
    return `The car is a ${the3rd.car_make} ${the3rd.car_model}`
}

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
 */                 // arguement array/index id
function getCarInfoByIndex(inventory, id) {
    // car var defined with the car and id in the arguements
    const car = inventory[id];
    //console.log(car)
    return `This is a ${car.car_make} ${car.car_model}`;

}

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
 */
function getLastCarInfo(inven) {
    //console.log(inven.length)
   //  delclare var | conditional | increment = i +1
//         index starts at zero | length is 50| 
   for (let i = 0; i < inven.length; i++) {
    if (inven[i].id == inven.length) {
            let car = inven[i];
            //console.log(car)
            return `This is a ${car.car_make} ${car.car_model}`
        }
    }
}




/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
 */
function getCarInfoById(inven, idNum) {
    //console.log(idNum)
    let car = inven;
    for (let i = 0; i < inven.length; i++) {
        // when i equals idNum condition if fullfiiled
        if (inven[i].id === idNum) {
            car = inven[i]
        //console.log(car)
        }
    }
    return `This is a ${car.car_make} ${car.car_model}`
}

/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
 */
function sortCarInventory(inven) {
//    return inven.sort (function (a , b) {
//        var invenA = a.car_model;
//        var invenB = b.car_model;

//        if ( invenA < invenB) {return -1;}
//     else if (invenA > invenB) {
//         return 1;}
//         else {return 0}
//            });

    return inven.sort((invenA, invenB) => (invenA.car_model > invenB.car_model)? 1: -1); 
// ? value1: value2 creates an if (matches) else (do this)
}
/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
 */
function getModelYears(carYear) {
    const yearsArray = [];
    for (let i = 0; i < carYear.length; i++) {
        let currentCarYear = carYear[i].car_year;
        yearsArray.push(currentCarYear);
    }
    return yearsArray;
}
/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
 */
function getOlderCars(inventory, maxYear) {
    //console.log(maxYear)
    let result = []
    //new array for indexing car years
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year <= maxYear) {
            result.push(inventory[i])
        //pushes the result for each conditional until the year reaches maxYear
        }
    }
    //console.log (result)
    return result
}

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
 */
function getGermanCars(inventory) {
    let result = []
    const makes = ['Audi', 'Mercedes-Benz', 'Volkswagen', 'BMW'];
    for (let i = 0; i < inventory.length; i++) {
        if (makes.includes(inventory[i].car_make)) {
            result.push(inventory[i])
        // pushes all results that matches the strings in var makes
        }
    }
    //console.log(result)
    return result
}

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
 *    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
 */
const sum = (a, b) => a + b;
const addFive = (a) => a + 5;
const argTimesTwo = (a) => a * 2;

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
 */
function carMaker(odometer) {
    return {
        odometer,
        drive(distance) {
            this.odometer += distance
            //console.log(odometer)
            //console.log(distance)
            return this.odometer
        }
    }
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
    // IGNORE: Test/Env Detected
    // For Node/Non-browser test env
    module.exports = module.exports || {}
    if (addNumbers) { module.exports.addNumbers = addNumbers }
    if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
    if (getName) { module.exports.getName = getName }
    if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
    if (carMaker) { module.exports.carMaker = carMaker }
    if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
    if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
    if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
    if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
    if (getModelYears) { module.exports.getModelYears = getModelYears }
    if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
    if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
    if (sum) { module.exports.sum = sum }
    if (addFive) { module.exports.addFive = addFive }
    if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}