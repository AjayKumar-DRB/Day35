// 1. Find all the information about each products
db.collection('products').find({}).pretty()

// 2. Find the product price which are between 400 to 800
db.collection('products').find({ "product_price": { $gte: 400, $lte: 800 } }).pretty()

// 3. Find the product price which are not between 400 to 600
db.collection('products').find({ "product_price": { $not: { $gte: 400, $lte: 600 } } }).pretty()

// 4. List the four products which are greater than 500 in price
db.collection('products').find({ "product_price": { $gt: 500 } }).limit(4).pretty()

// 5. Find the product name and product material of each products
db.collection('products').find({}, { "product_name": 1, "product_material": 1 }).pretty()

// 6. Find the product with a row id of 10
db.collection('products').find({ "id": 10 }).pretty()

// 7. Find only the product name and product material
db.collection('products').find({}, { "product_name": 1, "product_material": 1, "id": 0 }).pretty()

// 8. Find all products which contain the value of "soft" in product material
db.collection('products').find({ "product_material": /soft/i }).pretty()

// 9. Find products which contain product color "indigo" and product price 492.00
db.collection('products').find({ "product_color": "indigo", "product_price": 492.00 }).pretty()

// 10. Delete the products which product price value are same
db.collection('products').deleteMany({ "product_price": { $eq: "same" } }).pretty()