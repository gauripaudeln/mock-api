
const categories = [
  {"CategoryID": 1, "CategoryName": "Beverages"},
  {"CategoryID": 2, "CategoryName": "Condiments"},
  {"CategoryID": 3, "CategoryName": "Confections"},
  {"CategoryID": 4, "CategoryName": "Dairy Products"},
  {"CategoryID": 5, "CategoryName": "Grains/Cereals"},
  {"CategoryID": 6, "CategoryName": "Meat/Poultry"},
  {"CategoryID": 7, "CategoryName": "Produce"},
  {"CategoryID": 8, "CategoryName": "Seafood"}
];

const products  = [
  {"ProductID": 1, "ProductName": "Tea", "CategoryID": 1, "QuantityPerUnit": "10 boxes x 20 bags", "UnitPrice": 18.0, "UnitsInStock": 39, "Discontinued": false },
  {"ProductID": 7, "ProductName": "Dried Pears", "CategoryID": 1, "QuantityPerUnit": "12 - 1 lb pkgs.", "UnitPrice": 30.0, "UnitsInStock": 15, "Discontinued": false },
  {"ProductID": 8, "ProductName": "Cranberry Sauce", "CategoryID": 2, "QuantityPerUnit": "12 - 12 oz jars", "UnitPrice": 40.0, "UnitsInStock": 6, "Discontinued": false },
  {"ProductID": 9, "ProductName": "Mishi Kobe Niku", "CategoryID": 6, "QuantityPerUnit": "18 - 500 g pkgs.", "UnitPrice": 97.0, "UnitsInStock": 29, "Discontinued": true },
  {"ProductID": 14, "ProductName": "Tofu", "CategoryID": 7, "QuantityPerUnit": "40 - 100 g pkgs.", "UnitPrice": 23.25, "UnitsInStock": 35, "Discontinued": false },
  {"ProductID": 17, "ProductName": "Alice Mutton", "CategoryID": 6, "QuantityPerUnit": "20 - 1 kg tins", "UnitPrice": 39.0, "UnitsInStock": 0, "Discontinued": false},
  {"ProductID": 19, "ProductName": "Teatime Biscuits", "CategoryID": 3, "QuantityPerUnit": "10 boxes x 12 pieces", "UnitPrice": 9.2, "UnitsInStock": 25, "Discontinued": false },
  {"ProductID": 40, "ProductName": "Boston Crab Meat", "CategoryID": 8, "QuantityPerUnit": "24 - 4 oz tins", "UnitPrice": 18.4, "UnitsInStock": 123, "Discontinued": false },
  {"ProductID": 43, "ProductName": "Coffee", "CategoryID": 1, "QuantityPerUnit": "16 - 500 g tins", "UnitPrice": 46.0, "UnitsInStock": 17, "Discontinued": false },
  {"ProductID": 48, "ProductName": "Chocolate", "CategoryID": 3, "QuantityPerUnit": "10 pkgs.", "UnitPrice": 12.75, "UnitsInStock": 15, "Discontinued": false },
  {"ProductID": 56, "ProductName": "Gnocchi di nonna Alice", "CategoryID": 5, "QuantityPerUnit": "24 - 250 g pkgs.", "UnitPrice": 38.0, "UnitsInStock": 21, "Discontinued": true },
  {"ProductID": 57, "ProductName": "Ravioli Angelo", "CategoryID": 5, "QuantityPerUnit": "24 - 250 g pkgs.", "UnitPrice": 19.5, "UnitsInStock": 36, "Discontinued": false },
  {"ProductID": 60, "ProductName": "Camembert Pierrot", "CategoryID": 4, "QuantityPerUnit": "15 - 300 g rounds", "UnitPrice": 34.0, "UnitsInStock": 19, "Discontinued": true },
  {"ProductID": 65, "ProductName": "Hot Pepper Sauce", "CategoryID": 2, "QuantityPerUnit": "32 - 8 oz bottles", "UnitPrice": 21.05, "UnitsInStock": 76, "Discontinued": false },
  {"ProductID": 72, "ProductName": "Mozzarella di Giovanni", "CategoryID": 4, "QuantityPerUnit": "24 - 200 g pkgs.", "UnitPrice": 34.8, "UnitsInStock": 14, "Discontinued": false},
  {"ProductID": 73,"ProductName": "Röd Kaviar", "CategoryID": 8, "QuantityPerUnit": "24 - 150 g jars", "UnitPrice": 15.0, "UnitsInStock": 101, "Discontinued": true }
];


const clients  = [
  {"Name": "Google", "Year": 2015, "ContractAmount": 1500000},
  {"Name": "Google", "Year": 2016, "ContractAmount": 2000000},
  {"Name": "Google", "Year": 2019, "ContractAmount": 50000000},
  
  {"Name": "Microsoft", "Year": 2015, "ContractAmount": 2000000},
  {"Name": "Microsoft", "Year": 2016, "ContractAmount": 2234444},
  {"Name": "Microsoft", "Year": 2020, "ContractAmount": 50000000},

  {"Name": "Amazon", "Year": 2015, "ContractAmount": 1000000},
  {"Name": "Amazon", "Year": 2016, "ContractAmount": 2234444},
  {"Name": "Amazon", "Year": 2020, "ContractAmount": 50000000},


  {"Name": "Facebook", "Year": 2015, "ContractAmount": 1000000},
  {"Name": "Facebook", "Year": 2016, "ContractAmount": 2234444},
  {"Name": "Facebook", "Year": 2020, "ContractAmount": 50000000},

  {"Name": "SpaceX", "Year": 2015, "ContractAmount": 6000000},
  {"Name": "SpaceX", "Year": 2016, "ContractAmount": 70000000},
  {"Name": "SpaceX", "Year": 2020, "ContractAmount": 80000000},

  {"Name": "Oracle", "Year": 2015, "ContractAmount": 10000},
  {"Name": "Oracle", "Year": 2016, "ContractAmount": 50000},
  {"Name": "Oracle", "Year": 2020, "ContractAmount": 40000},

  {"Name": "Apple", "Year": 2015, "ContractAmount": 4000000},
  {"Name": "Apple", "Year": 2016, "ContractAmount": 6000000},
  {"Name": "Apple", "Year": 2020, "ContractAmount": 8000000},


  {"Name": "Dell", "Year": 2015, "ContractAmount": 30000},
  {"Name": "Dell", "Year": 2016, "ContractAmount": 85000},
  {"Name": "Dell", "Year": 2020, "ContractAmount": 500000}
  
];



var express = require('express');

const server = express();
var cors = require('cors');

server.use(cors());
server.get('/',(req,res)=> {

  res.send("Express server running...");
}); 
server.get('/products',(req,res)=> {

  res.send(products);
}); 

server.get('/categories',(req,res)=> {
  res.send(categories);
}); 

server.get('/clients',(req,res)=> {
  res.send(clients);
}); 

server.listen(8080,()=>{
  console.log("Server is running.. "); 
} );