const rootDir = require("../util/path");
const fs = require("fs");
const path = require("path");
const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb) => {
	// reading JSON file after user sending data
	fs.readFile(p, (err, fileContent) => {
		// if JSON file donesn't exist, then there will be an missing file error
		// In that case, we will have an empty array where we will push user input i.e "this"
		// If no error occoured then, the exisiting JSON data will be pushed into array
		// if missing file error occours or if JSON file is empty then, pass an empty array
		if (err || !fileContent.length) {
			cb([]);
			// if no missing file error and if file is not empty, pass the file content as an array
		} else {
			// no error means JSON exists. So, converting JSON data into array and pushing exisitng data from JSON file into array
			cb(JSON.parse(fileContent));
		}
	});
};

// creating a Product class
module.exports = class Product {
	// constructor method which will run while creating new objects
	constructor(t) {
		// creates title key when constructor is called
		this.title = t;
	}

	// method to save the user input data which is turned into object and saved as an array
	save() {
		getProductsFromFile((products) => {
			// push user input data stored as object inside "this"
			// if JSON file is empty then, only user sent data is added to the array
			// if JSON file is not empty then, both data read from the file and user input data is pushed into array
			products.push(this);

			// after updating for all condition, writing data into the file
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	// return an array which has all the objects created
	// fetchAll contains file reading which is asynchronous
	// when we pass cb as function, it holds the data we want to pass. When data is read
	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
};

/* 
	explaination: 
	-------------

	Since Reading of file is asynchronous process.
		(we are using fs.readFile() method) 

	We can't read partial data and pass it to process, and expect it to work as complete data.
		(which we were doing previously) 

	To prevent it, we used callbacks function. 
		(introducing cb())

	Since callback functions are synchronous in nature, we will be able to execute it ony when it's scope's stack is completely executed. 
		(reading the JSON file and converting it into an arry in our case) 

	When it does reading completely, we will then execute the callback, whose argument can be now fully used and passed as a property to the templating files.
		(passing converted array read from JSON file which is argument to the cb function. 
		which we are passing to ejs as prods: products. product is coming as an argument of the cb(product). 
		where product is argument)
*/
