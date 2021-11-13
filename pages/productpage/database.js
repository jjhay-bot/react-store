const DUMMY_DATA = [
  {
    "id": 11551,
    "name": "555 Sardines in Tomato Sauce with Chili Can - 155g",
    "barcode": 748485200026,
    "price": 15.26,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11552,
    "name": "555 Sardines in Tomato Sauce Can - 155g",
    "barcode": 748485200019,
    "price": 15.47,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11553,
    "name": "555 Tuna Adobo Can - 155g",
    "barcode": 748485700014,
    "price": 21.4,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11554,
    "name": "555 Tuna Afritada Can - 155g",
    "barcode": 748485700021,
    "price": 21.13,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11555,
    "name": "555 Tuna Caldereta Can - 155g",
    "barcode": 748485700038,
    "price": 21.72,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11556,
    "name": "555 Tuna Flakes Oil Can - 155g",
    "barcode": 748485700083,
    "price": 24.09,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11557,
    "name": "555 Tuna Hot and Spicy Can - 155g",
    "barcode": 748485700052,
    "price": 23.95,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11558,
    "name": "555 Tuna Mechado Can - 155g",
    "barcode": 748485700045,
    "price": 21.89,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 11559,
    "name": "Absolute Distilled Water Bottle - 6000ml",
    "barcode": 4800014700004,
    "price": 71.45,
    "brand": "Absolute",
    "category": "Water"
  },
  {
    "id": 11561,
    "name": "Ajinomoto Crispy Fry Original Sachet - 30g",
    "barcode": 4801958460009,
    "price": 7.49,
    "brand": "Ajinomoto",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11562,
    "name": "Ajinomoto Crispy Fry Original Sachet - 62g",
    "barcode": 4801958390108,
    "price": 11.45,
    "brand": "Ajinomoto",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11564,
    "name": "Alaska Condensada Can - 168ml",
    "barcode": 4800575130166,
    "price": 24.89,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11565,
    "name": "Alaska Condensada Can - 300ml",
    "barcode": 4800575130302,
    "price": 39.19,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11566,
    "name": "Alaska Evaporada Can - 140ml",
    "barcode": 4800575140158,
    "price": 9.56,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11567,
    "name": "Alaska Evaporada Can - 370ml",
    "barcode": 4800575140370,
    "price": 23.28,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11568,
    "name": "Alaska Fortified Powdered Milk Drink Pouch - 165g",
    "barcode": 4800575141636,
    "price": 39.4,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11569,
    "name": "Alaska Fortified Powdered Milk Drink Tie - 6x33g",
    "barcode": 4800575142633,
    "price": 42.1,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11570,
    "name": "Alaska Fortified Powdered Milk Drink Pouch - 330g",
    "barcode": 4800575141612,
    "price": 75.33,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11571,
    "name": "Alaska Sweetened Condensed Filled Milk Can - 300ml",
    "barcode": 4800575120303,
    "price": 52.06,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11572,
    "name": "Angel Evaporada Liquid Creamer Can - 410ml",
    "barcode": 748485400716,
    "price": 18.99,
    "brand": "Angel",
    "category": "Milk"
  },
  {
    "id": 11573,
    "name": "Argentina Beef Loaf Can - 150g",
    "barcode": 748485800738,
    "price": 15.34,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11574,
    "name": "Argentina Corned Beef Can - 100g",
    "barcode": 748485801803,
    "price": 20.38,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11575,
    "name": "Argentina Corned Beef Can - 150g",
    "barcode": 748485800431,
    "price": 29.04,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11576,
    "name": "Argentina Corned Beef Can - 175g",
    "barcode": 748485800011,
    "price": 33.5,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11577,
    "name": "Argentina Corned Beef Can - 260g",
    "barcode": 748485800035,
    "price": 49.23,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11579,
    "name": "Argentina Meatloaf Can - 150g",
    "barcode": 748485801490,
    "price": 16.49,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11580,
    "name": "Argentina Meatloaf Can - 170g",
    "barcode": 748485800233,
    "price": 17.68,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11581,
    "name": "Argentina Meatloaf Can - 250g",
    "barcode": 748485800448,
    "price": 26.91,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 11582,
    "name": "Ariel Detergent Powder Downy Parfum Tie - 6x66g",
    "barcode": 4902430583183,
    "price": 60.67,
    "brand": "Ariel",
    "category": "Laundry Products"
  },
  {
    "id": 11583,
    "name": "Ariel Detergent Powder Sunrise Fresh Tie- 6x70g",
    "barcode": 4902430583169,
    "price": 60.8,
    "brand": "Ariel",
    "category": "Laundry Products"
  },
  {
    "id": 11584,
    "name": "Baygon Mosquito Coil Scented -12Sx150g Pack",
    "barcode": 4801234134426,
    "price": 14.75,
    "brand": "Baygon",
    "category": "Cleaning Products"
  },
  {
    "id": 11585,
    "name": "Bear Brand Milk Powdered Choco Swak Pack - 29g",
    "barcode": 4800361409117,
    "price": 7.44,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11586,
    "name": "Bear Brand Milk Powdered Iron Sakto sa 3 Baso Pack - 99g",
    "barcode": 4800361397605,
    "price": 31.11,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11587,
    "name": "Bear Brand Milk Powdered Iron Pack - 150g",
    "barcode": 4800361381086,
    "price": 47.24,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11588,
    "name": "Bear Brand Milk Powdered Iron Pack - 320g",
    "barcode": 4800361410892,
    "price": 99.91,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11589,
    "name": "Bear Brand Milk Powdered Iron Tie - 8x33g",
    "barcode": 4800361410816,
    "price": 66.54,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11592,
    "name": "Bear Brand Sterilized Milk Liquid Pack - 200ml",
    "barcode": 4800361331500,
    "price": 21.01,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11593,
    "name": "Big 250 Apple Juice Tetra Pack - 250ml",
    "barcode": 4804888889735,
    "price": 6.73,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11594,
    "name": "Big 250 Grape Juice Tetra Pack - 250ml",
    "barcode": 4804888889759,
    "price": 6.25,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11595,
    "name": "Big 250 Mango Juice Tetra Pack - 250ml",
    "barcode": 4804888900089,
    "price": 6.74,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11596,
    "name": "Big 250 Orange Juice Tetra Pack - 250ml",
    "barcode": 4804888889711,
    "price": 6.58,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11597,
    "name": "Big 250 Pineapple Juice Tetra Pack - 250ml",
    "barcode": 4804888900096,
    "price": 6.32,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11598,
    "name": "Bonakid Milk Supplement 1-3 Years Old Pack - 180g",
    "barcode": 4800153100826,
    "price": 91.57,
    "brand": "Bonakid",
    "category": "Milk"
  },
  {
    "id": 11600,
    "name": "Bonakid Milk Supplement 6-12 Months Pack - 180g",
    "barcode": 4800153149146,
    "price": 93.69,
    "brand": "Bonamil",
    "category": "Milk"
  },
  {
    "id": 11602,
    "name": "Bonna Infant Formula 0-6 Months Pack - 180g",
    "barcode": 4800153149092,
    "price": 93.93,
    "brand": "Bonna Infant",
    "category": "Milk"
  },
  {
    "id": 11603,
    "name": "Breeze Liquid Detergent Stain-Action Bula Tie - 6x64ml",
    "barcode": 8934868113034,
    "price": 58.69,
    "brand": "Breeze",
    "category": "Laundry Products"
  },
  {
    "id": 11604,
    "name": "Breeze Powder Rose Gold Tie - 6x66g",
    "barcode": 4800888202765,
    "price": 59.37,
    "brand": "Breeze",
    "category": "Laundry Products"
  },
  {
    "id": 11605,
    "name": "Breeze Powder ActivBleach Tie - 6x70g",
    "barcode": 4800888187840,
    "price": 59.78,
    "brand": "Breeze",
    "category": "Laundry Products"
  },
  {
    "id": 11606,
    "name": "Butter Cream Crackers Pack - 10x25g",
    "barcode": 4800116043023,
    "price": 46.74,
    "brand": "Butter Cream",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11607,
    "name": "C2 Green Tea Apple Bottle - 1L",
    "barcode": 4800016052774,
    "price": 36.95,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11608,
    "name": "C2 Green Tea Apple Bottle - 355ml",
    "barcode": 4800016052040,
    "price": 16.1,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11609,
    "name": "C2 Grean Tea Apple Bottle - 500ml",
    "barcode": 4800016052132,
    "price": 23.62,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11610,
    "name": "C2 Green Tea Apple Solo Box - 24x230ml",
    "barcode": 14800016057073,
    "price": 234,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11611,
    "name": "C2 Green Tea Lemon Bottle - 1L",
    "barcode": 4800016052767,
    "price": 36.22,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11612,
    "name": "C2 Green Tea Lemon Bottle - 355ml",
    "barcode": 4800016052057,
    "price": 16.42,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11613,
    "name": "C2 Green Tea Lemon Bottle - 500ml",
    "barcode": 4800016052149,
    "price": 23.64,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11614,
    "name": "C2 Green Tea Lemon Solo Box - 24x230ml",
    "barcode": 14800016057080,
    "price": 233.89,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11615,
    "name": "Calla Detergent Powder Fabcon Rose Garden Tie - 6x100g",
    "barcode": 4806501709369,
    "price": 59.14,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 11616,
    "name": "Calla Detergent Powder Tie - 6x100g",
    "barcode": 4806501709123,
    "price": 58.83,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 11617,
    "name": "CDO Karne Norte Can - 100g",
    "barcode": 4800249909395,
    "price": 15.87,
    "brand": "CDO",
    "category": "Packed Meat"
  },
  {
    "id": 11618,
    "name": "CDO Karne Norte Can - 150g",
    "barcode": 4800249908848,
    "price": 24.33,
    "brand": "CDO",
    "category": "Packed Meat"
  },
  {
    "id": 11619,
    "name": "CDO Karne Norte Can - 175g",
    "barcode": 4800249908237,
    "price": 27.74,
    "brand": "CDO",
    "category": "Packed Meat"
  },
  {
    "id": 11620,
    "name": "CDO Karne Norte Pack - 260g",
    "barcode": 4800249908657,
    "price": 41.09,
    "brand": "CDO",
    "category": "Packed Meat"
  },
  {
    "id": 11621,
    "name": "Century Tuna Flakes Hot & Spicy Easy Open Can - 155g",
    "barcode": 748485100418,
    "price": 28.5,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 11622,
    "name": "Century Tuna Flakes Hot & Spicy Easy Open Can - 180g",
    "barcode": 748485100098,
    "price": 34.98,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 11623,
    "name": "Century Tuna Flakes Oil Easy Open Can - 155g",
    "barcode": 748485100401,
    "price": 27.81,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 11624,
    "name": "Century Tuna Flakes Oil Easy Open Can - 180g",
    "barcode": 748485100081,
    "price": 34.9,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 11625,
    "name": "Champion Detergent Powder Regular Supra Clean Sachet - 6x120g",
    "barcode": 4806501705026,
    "price": 78.73,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11626,
    "name": "Champion Detergent Powder Regular Supra Clean Sachet - 6x40g",
    "barcode": 4806501705002,
    "price": 27.03,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11627,
    "name": "Champion Detergent Powder With Fabric Conditioner Tie - 6x120g",
    "barcode": 4806501705224,
    "price": 78.74,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11628,
    "name": "Champion Detergent Regular Supra Clean Bar - 145g",
    "barcode": 4806501706115,
    "price": 6.93,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11629,
    "name": "Champion Fabric Conditioner Infinity Sachet - 28ml",
    "barcode": 4806501708508,
    "price": 22.98,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11630,
    "name": "Champion Todo Tipid Bar and Powder Pack Sachet - 145 + 40g",
    "barcode": 4806501703503,
    "price": 9.62,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11631,
    "name": "Cheese Ring Snack Pack - 20g",
    "barcode": 729461168158,
    "price": 4.97,
    "brand": "Cheese Ring",
    "category": "Chips"
  },
  {
    "id": 11632,
    "name": "Cheese Ring Snack Pack - 60g",
    "barcode": 4801688103511,
    "price": 12.85,
    "brand": "Cheese Ring",
    "category": "Chips"
  },
  {
    "id": 11633,
    "name": "Cheez-It Snack Cheese Pack - 25g",
    "barcode": 4800523220079,
    "price": 4.03,
    "brand": "Cheez It",
    "category": "Chips"
  },
  {
    "id": 11634,
    "name": "Champion Detergent Reg Supra Clean Bar - 390g",
    "barcode": 4806501707112,
    "price": 18.28,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 11635,
    "name": "Choco Mucho Cookies & Cream Bar Pack - 30g",
    "barcode": 4800092661150,
    "price": 4.52,
    "brand": "Choco Mucho",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11636,
    "name": "Chokochoko Chocostix Ref Pack - 50pcs",
    "barcode": 4800166142479,
    "price": 42.12,
    "brand": "Choko Choko",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11637,
    "name": "Close Up Toothpaste Red Hot Twin Pack Tie - 6x20ml",
    "barcode": 4800888147288,
    "price": 35.03,
    "brand": "Close Up",
    "category": "Oral Care"
  },
  {
    "id": 11638,
    "name": "Cloud 9 Classic 1's - 28g",
    "barcode": 4800010961447,
    "price": 4.86,
    "brand": "Cloud 9",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11639,
    "name": "Clover Chips Cheese Pack - 22g",
    "barcode": 4800216120013,
    "price": 4.1,
    "brand": "Clover Chips",
    "category": "Chips"
  },
  {
    "id": 11640,
    "name": "Clover Chips Cheese Pack - 55g",
    "barcode": 4800216110069,
    "price": 14.94,
    "brand": "Clover Chips",
    "category": "Chips"
  },
  {
    "id": 11641,
    "name": "Coffeemate Creamer Sachet - 80g",
    "barcode": 8850124006585,
    "price": 16.17,
    "brand": "Coffeemate",
    "category": "Coffee"
  },
  {
    "id": 11642,
    "name": "Coke Mismo Case - 12x300ml",
    "barcode": 4801981118502,
    "price": 132.11,
    "brand": "Coke",
    "category": "Softdrinks"
  },
  {
    "id": 11643,
    "name": "Coke Regular Bottle - 1.5L",
    "barcode": 4801981116072,
    "price": 54.17,
    "brand": "Coke",
    "category": "Softdrinks"
  },
  {
    "id": 11644,
    "name": "Col. Vfresh Gum Wintercool Pack - 50pcs",
    "barcode": 4800818809880,
    "price": 27.34,
    "brand": "Vfresh",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11645,
    "name": "Colgate Toothpaste Fresh Confidence Kool Menthol Tie - 6x22g",
    "barcode": 8850006325230,
    "price": 37.22,
    "brand": "Colgate",
    "category": "Oral Care"
  },
  {
    "id": 11646,
    "name": "Colgate Toothpaste Regular Flavor Tie - 6x24g",
    "barcode": 8850006325216,
    "price": 37.78,
    "brand": "Colgate",
    "category": "Oral Care"
  },
  {
    "id": 11647,
    "name": "Columbia Frutos Candy Soft Chewy Pack - 160gx50pcs",
    "barcode": 4800818808302,
    "price": 25.65,
    "brand": "Frutos",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11648,
    "name": "Columbia Potchi Candy Straw Pack - 135gx50pcs",
    "barcode": 4800818808906,
    "price": 26.05,
    "brand": "Potchi",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11649,
    "name": "Cow Bell Condensada Can - 300ml",
    "barcode": 4800575370302,
    "price": 27.26,
    "brand": "Cow Bell",
    "category": "Milk"
  },
  {
    "id": 11650,
    "name": "Cream-O Choco Fudge Polybag - 10x33g",
    "barcode": 4800010075564,
    "price": 56.6,
    "brand": "Cream O",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11651,
    "name": "Cream-O Vanilla Polybag - 10x33g",
    "barcode": 4800010075526,
    "price": 56.26,
    "brand": "Cream O",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11652,
    "name": "Creamsilk Conditioner Damage Control Tie - 6x11ml",
    "barcode": 4800888139276,
    "price": 29.94,
    "brand": "Cream Silk",
    "category": "Hair Care"
  },
  {
    "id": 11653,
    "name": "Creamsilk Conditioner Hairfall Defense Strength Boost Tie - 6x11ml",
    "barcode": 4800888139283,
    "price": 30.62,
    "brand": "Cream Silk",
    "category": "Hair Care"
  },
  {
    "id": 11654,
    "name": "Creamsilk Conditioner Standout Straight Tie - 6x12ml",
    "barcode": 4800888139306,
    "price": 30.44,
    "brand": "Cream Silk",
    "category": "Hair Care"
  },
  {
    "id": 11655,
    "name": "Cupp Keyk Choco Topps Pack - 10x34g",
    "barcode": 4800092552182,
    "price": 56.81,
    "brand": "Cupp Keyk",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11656,
    "name": "Datu Puti Oyster Sauce Pack - 30g",
    "barcode": 4801668603659,
    "price": 3.25,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11657,
    "name": "Datu Puti Patis Sachet - 150ml",
    "barcode": 4801668600542,
    "price": 10.24,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11658,
    "name": "Datu Puti Soy Sauce Sakto Pack - 6x60ml",
    "barcode": 4801668600726,
    "price": 17.36,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11659,
    "name": "Datu Puti Soy Sauce Sachet - 100ml",
    "barcode": 4801668602218,
    "price": 3.59,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11660,
    "name": "Datu Puti Soy Sauce Sachet - 200ml",
    "barcode": 4801668602034,
    "price": 7.49,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11661,
    "name": "Datu Puti Vinegar Sakto Pack - 6x60ml",
    "barcode": 4801668600733,
    "price": 16.3,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11662,
    "name": "Datu Puti Vinegar Sachet - 100ml",
    "barcode": 4801668602225,
    "price": 2.88,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11663,
    "name": "Datu Puti Vinegar Sachet - 200ml",
    "barcode": 4801668602027,
    "price": 5.57,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 11664,
    "name": "Del Monte Juice Pine with Fiber Can - 240ml",
    "barcode": 4800024562616,
    "price": 24.23,
    "brand": "Del Monte",
    "category": "RTD"
  },
  {
    "id": 11665,
    "name": "Del Monte Juice Pineapple Heartsmart Bottle - 240ml",
    "barcode": 4800024572981,
    "price": 24.79,
    "brand": "Del Monte",
    "category": "RTD"
  },
  {
    "id": 11667,
    "name": "Del Monte Juice Pineapple Juice with Vitamin A-C-E Can - 240ml",
    "barcode": 4800024562692,
    "price": 22.53,
    "brand": "Del Monte",
    "category": "RTD"
  },
  {
    "id": 11668,
    "name": "Del Monte Pineapple Tidbits Pouch - 115g",
    "barcode": 4800024570611,
    "price": 11.22,
    "brand": "Del Monte",
    "category": "Packed Fruits"
  },
  {
    "id": 11669,
    "name": "Del Monte Tomato Sauce Pack - 115g",
    "barcode": 4800024555489,
    "price": 13.14,
    "brand": "Del Monte",
    "category": "Oil and Sauces"
  },
  {
    "id": 11670,
    "name": "Del Monte Tomato Sauce Pack - 200g",
    "barcode": 4800024555496,
    "price": 17.77,
    "brand": "Del Monte",
    "category": "Oil and Sauces"
  },
  {
    "id": 11671,
    "name": "Del Monte Tomato Sauce Pack - 250g",
    "barcode": 4800024556929,
    "price": 20.22,
    "brand": "Del Monte",
    "category": "Oil and Sauces"
  },
  {
    "id": 11672,
    "name": "Doowee Donuts Chocolate w/ Bavarian Pack - 10x40g",
    "barcode": 4800092551611,
    "price": 74.78,
    "brand": "Doowee",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11673,
    "name": "Dove Conditioner Intense Repair Tie - 6x10ml",
    "barcode": 4800888154422,
    "price": 30.11,
    "brand": "Dove",
    "category": "Hair Care"
  },
  {
    "id": 11674,
    "name": "Dove Conditioner Straight & Silky Tie - 6x10ml",
    "barcode": 4800888154439,
    "price": 30.12,
    "brand": "Dove",
    "category": "Hair Care"
  },
  {
    "id": 11675,
    "name": "Dove Shampoo Intense Repair Tie - 6x10ml",
    "barcode": 4800888154262,
    "price": 24.39,
    "brand": "Dove",
    "category": "Hair Care"
  },
  {
    "id": 11676,
    "name": "Dove Shampoo Straight Silky Tie - 6x10ml",
    "barcode": 4800888154279,
    "price": 24.76,
    "brand": "Dove",
    "category": "Hair Care"
  },
  {
    "id": 11677,
    "name": "Downy Fabric Conditioner AntiBac Safeguard Tie - 6x27ml",
    "barcode": 4902430344876,
    "price": 25.42,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11678,
    "name": "Downy Fabric Conditioner AntiBac Safeguard Tie - 6x40ml",
    "barcode": 4902430346184,
    "price": 40.48,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11679,
    "name": "Downy Fabric Conditioner AntiBac Safeguard Tri-Sachet Tie - 6x60ml",
    "barcode": 4902430424264,
    "price": 64.89,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11680,
    "name": "Downy Fabric Conditioner Garden Bloom Tie - 6x25ml",
    "barcode": 4902430453295,
    "price": 25.04,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11681,
    "name": "Downy Fabric Conditioner Garden Bloom Tri-Sachet Tie - 6x66ml",
    "barcode": 4902430513074,
    "price": 66.28,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11682,
    "name": "Downy Fabric Conditioner Parfum Collection Mystique Tie - 6x20ml",
    "barcode": 4902430729925,
    "price": 24.77,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11683,
    "name": "Downy Fabric Conditioner Parfum Collection Passion Tie - 6x20ml",
    "barcode": 4902430729901,
    "price": 24.52,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11684,
    "name": "Downy Fabric Conditioner Sunrise Fresh Tie - 6x28ml",
    "barcode": 4902430401845,
    "price": 24.77,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11685,
    "name": "Downy Fabric Conditioner Sunrise Fresh Tie - 6x40ml",
    "barcode": 4902430346177,
    "price": 39.91,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11686,
    "name": "Downy Fabric Conditioner Sunrise Fresh Tri-Sachet Tie - 6x60ml",
    "barcode": 4902430513081,
    "price": 66.22,
    "brand": "Downy",
    "category": "Laundry Products"
  },
  {
    "id": 11687,
    "name": "Eden Cheese Sulit Pack Sachet - 45g",
    "barcode": 7622210892126,
    "price": 11.39,
    "brand": "Eden",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11688,
    "name": "Eden Cheese Box - 165g",
    "barcode": 4808647020094,
    "price": 45.47,
    "brand": "Eden",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11689,
    "name": "Emperador Brandy Light Bottle - 1L",
    "barcode": 4800142110102,
    "price": 128.6,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 11690,
    "name": "Emperador Brandy Light Bottle - 350ml",
    "barcode": 4800142110164,
    "price": 48.41,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 11691,
    "name": "Emperador Brandy Light Bottle - 500ml",
    "barcode": 4800142110072,
    "price": 68.63,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 11692,
    "name": "Emperador Brandy Light Bottle - 750ml",
    "barcode": 4800142110089,
    "price": 97.65,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 11693,
    "name": "Emperador Brandy Original Bottle - 750ml",
    "barcode": 4800142110027,
    "price": 97.98,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 11694,
    "name": "Energen Cereal Choco Tie - 10x40g",
    "barcode": 8996001440049,
    "price": 67.04,
    "brand": "Energen",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11696,
    "name": "Fibisco Cookies Hi-Ro - 330g x 10S Pack",
    "barcode": 4800040342636,
    "price": 48.24,
    "brand": "Fibisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11697,
    "name": "Fita Biscuits Singles Pack - 10x30g",
    "barcode": 750515017450,
    "price": 46.5,
    "brand": "Fita",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11698,
    "name": "Fortune Extra Menthol Fliptop Long Pack - 20 sticks",
    "barcode": 48043717,
    "price": 107.08,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 11699,
    "name": "Fortune Lights Tribal Blue Label Pack - 20 sticks",
    "barcode": 48043441,
    "price": 107,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 11700,
    "name": "Fortune Mint Splash Pack - 20 sticks",
    "barcode": 48043472,
    "price": 106.96,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 11701,
    "name": "Fortune Red Extra KS Softpack Pack - 20sticks",
    "barcode": 48037105,
    "price": 107.01,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 11706,
    "name": "Frito Plus Vegetable Oil Pack - 175ml",
    "barcode": 4804880551111,
    "price": 12.98,
    "brand": "Frito Plus",
    "category": "Oil and Sauces"
  },
  {
    "id": 11707,
    "name": "Frito Plus Vegetable Oil Bottle - 350ml",
    "barcode": 4804880551135,
    "price": 24.65,
    "brand": "Frito Plus",
    "category": "Oil and Sauces"
  },
  {
    "id": 11708,
    "name": "Fudgee Barr Cake Choco Pack - 10x41g",
    "barcode": 4800092550911,
    "price": 57.57,
    "brand": "Fudgee",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11709,
    "name": "Fudgee Barr Cake Combo Pack - 10x44g",
    "barcode": 4800092552090,
    "price": 57.86,
    "brand": "Fudgee",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11710,
    "name": "Fudgee Barr Cake Dark Choco Pack - 10x38g",
    "barcode": 4800092553233,
    "price": 57.75,
    "brand": "Fudgee",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11711,
    "name": "Fudgee Barr Cake Macapuno Pack - 10x39g",
    "barcode": 4800092551451,
    "price": 57.21,
    "brand": "Fudgee",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11712,
    "name": "Gatorade Assorted 5+1 Bottle Pack - 6x500ml",
    "barcode": 4803925063121,
    "price": 185.61,
    "brand": "Gatorade",
    "category": "Sports Drinks"
  },
  {
    "id": 11716,
    "name": "Ginebra Frasco Bottle - 700ml",
    "barcode": 4800130100016,
    "price": 94.7,
    "brand": "Ginebra",
    "category": "Alcohol"
  },
  {
    "id": 11717,
    "name": "Ginebra Gin Round Bottle - 350ml",
    "barcode": 4800130100023,
    "price": 47.8,
    "brand": "Ginebra",
    "category": "Alcohol"
  },
  {
    "id": 11718,
    "name": "Great Taste Original Twin Pack Tie 33gX10",
    "barcode": 4800016021169,
    "price": 73.32,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 11719,
    "name": "Great Taste 3In1 White Smooth and Chocolatey Tie - 10x30g",
    "barcode": 4800016021596,
    "price": 58.56,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 11721,
    "name": "Great Taste 3in1 White Twinpack Tie- 10x50g",
    "barcode": 4800016022265,
    "price": 87.83,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 11722,
    "name": "Great Taste White Coffee Tie - 10x30g",
    "barcode": 4800016021039,
    "price": 58.98,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 11723,
    "name": "GSM Blue Bottle - 350ml",
    "barcode": 4800130440099,
    "price": 48.17,
    "brand": "GSM Blue",
    "category": "Alcohol"
  },
  {
    "id": 11724,
    "name": "GSM Blue Bottle - 700ml",
    "barcode": 4800130910127,
    "price": 91.99,
    "brand": "GSM Blue",
    "category": "Alcohol"
  },
  {
    "id": 11725,
    "name": "Hany Milk Choco Sp Milk Pack - 260gx16pcs",
    "barcode": 4804888589505,
    "price": 35.19,
    "brand": "Hany",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11726,
    "name": "Happy Cotton Rolls Pack - 10g",
    "barcode": 4801288820153,
    "price": 2.79,
    "brand": "Happy",
    "category": "Bath and Body Care"
  },
  {
    "id": 11727,
    "name": "Happy Diaper Baby Pants L Pack - 12pcs",
    "barcode": 4802288813121,
    "price": 80.87,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11728,
    "name": "Happy Diaper Baby Pants L Pack - 24pcs",
    "barcode": 4802288813244,
    "price": 162.19,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11729,
    "name": "Happy Diaper Baby Pants M Pack - 24pcs",
    "barcode": 4802288812247,
    "price": 145.84,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11730,
    "name": "Happy Diaper Baby Pants XL Pack - 12pcs",
    "barcode": 4802288814128,
    "price": 89.31,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11731,
    "name": "Happy Diaper Baby Pants XL Pack - 24pcs",
    "barcode": 4802288814241,
    "price": 177.78,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11732,
    "name": "Happy Diaper Clr Assorted L Pack - 30pcs",
    "barcode": 4802288853301,
    "price": 179.11,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11735,
    "name": "Happy Diaper L Pack - 12pcs",
    "barcode": 4802288887122,
    "price": 76.23,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11736,
    "name": "Happy Diaper L Pack - 30pcs",
    "barcode": 4802288887306,
    "price": 184.28,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11737,
    "name": "Happy Diaper M Pack - 12pcs",
    "barcode": 4802288886125,
    "price": 66.93,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11738,
    "name": "Happy Diaper M Pack - 30pcs",
    "barcode": 4802288886309,
    "price": 165.37,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11739,
    "name": "Happy Diaper XL Pack - 12pcs",
    "barcode": 4802288888129,
    "price": 82.86,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11740,
    "name": "Happy Diaper XL Pack - 30pcs",
    "barcode": 4802288888303,
    "price": 203.08,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 11741,
    "name": "Happy Peanut Sachet - 20x6g",
    "barcode": 4800092330018,
    "price": 16.03,
    "brand": "Happy Peanuts",
    "category": "Nuts"
  },
  {
    "id": 11742,
    "name": "Head & Shoulders Shampoo Cool Menthol Tie - 6x12ml",
    "barcode": 4902430333597,
    "price": 26.94,
    "brand": "Head & Shoulders",
    "category": "Hair Care"
  },
  {
    "id": 11743,
    "name": "Homi Mami Beef Brisket Pack - 55g",
    "barcode": 4800110026497,
    "price": 6.37,
    "brand": "Homi Mami",
    "category": "Rice and Noodles"
  },
  {
    "id": 11744,
    "name": "Homi Mami Chicken N Garlic Pack - 55g",
    "barcode": 4800110025995,
    "price": 6.38,
    "brand": "Homi Mami",
    "category": "Rice and Noodles"
  },
  {
    "id": 11745,
    "name": "Homi Mami Chiligarlic Beef Pack - 55g",
    "barcode": 4806022901884,
    "price": 6.68,
    "brand": "Homi Mami",
    "category": "Rice and Noodles"
  },
  {
    "id": 11746,
    "name": "Hope Menthol 100's Softpack Pack",
    "barcode": 48033695,
    "price": 107.37,
    "brand": "Hope",
    "category": "Cigarettes"
  },
  {
    "id": 11747,
    "name": "Chicharon ni Mang Juan Espesyal Sukang Paomboong Pouch - 26g",
    "barcode": 4800016110535,
    "price": 3.44,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 11748,
    "name": "Chicharon ni Mang Juan Paombong Pouch - 90g",
    "barcode": 4800016110511,
    "price": 14.6,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 11749,
    "name": "Chicharon ni Mang Juan Chicharon Espesyal Suka't Sili Pouch - 26g",
    "barcode": 4800016110542,
    "price": 3.84,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 11750,
    "name": "Chicharron ni Mang Juan Suka't Sili Pouch - 90g",
    "barcode": 4800016110528,
    "price": 14.05,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 11751,
    "name": "Jack n' Jill Chik'N Skin ni Mang Juan Pack - 17g",
    "barcode": 4800016115011,
    "price": 3.89,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 11752,
    "name": "Jack n' Jill Potato Chips Vcut Cheese Pack - 25g",
    "barcode": 4800016603259,
    "price": 9.12,
    "brand": "Potato Chips",
    "category": "Chips"
  },
  {
    "id": 11754,
    "name": "Potato Chips V-Cut Spicy BBQ Pouch - 25g",
    "barcode": 4800016622533,
    "price": 9.81,
    "brand": "Potato Chips",
    "category": "Chips"
  },
  {
    "id": 11755,
    "name": "Jack n' Jill Potato Chips Vcut Spicy Barbeque Pack - 60g",
    "barcode": 4800016625534,
    "price": 24.66,
    "brand": "Potato Chips",
    "category": "Chips"
  },
  {
    "id": 11756,
    "name": "Roller Coaster Cheddar Cheese Pouch - 24g",
    "barcode": 4800016661006,
    "price": 3.9,
    "brand": "Roller Coaster",
    "category": "Chips"
  },
  {
    "id": 11757,
    "name": "Wafrets Brix Chocolate Polybag - 10x24g",
    "barcode": 4800016084065,
    "price": 39.47,
    "brand": "Wafrets",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11758,
    "name": "Chippy BBQ Pouch - 42.5g",
    "barcode": 4800016642029,
    "price": 4.05,
    "brand": "Chippy",
    "category": "Chips"
  },
  {
    "id": 11759,
    "name": "Jersey Evaporada Creamer Can - 370ml",
    "barcode": 9555513203017,
    "price": 20.13,
    "brand": "Jersey",
    "category": "Milk"
  },
  {
    "id": 11760,
    "name": "Johnson's Baby Powder Classic Bottle - 25g",
    "barcode": 48032742,
    "price": 11.88,
    "brand": "Johnson & Johnson",
    "category": "Bath and Body Care"
  },
  {
    "id": 11761,
    "name": "Joy Dishwashing Liquid AntiBac Safeguard Tie - 6x40ml",
    "barcode": 4902430389556,
    "price": 58.3,
    "brand": "Joy",
    "category": "Cleaning Products"
  },
  {
    "id": 11762,
    "name": "Joy Dishwashing Liquid Kalamansi Tie - 6x18.5ml",
    "barcode": 4902430434393,
    "price": 25.37,
    "brand": "Joy",
    "category": "Cleaning Products"
  },
  {
    "id": 11763,
    "name": "Joy Dishwashing Liquid Kalamansi Tie - 6x40ml",
    "barcode": 4902430389532,
    "price": 58.53,
    "brand": "Joy",
    "category": "Cleaning Products"
  },
  {
    "id": 11764,
    "name": "Joy Dishwashing Liquid Lemon Tie - 6x18.5ml",
    "barcode": 4902430389570,
    "price": 26.04,
    "brand": "Joy",
    "category": "Cleaning Products"
  },
  {
    "id": 11765,
    "name": "Joy Dishwashing Liquid Lemon Tie - 6x40ml",
    "barcode": 4902430389563,
    "price": 58.15,
    "brand": "Joy",
    "category": "Cleaning Products"
  },
  {
    "id": 11766,
    "name": "Knorr Cubes Beef Tie - 6x10g",
    "barcode": 4800888602732,
    "price": 26.44,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11767,
    "name": "Knorr Cubes Chicken Tie - 6X10g",
    "barcode": 4800888602718,
    "price": 25.66,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11768,
    "name": "Knorr Cubes Pork Tie - 6X10g",
    "barcode": 4800888602725,
    "price": 26.41,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11769,
    "name": "Knorr Mix Sinigang Original Pack - 10g",
    "barcode": 4800888603692,
    "price": 3.92,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11770,
    "name": "Knorr Mix Sinigang w/ Gabi Pack - 22g",
    "barcode": 4808680652146,
    "price": 9.92,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11771,
    "name": "Knorr Mixes Ginataang Gulay Pack - 29g",
    "barcode": 4800888603371,
    "price": 12.06,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11772,
    "name": "Knorr Mix Sinigang Original Pack - 20g",
    "barcode": 4800888600790,
    "price": 8.96,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 11773,
    "name": "Kopiko Coffee Black 3in1 Astig Tie - 10x20g",
    "barcode": 8996001410226,
    "price": 64.22,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11774,
    "name": "Kopiko Coffee Black 3in1 Astig Twin Pack Tie - 10x50g",
    "barcode": 8998666001702,
    "price": 97.68,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11775,
    "name": "Kopiko Coffee Brown Tie- 10x27.5g",
    "barcode": 8996001410547,
    "price": 63.7,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11776,
    "name": "Kopiko Coffee Brown Twin Pack Tie - 10x55g",
    "barcode": 8998666001719,
    "price": 97.74,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11777,
    "name": "Kopiko Coffee Cafe Blanca Tie - 10x30g",
    "barcode": 8996001414309,
    "price": 63.54,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11778,
    "name": "Kopiko Coffee Cafe Blanca Twin Pack Tie - 10x52g",
    "barcode": 8998666001726,
    "price": 97.79,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11779,
    "name": "Kopiko Coffee L.A. Coffee Tie - 10x25g",
    "barcode": 8996001410981,
    "price": 57.13,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 11780,
    "name": "Lady's Choice Mayonnaise Tie - 6x27ml",
    "barcode": 4800888607126,
    "price": 53.02,
    "brand": "Lady's Choice",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11781,
    "name": "Lady's Choice Mayonnaise Pack - 80ml",
    "barcode": 4808680021355,
    "price": 25.83,
    "brand": "Lady's Choice",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11782,
    "name": "Ladys Choice Spread Chicken Sachet Tie - 6x27ml",
    "barcode": 4800888607119,
    "price": 52.68,
    "brand": "Lady's Choice",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11783,
    "name": "Lemon Square Cupcake Cheese Pack - 10x30g",
    "barcode": 4809010626332,
    "price": 57.36,
    "brand": "Lemon Square",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11784,
    "name": "Lemon Square Lava Cake Pack - 10x42g",
    "barcode": 4806018405662,
    "price": 59.23,
    "brand": "Lemon Square",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11785,
    "name": "Ligo Sardines Green Can - 155g",
    "barcode": 4800163443043,
    "price": 16.01,
    "brand": "Ligo",
    "category": "Canned Seafood"
  },
  {
    "id": 11786,
    "name": "Ligo Sardines Green Can - 425g",
    "barcode": 4800163000536,
    "price": 42.42,
    "brand": "Ligo",
    "category": "Canned Seafood"
  },
  {
    "id": 11787,
    "name": "Ligo Sardines Red Can - 155g",
    "barcode": 4800163443036,
    "price": 17.08,
    "brand": "Ligo",
    "category": "Canned Seafood"
  },
  {
    "id": 11788,
    "name": "Ligo Sardines Red Can - 425g",
    "barcode": 4800163000543,
    "price": 42.83,
    "brand": "Ligo",
    "category": "Canned Seafood"
  },
  {
    "id": 11789,
    "name": "Loaded Snack Choco Pack - 32g",
    "barcode": 4800523441955,
    "price": 3.79,
    "brand": "Loaded",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11790,
    "name": "Loaded Snack White Choco Pack - 32g",
    "barcode": 4800523443416,
    "price": 3.84,
    "brand": "Loaded",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11791,
    "name": "Lucky Me Noodle Beef Pack - 55g",
    "barcode": 4807770270017,
    "price": 6.18,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11792,
    "name": "Lucky Me Noodle Chicken Pack - 55g",
    "barcode": 4807770270024,
    "price": 6.46,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11793,
    "name": "Lucky Me Noodle Spicy Beef Pack - 55g",
    "barcode": 4807770272097,
    "price": 6.27,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11794,
    "name": "Lucky Me Pancit Canton Chilimansi Pack - 80g",
    "barcode": 4807770273698,
    "price": 10.02,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11795,
    "name": "Lucky Me Pancit Canton Hot Chili Pack - 80g",
    "barcode": 4807770273681,
    "price": 10.07,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11796,
    "name": "Lucky Me Pancit Canton Kalamansi Pack - 80g",
    "barcode": 4807770273674,
    "price": 10.49,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11797,
    "name": "Lucky Me Pancit Canton Original Pack - 80g",
    "barcode": 4807770273704,
    "price": 10.47,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11798,
    "name": "Lucky Me Pancit Canton Sweet & Spicy Pack - 80g",
    "barcode": 4807770273711,
    "price": 10.05,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 11803,
    "name": "Magic Flavors Cheese Pack - 28g",
    "barcode": 4800016081132,
    "price": 39.33,
    "brand": "Magic Flakes",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11804,
    "name": "Mang Tomas Lechon Sauce Pouch - 100g",
    "barcode": 4801668600641,
    "price": 8.42,
    "brand": "Mang Tomas",
    "category": "Condiments and Spices"
  },
  {
    "id": 11805,
    "name": "Mang Tomas Lechon Sauce Bottle - 325g",
    "barcode": 4801668100264,
    "price": 29.17,
    "brand": "Mang Tomas",
    "category": "Condiments and Spices"
  },
  {
    "id": 11806,
    "name": "Marlboro Black Menthol Fliptop Pack - 20 sticks",
    "barcode": 95509433,
    "price": 117.12,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 11808,
    "name": "Marlboro Ice Blast Filter Pack - 20 sticks",
    "barcode": 48042772,
    "price": 117.15,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 11809,
    "name": "Marlboro Lights Fliptop Pack - 20 sticks",
    "barcode": 76239878,
    "price": 117.07,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 11811,
    "name": "Marlboro Red Fliptop Pack - 20 sticks",
    "barcode": 76164217,
    "price": 116.6,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 11813,
    "name": "Maxx Cherry Pack - 50pcs",
    "barcode": 4800016304019,
    "price": 27.22,
    "brand": "Maxx",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11815,
    "name": "Maxx Honey-Lemon Pack - 50pcs",
    "barcode": 4800016306013,
    "price": 27.18,
    "brand": "Maxx",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11817,
    "name": "Mega Sardines Green Easy Open Can - 155g",
    "barcode": 4806504710119,
    "price": 16.26,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 11819,
    "name": "Mega Sardines Hot Easy Open Can - 155g",
    "barcode": 4806504710126,
    "price": 17,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 11821,
    "name": "Mentos Candy Mint Pack - 50pcs",
    "barcode": 4800214061271,
    "price": 34.41,
    "brand": "Mentos",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11822,
    "name": "Mighty Cigar Filter King 20s Red Hardpack Pack - 20 sticks",
    "barcode": 48041836,
    "price": 89.61,
    "brand": "Mighty Cigar",
    "category": "Cigarettes"
  },
  {
    "id": 11823,
    "name": "Mighty Cigar Menthol 20s White Hardpack Pack - 20 sticks",
    "barcode": 48041812,
    "price": 89.98,
    "brand": "Mighty Cigar",
    "category": "Cigarettes"
  },
  {
    "id": 11825,
    "name": "Moby Snack Caramel Pack - 25g",
    "barcode": 4800523220802,
    "price": 4.33,
    "brand": "Moby",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11826,
    "name": "Moby Snack Chocolate Pack - 25g",
    "barcode": 4800523220284,
    "price": 3.43,
    "brand": "Moby",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11827,
    "name": "Modess Sanitary Napkin Cottony Soft Maxi Non-Wing Pack - 20 pads",
    "barcode": 8850007371236,
    "price": 79.98,
    "brand": "Modess",
    "category": "Feminine Care"
  },
  {
    "id": 11828,
    "name": "Modess Sanitary Napkin Cottony Soft Maxi Non-Wing Pack - 12x1 pads",
    "barcode": 8850007371441,
    "price": 48.17,
    "brand": "Modess",
    "category": "Feminine Care"
  },
  {
    "id": 11829,
    "name": "Modess Sanitary Napkin Cottony Soft Maxi Wing Pack - 16 pads",
    "barcode": 8850007372882,
    "price": 65.26,
    "brand": "Modess",
    "category": "Feminine Care"
  },
  {
    "id": 11830,
    "name": "Mr. Chips Cheese Snack Pack - 26g",
    "barcode": 4800016652035,
    "price": 2.89,
    "brand": "Mr. Chips",
    "category": "Chips"
  },
  {
    "id": 11833,
    "name": "Nescafe Coffee Brown and Creamy Twin Pack Tie - 10x24g",
    "barcode": 4800361412698,
    "price": 97.48,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 11834,
    "name": "Nescafe Coffee Classic Sachet - 25g",
    "barcode": 4800361339186,
    "price": 17.54,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 11835,
    "name": "Nescafe Coffee Classic Sachet - 48x2g",
    "barcode": 4800361388252,
    "price": 89.68,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 11836,
    "name": "Nescafe Coffee Creamy Latte Tie - 10x27.5g",
    "barcode": 4800361383493,
    "price": 54.52,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 11837,
    "name": "Nescafe Coffee Creamy White Twin Pack Tie - 10x52g",
    "barcode": 4800361405485,
    "price": 97.68,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 11838,
    "name": "Nescafe Coffee Creamy White Tie - 10x28g",
    "barcode": 4800361393096,
    "price": 56.34,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 11844,
    "name": "Nestle All Purpose Cream Tetra Pack - 250ml",
    "barcode": 4800361061322,
    "price": 54.96,
    "brand": "Nestle",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11845,
    "name": "Nestle Chuckie Bulilit Tetra Pack - 110ml",
    "barcode": 4800361395687,
    "price": 10.21,
    "brand": "Chuckie",
    "category": "Milk"
  },
  {
    "id": 11846,
    "name": "Nestle Chuckie Tetra Pack - 150ml",
    "barcode": 4800361392457,
    "price": 15.08,
    "brand": "Chuckie",
    "category": "Milk"
  },
  {
    "id": 11847,
    "name": "Nestogen 1 Box - 135g",
    "barcode": 4800361378376,
    "price": 62.83,
    "brand": "Nestogen",
    "category": "Milk"
  },
  {
    "id": 11848,
    "name": "Nestogen Classic Pack - 135g",
    "barcode": 4800361363129,
    "price": 43.55,
    "brand": "Nestogen",
    "category": "Milk"
  },
  {
    "id": 11849,
    "name": "Nissin Batchoy Mini Cup - 40g",
    "barcode": 4800016552137,
    "price": 14.31,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11850,
    "name": "Nissin Minicup Beef Pack - 40g",
    "barcode": 4800016552106,
    "price": 14.49,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11851,
    "name": "Nissin Mini Bulalo Cup - 40g",
    "barcode": 4800016552274,
    "price": 14.77,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11852,
    "name": "Nissin Mini Seafood Cup - 40g",
    "barcode": 4800016552113,
    "price": 14.47,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11853,
    "name": "Nissin Minicup Spicy Hot Beef - 40g",
    "barcode": 4800016560927,
    "price": 14.14,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11854,
    "name": "Nissin Mini Spicy Seafood Cup - 40g",
    "barcode": 4800016551857,
    "price": 14.38,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11855,
    "name": "Nissin Ramen Noodle Beef Pack - 55g",
    "barcode": 4800016551581,
    "price": 6.79,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11856,
    "name": "Nissin Ramen Seafood Pouch - 55g",
    "barcode": 4800016551598,
    "price": 8.52,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11857,
    "name": "Nissin Ramen Noodle Spicy Seafood Pack - 59g",
    "barcode": 4800016560910,
    "price": 8.5,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11858,
    "name": "Nissin Yakisoba Chicken Pack - 59g",
    "barcode": 4800016551604,
    "price": 7.57,
    "brand": "Nissin (Noodles)",
    "category": "Rice and Noodles"
  },
  {
    "id": 11859,
    "name": "Nova Country Cheddar Pack - 40g",
    "barcode": 4800016663802,
    "price": 9.89,
    "brand": "Nova",
    "category": "Chips"
  },
  {
    "id": 11860,
    "name": "Nova Country Cheddar Pouch - 78g",
    "barcode": 4800016663505,
    "price": 24.38,
    "brand": "Nova",
    "category": "Chips"
  },
  {
    "id": 11861,
    "name": "Oishi Bread Pan Butter Toast Pack - 24g",
    "barcode": 4800194153683,
    "price": 4.11,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11862,
    "name": "Oishi Bread Pan Cheese & Onion Pack - 24g",
    "barcode": 4800194153225,
    "price": 3.88,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11863,
    "name": "Oishi Cracklin Salt and Vinegar Pack - 24g",
    "barcode": 4800194116084,
    "price": 3.87,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11864,
    "name": "Oishi Crispy Patata Snack Pack - 24g",
    "barcode": 4800194104869,
    "price": 3.51,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11865,
    "name": "Oishi Crispy Patata Snack Pack - 85g",
    "barcode": 4800194177863,
    "price": 16.75,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11866,
    "name": "Oishi Marty's Crackling Spicy Pack - 22g",
    "barcode": 4800194152891,
    "price": 4.02,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11868,
    "name": "Oishi Marty's Cracklings Salt & Vinegar Pack - 22g",
    "barcode": 4800194152907,
    "price": 3.65,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11870,
    "name": "Oishi Marty's Plain Pack - 22g",
    "barcode": 4800194152884,
    "price": 4,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11871,
    "name": "Oishi Pillows Choco Pack - 38g",
    "barcode": 4800194116466,
    "price": 5.4,
    "brand": "Oishi",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11872,
    "name": "Oishi Prawn Cracker Spicy Pack - 24g",
    "barcode": 4800194104968,
    "price": 4.03,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11873,
    "name": "Oishi Prawn Crackers Spicy Pack - 90g",
    "barcode": 4800194177962,
    "price": 16.42,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11874,
    "name": "Oishi Prawn Crackers Pack - 24g",
    "barcode": 4891208040143,
    "price": 3.79,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 11875,
    "name": "Ok Filled Cheese Pack - 200g",
    "barcode": 4800056191013,
    "price": 33.82,
    "brand": "Ok",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11877,
    "name": "Palmolive Naturals Shampoo Healthy & Smooth Tie - 6x15ml",
    "barcode": 8850006493038,
    "price": 24.86,
    "brand": "Palmolive",
    "category": "Hair Care"
  },
  {
    "id": 11879,
    "name": "Palmolive Naturals Shampoo Intense Moisture Tie - 6x15ml",
    "barcode": 8850006493014,
    "price": 24.15,
    "brand": "Palmolive",
    "category": "Hair Care"
  },
  {
    "id": 11880,
    "name": "Payless Pancit Canton Chilimansi Pack - 130g",
    "barcode": 4800016556517,
    "price": 12.35,
    "brand": "Payless",
    "category": "Rice and Noodles"
  },
  {
    "id": 11881,
    "name": "Payless Xtra Big Hot Chili Pack - 130g",
    "barcode": 4800016556807,
    "price": 13.25,
    "brand": "Payless",
    "category": "Rice and Noodles"
  },
  {
    "id": 11882,
    "name": "Payless Xtra Big Kalamansi Pack - 130g",
    "barcode": 4800016555985,
    "price": 12.9,
    "brand": "Payless",
    "category": "Rice and Noodles"
  },
  {
    "id": 11883,
    "name": "Peewee Snack BBQ Pack - 25g",
    "barcode": 4800523220031,
    "price": 3.11,
    "brand": "Peewee",
    "category": "Chips"
  },
  {
    "id": 11885,
    "name": "Piattos Snack Cheese Pack - 40g",
    "barcode": 4800016644801,
    "price": 10.05,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 11886,
    "name": "Piattos Cheese Pack - 85g",
    "barcode": 4800016644504,
    "price": 23.3,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 11887,
    "name": "Piattos Roadhouse BBQ Pack - 40g",
    "barcode": 4800016633782,
    "price": 9.56,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 11889,
    "name": "Piattos Snack Sour Cream Pack - 40g",
    "barcode": 4800016671807,
    "price": 9.11,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 11890,
    "name": "Piattos Snack Sour Cream Pack - 85g",
    "barcode": 4800016671500,
    "price": 23.57,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 11891,
    "name": "Presto Creams Peanut Butter Polybag - 10x30g",
    "barcode": 4800010075922,
    "price": 44.75,
    "brand": "Presto Creams",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11892,
    "name": "Purefoods Corned Beef Pack - 150g",
    "barcode": 4808887010077,
    "price": 66.11,
    "brand": "Purefoods",
    "category": "Packed Meat"
  },
  {
    "id": 11893,
    "name": "Purefoods Corned Beef Pack - 210g",
    "barcode": 4808887010015,
    "price": 91.31,
    "brand": "Purefoods",
    "category": "Packed Meat"
  },
  {
    "id": 11894,
    "name": "Rebisco Biscuit Bravo Pack - Pack",
    "barcode": 4800092110115,
    "price": 47.78,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11895,
    "name": "Rebisco Combi Triple Choco Pack",
    "barcode": 4800092112782,
    "price": 46.74,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11896,
    "name": "Rebisco Crackers Pack - 35g",
    "barcode": 4800092111822,
    "price": 44.82,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11897,
    "name": "Rebisco Hansel Choco Pack - 30g",
    "barcode": 4800092110528,
    "price": 47.16,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11898,
    "name": "Rebisco Hansel Crackers Pack - 30g",
    "barcode": 4800092112317,
    "price": 46.77,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11899,
    "name": "Rebisco Hansel Mocha Pack - 30g",
    "barcode": 4800092110023,
    "price": 47.65,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11900,
    "name": "Rebisco Sandwich Choco Pack - 32g",
    "barcode": 4800092110030,
    "price": 47.25,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11901,
    "name": "Rebisco Sandwich Strawberry Pack - 32g",
    "barcode": 4800092110047,
    "price": 47.59,
    "brand": "Rebisco",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11902,
    "name": "Refresh Mineral Water Bottle - 350ml",
    "barcode": 4800016073632,
    "price": 4.1,
    "brand": "Refresh",
    "category": "Water"
  },
  {
    "id": 11903,
    "name": "Refresh Mineral Water Bottle - 500ml",
    "barcode": 4800016073625,
    "price": 5.35,
    "brand": "Refresh",
    "category": "Water"
  },
  {
    "id": 11904,
    "name": "Regent Snack Tempura Pack - 100g",
    "barcode": 4801688108318,
    "price": 16.66,
    "brand": "Regent",
    "category": "Chips"
  },
  {
    "id": 11905,
    "name": "Reno Spread Liver Can - 85g",
    "barcode": 4805885171007,
    "price": 15.27,
    "brand": "Reno",
    "category": "Spreads and Dressings"
  },
  {
    "id": 11909,
    "name": "Ricoa Choco Flat Tops Pack - 100pcs",
    "barcode": 4800040211246,
    "price": 134.81,
    "brand": "Ricoa",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11910,
    "name": "Royal Tru-Orange Mismo Case - 12x300ml",
    "barcode": 4801981118519,
    "price": 132.42,
    "brand": "Royal",
    "category": "Softdrinks"
  },
  {
    "id": 11911,
    "name": "Royal Tru-Orange Regular Bottle - 1.5L",
    "barcode": 4801981116171,
    "price": 54.04,
    "brand": "Royal",
    "category": "Softdrinks"
  },
  {
    "id": 11912,
    "name": "Saba Mackerel Natural Oil White Can - 155g",
    "barcode": 96785013298,
    "price": 25.75,
    "brand": "Saba",
    "category": "Canned Seafood"
  },
  {
    "id": 11913,
    "name": "Saba Mackerel Oil White Can - 425g",
    "barcode": 96785013113,
    "price": 59.93,
    "brand": "Saba",
    "category": "Canned Seafood"
  },
  {
    "id": 11914,
    "name": "Safeguard Soap Floral Pink Pack - 60g",
    "barcode": 4902430951357,
    "price": 14.91,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 11915,
    "name": "Safeguard Soap Pure White Pack - 60g",
    "barcode": 4902430945554,
    "price": 14.27,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 11916,
    "name": "San Marino Tuna Corned Chili Can - 100g",
    "barcode": 4800249010091,
    "price": 23.04,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 11917,
    "name": "San Marino Tuna Corned Chili Can - 150g",
    "barcode": 4800249006636,
    "price": 30.46,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 11919,
    "name": "San Marino Tuna Corned Chili Can - 85g",
    "barcode": 4800249008531,
    "price": 21.12,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 11920,
    "name": "San Marino Tuna Corned Can - 100g",
    "barcode": 4800249006599,
    "price": 22.64,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 11921,
    "name": "San Marino Tuna Corned Can - 150g",
    "barcode": 4800249006612,
    "price": 30.82,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 11923,
    "name": "San Marino Tuna Corned Can - 85g",
    "barcode": 4800249008517,
    "price": 21.4,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 11924,
    "name": "Silka Soap Orange Papaya Pack - 65g",
    "barcode": 4806507832481,
    "price": 13.21,
    "brand": "Silka",
    "category": "Bath and Body Care"
  },
  {
    "id": 11925,
    "name": "Silver Swan Soy Sauce Pack - 100ml",
    "barcode": 4800344001963,
    "price": 3.68,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 11926,
    "name": "Silver Swan Soy Sauce Pouch - 200ml",
    "barcode": 4800344001949,
    "price": 7.34,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 11927,
    "name": "Silver Swan Sukang Puti Pouch - 100ml",
    "barcode": 4800344004964,
    "price": 2.78,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 11928,
    "name": "Silver Swan Sukang Puti Pouch - 200ml",
    "barcode": 4800344004940,
    "price": 5.36,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 11929,
    "name": "Skyflakes Crackers Pack - 24x25g",
    "barcode": 750515018488,
    "price": 111.64,
    "brand": "Skyflakes",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11930,
    "name": "Skyflakes Sandwich Condensada Pack - 10x30g",
    "barcode": 750515031531,
    "price": 46.45,
    "brand": "Skyflakes",
    "category": "Bread and Biscuits"
  },
  {
    "id": 11931,
    "name": "Snowbear Candy Menthol 100's Pack - 100",
    "barcode": 4806500730012,
    "price": 73.98,
    "brand": "Snowbear",
    "category": "Candies and Chocolates"
  },
  {
    "id": 11932,
    "name": "Spam Luncheon Meat Lite Can - 340g",
    "barcode": 37600336161,
    "price": 170.34,
    "brand": "Spam",
    "category": "Packed Meat"
  },
  {
    "id": 11934,
    "name": "Sprite Regular Bottle - 1.5L",
    "barcode": 4801981116270,
    "price": 53.78,
    "brand": "Sprite",
    "category": "Softdrinks"
  },
  {
    "id": 11935,
    "name": "Stik-O Waferstick Chocolate Can - 850g",
    "barcode": 4800166142288,
    "price": 101.09,
    "brand": "Stik-O",
    "category": "Cookies"
  },
  {
    "id": 11936,
    "name": "Summit Spring Water Bottle - 350ml",
    "barcode": 4800014148080,
    "price": 6.39,
    "brand": "Summit",
    "category": "Water"
  },
  {
    "id": 11937,
    "name": "Summit Spring Water Bottle - 500ml",
    "barcode": 4800014141081,
    "price": 8.88,
    "brand": "Summit",
    "category": "Water"
  },
  {
    "id": 11938,
    "name": "Sunsilk Smooth & Manageable Tie - 6x13.5ml",
    "barcode": 4800888169716,
    "price": 24.15,
    "brand": "Sunsilk",
    "category": "Hair Care"
  },
  {
    "id": 11939,
    "name": "Sunsilk Strong & Long Tie - 6x13ml",
    "barcode": 4800888169709,
    "price": 23.88,
    "brand": "Sunsilk",
    "category": "Hair Care"
  },
  {
    "id": 11940,
    "name": "Surf Detergent Cherry Blossom Bar - 130g",
    "barcode": 4800888190970,
    "price": 7.52,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11941,
    "name": "Surf Detergent Blossom Fresh with Fabcon Bar - 130g",
    "barcode": 4800888136671,
    "price": 7.25,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11942,
    "name": "Surf Detergent Blossom Fresh with Fabcon Bar - 380g",
    "barcode": 4800888136688,
    "price": 21.26,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11943,
    "name": "Surf Detergent Kalamansi Oxybubbles Bar - 380g",
    "barcode": 4800888136749,
    "price": 18.58,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11944,
    "name": "Surf Detergent Powder Cherry Blossom Tie - 6x57g",
    "barcode": 4800888189806,
    "price": 28.27,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11945,
    "name": "Surf Detergent Powder Kalamansi Tie - 6x57g",
    "barcode": 4800888151827,
    "price": 27.76,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11946,
    "name": "Surf Detergent Powder Rose Fresh Tie - 6x57g",
    "barcode": 4800888183804,
    "price": 27.53,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11947,
    "name": "Surf Detergent Powder Sun Fresh Tie - 6x57g",
    "barcode": 4800888151841,
    "price": 27.94,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11948,
    "name": "Surf Detergent Powder Tawas Tie - 6x57g",
    "barcode": 4800888151834,
    "price": 27.66,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11949,
    "name": "Surf Fabric Conditioner Blossom Fresh Tie - 6x28ml",
    "barcode": 4800888157614,
    "price": 25.02,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11950,
    "name": "Surf Fabric Conditioner Luxe Perfume Tie - 6x28ml",
    "barcode": 8934868110170,
    "price": 24.69,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 11951,
    "name": "Tanduay Ice Original Bottle - 330ml",
    "barcode": 4800220531355,
    "price": 26.64,
    "brand": "Tanduay",
    "category": "Alcohol"
  },
  {
    "id": 11960,
    "name": "Those Days S.Napkin Reg Nw Pack - 8pads",
    "barcode": 4801288830084,
    "price": 10.87,
    "brand": "Those Days",
    "category": "Feminine Care"
  },
  {
    "id": 11961,
    "name": "Tide Detergent Original Bar - 125g",
    "barcode": 4902430431149,
    "price": 6.73,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 11962,
    "name": "Tide Detergent Original Bar - 380g",
    "barcode": 4902430278119,
    "price": 17.76,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 11963,
    "name": "Tide Detergent with Downy Bar - 125g",
    "barcode": 4902430411530,
    "price": 6.7,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 11964,
    "name": "Tide Detergent Powder Original Taba Tie - 6x80g",
    "barcode": 4902430587907,
    "price": 49.98,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 11965,
    "name": "Tide Detergent Powder with Downy Tie - 6x74g",
    "barcode": 4902430611312,
    "price": 50.43,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 11966,
    "name": "UFC Banana Catsup Pack - 100g",
    "barcode": 14285002789,
    "price": 6.61,
    "brand": "UFC",
    "category": "Oil and Sauces"
  },
  {
    "id": 11967,
    "name": "UFC Banana Catsup Bottle - 320g",
    "barcode": 14285000068,
    "price": 20.44,
    "brand": "UFC",
    "category": "Oil and Sauces"
  },
  {
    "id": 11968,
    "name": "Unipak Mackerel Natural Oil Can - 155g",
    "barcode": 4800154013057,
    "price": 23.84,
    "brand": "Unipak",
    "category": "Canned Seafood"
  },
  {
    "id": 11969,
    "name": "Wilkins Distilled Water Bottle - 7000ml",
    "barcode": 4801981164714,
    "price": 83.08,
    "brand": "Wilkins",
    "category": "Water"
  },
  {
    "id": 11970,
    "name": "Winston Reds Pack - 20 sticks",
    "barcode": 48040594,
    "price": 107.64,
    "brand": "Winston",
    "category": "Cigarettes"
  },
  {
    "id": 11971,
    "name": "Winston Lights Pack - 20 sticks",
    "barcode": 48039871,
    "price": 107.56,
    "brand": "Winston",
    "category": "Cigarettes"
  },
  {
    "id": 11973,
    "name": "Youngs Town Sardines Green Can - 155g",
    "barcode": 4800527629625,
    "price": 15.54,
    "brand": "Youngs Town",
    "category": "Canned Seafood"
  },
  {
    "id": 11975,
    "name": "Youngs Town Sardines Red Can - 155g",
    "barcode": 4800527123505,
    "price": 16.45,
    "brand": "Youngs Town",
    "category": "Canned Seafood"
  },
  {
    "id": 11976,
    "name": "Zesto RTD Choco Doy Tetra Pack - 200ml",
    "barcode": 4804888800440,
    "price": 13.44,
    "brand": "Zesto",
    "category": "Milk"
  },
  {
    "id": 11977,
    "name": "Zonrox Bleach Colorsafe Bottle - 225ml",
    "barcode": 4800047841729,
    "price": 19.99,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 11978,
    "name": "Zonrox Bleach Regular Bottle - 100ml",
    "barcode": 4800047840043,
    "price": 6.3,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 11979,
    "name": "Zonrox Bleach Regular Bottle - 1000ml",
    "barcode": 4800047840012,
    "price": 32.37,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 11980,
    "name": "Zonrox Bleach Regular Bottle - 250ml",
    "barcode": 4800047840036,
    "price": 11.08,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 11981,
    "name": "Zonrox Bleach Regular Bottle - 500ml",
    "barcode": 4800047840029,
    "price": 17.17,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 11982,
    "name": "Big 250 Apple Juice Tetra Pack - 10x250ml",
    "barcode": 4804888889742,
    "price": 76.95,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11983,
    "name": "Big 250 Mango Juice Tetra Pack - 10x250ml",
    "barcode": 4804888900133,
    "price": 81.79,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11984,
    "name": "Big 250 Orange Juice Tetra Pack - 10x250ml",
    "barcode": 4804888889728,
    "price": 76.58,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11985,
    "name": "Big 250 Pineapple Juice Tetra Pack - 10x250ml",
    "barcode": 4804888900140,
    "price": 77.04,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11986,
    "name": "Emperador Brandy Light Case - 12x750ml",
    "barcode": 14800142110086,
    "price": 1192.48,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 11987,
    "name": "Ginebra Gin Round Case  - 24x350ml",
    "barcode": 14800130100020,
    "price": 1173.55,
    "brand": "Ginebra",
    "category": "Alcohol"
  },
  {
    "id": 11988,
    "name": "Ligo Sardines Green Can - 100x155g",
    "barcode": 14800163443040,
    "price": 1793.34,
    "brand": "Ligo",
    "category": "Canned Seafood"
  },
  {
    "id": 11989,
    "name": "Ligo Sardines Red Can - 100x155g",
    "barcode": 14800163443033,
    "price": 1811.6,
    "brand": "Ligo",
    "category": "Canned Seafood"
  },
  {
    "id": 11990,
    "name": "Fortune Extra Menthol Fliptop Long Ream - 10x20 sticks",
    "barcode": 4800177024207,
    "price": 1086.22,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 11991,
    "name": "Marlboro Lights Fliptop Ream - 10x20 sticks",
    "barcode": 7623900001033,
    "price": 1181.77,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 11992,
    "name": "Marlboro Red Fliptop Ream - 10x20 sticks",
    "barcode": 7616400001573,
    "price": 1181.16,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 11993,
    "name": "Winston Lights Ream - 10x20 sticks",
    "barcode": 4800177039201,
    "price": 1086.99,
    "brand": "Winston",
    "category": "Cigarettes"
  },
  {
    "id": 11994,
    "name": "Winston Reds Ream - 10x20 sticks",
    "barcode": 4800177073205,
    "price": 1087.47,
    "brand": "Winston",
    "category": "Cigarettes"
  },
  {
    "id": 11995,
    "name": "Alaska Evaporada Can - 48x370ml",
    "barcode": 14800575140377,
    "price": 1191.18,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 11996,
    "name": "Bear Brand Milk Powdered Iron Sachet - 128x33g",
    "barcode": 4800361409087,
    "price": 1092.41,
    "brand": "Bear Brand",
    "category": "Milk"
  },
  {
    "id": 11997,
    "name": "Big 250 Grape Juice Tetra Pack - 10x250ml",
    "barcode": 4804888889766,
    "price": 77.4,
    "brand": "Big 250",
    "category": "RTD"
  },
  {
    "id": 11998,
    "name": "C2 Grean Tea Apple Case - 24x500ml",
    "barcode": 14800016052139,
    "price": 598.46,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 11999,
    "name": "C2 Green Tea Lemon Case - 355ml x 24",
    "barcode": 14800016052054,
    "price": 430.61,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 12000,
    "name": "C2 Green Tea Lemon Case - 500ml x 24",
    "barcode": 14800016052146,
    "price": 599.87,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 12002,
    "name": "Cloud 9 Classic Dispenser box - 12x28g",
    "barcode": 4800010781076,
    "price": 71.1,
    "brand": "Cloud 9",
    "category": "Candies and Chocolates"
  },
  {
    "id": 12003,
    "name": "Coke Regular Case - 12x1.5L",
    "barcode": 4801981016075,
    "price": 663.5,
    "brand": "Coke",
    "category": "Softdrinks"
  },
  {
    "id": 12004,
    "name": "Cow Bell Condensada Box - 48x300ml",
    "barcode": 14800575370309,
    "price": 1384.73,
    "brand": "Cow Bell",
    "category": "Milk"
  },
  {
    "id": 12005,
    "name": "Datu Puti Vinegar Box - 72x100ml",
    "barcode": 14801668602222,
    "price": 322.43,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 12006,
    "name": "Datu Puti Soy Sauce Sachet - 60x200ml",
    "barcode": 14801668602031,
    "price": 535.19,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 12007,
    "name": "Datu Puti Soy Sauce Sachet - 72x100ml",
    "barcode": 14801668602215,
    "price": 369.45,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 12008,
    "name": "Datu Puti Vinegar Box - 60x200ml",
    "barcode": 14801668602024,
    "price": 409.69,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 12009,
    "name": "Del Monte Juice Pineapple Juice with Vitamin A-C-E Box - 24x240ml",
    "barcode": 14800024562699,
    "price": 570.92,
    "brand": "Del Monte",
    "category": "RTD"
  },
  {
    "id": 12010,
    "name": "Emperador Brandy Light Case - 20x350ml",
    "barcode": 14800142110161,
    "price": 993.5,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 12011,
    "name": "Emperador Brandy Light Case - 15x500ml",
    "barcode": 14800142110079,
    "price": 1051.96,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 12013,
    "name": "Great Taste 3in1 White Twinpack Box - 240x50g",
    "barcode": 14800016022262,
    "price": 2146.3,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 12014,
    "name": "Homi Mami Beef Brisket Box - 72x55g",
    "barcode": 14800110026494,
    "price": 545.81,
    "brand": "Homi Mami",
    "category": "Rice and Noodles"
  },
  {
    "id": 12015,
    "name": "Fortune Mint Splash Ream - 10x20 sticks",
    "barcode": 4806504611591,
    "price": 1086.16,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 12016,
    "name": "Great Taste White Coffee Box - 240x30g",
    "barcode": 14800016021043,
    "price": 1450.99,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 12017,
    "name": "Homi Mami Chiligarlic Beef Pack - 72x55g",
    "barcode": 14806022901881,
    "price": 581.64,
    "brand": "Homi Mami",
    "category": "Rice and Noodles"
  },
  {
    "id": 12018,
    "name": "Homi Mami Chicken N Garlic Box - 72x55g",
    "barcode": 14800110025992,
    "price": 545.42,
    "brand": "Homi Mami",
    "category": "Rice and Noodles"
  },
  {
    "id": 12019,
    "name": "Kopiko Coffee Brown Twin Pack Sachet - 120x55g",
    "barcode": 18998666001716,
    "price": 1192.21,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 12020,
    "name": "Kopiko Coffee Cafe Blanca Hanger Sachet - 240x30g",
    "barcode": 18996001414306,
    "price": 1565.07,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 12021,
    "name": "Kopiko Coffee Cafe Blanca Twin Pack Sachet - 120x52g",
    "barcode": 18998666001723,
    "price": 1191.81,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 12022,
    "name": "Kopiko Coffee Brown Hanger Sachet - 240x27.5g",
    "barcode": 18996001410704,
    "price": 1565.65,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 12023,
    "name": "Lucky Me Noodle Beef Pack - 72x55g",
    "barcode": 14807770270014,
    "price": 556.51,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12024,
    "name": "Lucky Me Noodle Chicken Pack - 72x55g",
    "barcode": 14807770270021,
    "price": 556.71,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12025,
    "name": "Lucky Me Noodle Spicy Beef Pack - 72x55g",
    "barcode": 14807770272094,
    "price": 574.03,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12026,
    "name": "Lucky Me Pancit Canton Kalamansi Pack - 72x80g",
    "barcode": 14807770273671,
    "price": 847.63,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12027,
    "name": "Lucky Me Pancit Canton Original Pack - 72x80g",
    "barcode": 14807770273701,
    "price": 847.63,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12028,
    "name": "Lucky Me Pancit Canton Sweet & Spicy Pack - 72x80g",
    "barcode": 14807770273718,
    "price": 847.69,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12029,
    "name": "Youngs Town Sardines Green Can - 100x155g",
    "barcode": 14800527629622,
    "price": 1733.33,
    "brand": "Youngs Town",
    "category": "Canned Seafood"
  },
  {
    "id": 12030,
    "name": "Youngs Town Sardines Red Can - 100x155g",
    "barcode": 14800527123502,
    "price": 1763.39,
    "brand": "Youngs Town",
    "category": "Canned Seafood"
  },
  {
    "id": 12031,
    "name": "Zesto RTD Choco Doy Tetra Pack - 10x200ml",
    "barcode": 4804888800457,
    "price": 148.95,
    "brand": "Zesto",
    "category": "Milk"
  },
  {
    "id": 12033,
    "name": "Mega Sardines Green Easy Open Can - 100x155g",
    "barcode": 14806504710017,
    "price": 1798.6,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 12034,
    "name": "Nescafe Coffee Creamy White Twin Pack Sachet - 200x52g",
    "barcode": 4800361405492,
    "price": 1978.13,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 12035,
    "name": "Mega Sardines Hot Easy Open Can - 100x155g",
    "barcode": 14806504710024,
    "price": 1823.87,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 12036,
    "name": "Royal Tru-Orange Regular Case - 12x1.5L",
    "barcode": 4801981016174,
    "price": 663.96,
    "brand": "Royal",
    "category": "Softdrinks"
  },
  {
    "id": 12037,
    "name": "Silver Swan Soy Sauce Pouch - 60x200ml",
    "barcode": 24800344001943,
    "price": 538.19,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 12038,
    "name": "Reno Spread Liver Can - 48x85g",
    "barcode": 14805885171004,
    "price": 788.45,
    "brand": "Reno",
    "category": "Spreads and Dressings"
  },
  {
    "id": 12039,
    "name": "Silver Swan Sukang Puti Pouch - 60x200ml",
    "barcode": 24800344004944,
    "price": 388.68,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 12040,
    "name": "Sprite Regular Case - 12x1.5L",
    "barcode": 4801981016273,
    "price": 663.27,
    "brand": "Sprite",
    "category": "Softdrinks"
  },
  {
    "id": 12041,
    "name": "Silver Swan Sukang Puti Pouch - 72x100ml",
    "barcode": 14800344004961,
    "price": 300.85,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 12042,
    "name": "Fortune Lights Tribal Blue Label Ream - 10x20 sticks",
    "barcode": 4806504611430,
    "price": 1086.67,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 12043,
    "name": "Silver Swan Soy Sauce Junior Pouch Pouch - 72x100ml",
    "barcode": 14800344001960,
    "price": 381.47,
    "brand": "Silver Swan",
    "category": "Condiments and Spices"
  },
  {
    "id": 12044,
    "name": "Kopiko Coffee Black 3in1 Astig Twin Pack Sachet - 120x50g",
    "barcode": 18998666001709,
    "price": 1191.72,
    "brand": "Kopiko",
    "category": "Coffee"
  },
  {
    "id": 12045,
    "name": "Marlboro Ice Blast Filter Ream - 10x20 sticks",
    "barcode": 4806504616213,
    "price": 1181.21,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 12046,
    "name": "Marlboro Black Menthol Fliptop Ream - 10x20 sticks",
    "barcode": 4806504610198,
    "price": 1181.09,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 12048,
    "name": "Mighty Cigar Filter King 20s Red Hardpack Ream - 10x20 sticks",
    "barcode": 4806501229386,
    "price": 909.32,
    "brand": "Mighty Cigar",
    "category": "Cigarettes"
  },
  {
    "id": 12049,
    "name": "Mighty Cigar Menthol 20s White Hardpack Ream - 10x20 sticks",
    "barcode": 4806501229317,
    "price": 909.32,
    "brand": "Mighty Cigar",
    "category": "Cigarettes"
  },
  {
    "id": 12050,
    "name": "C2 Green Tea Apple Case - 355ml x 24",
    "barcode": 14800016052047,
    "price": 430.66,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 12051,
    "name": "Emperador Brandy Light Case - 12x1L",
    "barcode": 14800142110109,
    "price": 1562.45,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 12052,
    "name": "Ginebra Frasco Case - 12x700ml",
    "barcode": 14800130100013,
    "price": 1155.04,
    "brand": "Ginebra",
    "category": "Alcohol"
  },
  {
    "id": 12053,
    "name": "Lucky Me Pancit Canton Chilimansi Pack - 72x80g",
    "barcode": 14807770273695,
    "price": 848.26,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12054,
    "name": "Lucky Me Pancit Canton Hot Chili Pack - 72x80g",
    "barcode": 14807770273688,
    "price": 848.19,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 12056,
    "name": "Nescafe Coffee Creamy White Sachet - 240x28g",
    "barcode": 4800361393102,
    "price": 1390.98,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 12057,
    "name": "Happy Diaper Baby Pants M Pack - 12pcs",
    "barcode": 4802288812124,
    "price": 72.87,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 12059,
    "name": "Casa Lucia Refined Sugar Pack - 1/4kg",
    "barcode": 4809010908223,
    "price": 13.31,
    "brand": "Lucky Sugar",
    "category": "Condiments and Spices"
  },
  {
    "id": 12060,
    "name": "Alaska Condensada Combi Tetrapack - 250ml",
    "barcode": 4800575135093,
    "price": 37.31,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 12061,
    "name": "Datu Puti Vinegar Sakto Pack - 144x60ml",
    "barcode": 24801668600737,
    "price": 428.39,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 12062,
    "name": "Datu Puti Soy Sauce Sakto Box - 144x60ml",
    "barcode": 24801668600720,
    "price": 457.67,
    "brand": "Datu Puti",
    "category": "Condiments and Spices"
  },
  {
    "id": 12063,
    "name": "Royal Red Standard Matches - 10 boxes",
    "barcode": 4800112010210,
    "price": 15.44,
    "brand": "Royal Red",
    "category": "Party Needs"
  },
  {
    "id": 12064,
    "name": "Alaska Evaporated Milk - 370ml",
    "barcode": 4800575110373,
    "price": 36.93,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 12102,
    "name": "Lampein Baby Diaper M Pack - 60pcs",
    "barcode": 4806506315404,
    "price": 319.39,
    "brand": "Lampein",
    "category": "Diapers"
  },
  {
    "id": 12105,
    "name": "Lampein Baby Diaper L Pack - 54pcs",
    "barcode": 4806506315428,
    "price": 318.96,
    "brand": "Lampein",
    "category": "Diapers"
  },
  {
    "id": 12106,
    "name": "Gin Kapitan Bottle - 350ml",
    "barcode": 4800220533359,
    "price": 40.34,
    "brand": "Gin Kapitan",
    "category": "Alcohol"
  },
  {
    "id": 12110,
    "name": "Rinbee Cheese Sticks Pack - 26g",
    "barcode": 4891208040181,
    "price": 3.61,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 12111,
    "name": "Oishi Potato Fries Cheese Pack - 21g",
    "barcode": 4800194104777,
    "price": 3.37,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 12115,
    "name": "Lorins Patis Pouch - 150ml",
    "barcode": 4804888999342,
    "price": 8.13,
    "brand": "Lorins",
    "category": "Condiments and Spices"
  },
  {
    "id": 13092,
    "name": "Maxx Dalandan Orange Pack - 50pcs",
    "barcode": 4800016303081,
    "price": 27.96,
    "brand": "Maxx",
    "category": "Candies and Chocolates"
  },
  {
    "id": 13094,
    "name": "Happy Diaper Clr Assorted M Pack - 30pcs",
    "barcode": 4802288852304,
    "price": 161.18,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 13095,
    "name": "Happy Diaper Clr Assorted XL Pack - 30pcs",
    "barcode": 4802288854308,
    "price": 197.4,
    "brand": "Happy",
    "category": "Diapers"
  },
  {
    "id": 13096,
    "name": "Bonamil Milk Pack - 400g",
    "barcode": 4800153149481,
    "price": 210.28,
    "brand": "Bonamil",
    "category": "Milk"
  },
  {
    "id": 13097,
    "name": "Bonna Infant Formula 0-6 Months Pack - 400g",
    "barcode": 4800153149474,
    "price": 209.73,
    "brand": "Bonna Infant",
    "category": "Milk"
  },
  {
    "id": 13098,
    "name": "Calla Detergent Powder Floral Fresh Bag - 400g",
    "barcode": 4806501709116,
    "price": 36.85,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 13099,
    "name": "Aji Ginisa Flavor Mix Tie - 16x7g",
    "barcode": 4801958349106,
    "price": 26.16,
    "brand": "Ajinomoto",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 13107,
    "name": "Great Taste 3In1 White Smooth and Chocolatey Twin Pack Tie - 10x50g",
    "barcode": 4800016022258,
    "price": 87.84,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 13110,
    "name": "Energen Cereal Vanilla Tie - 10x40g",
    "barcode": 8996001440124,
    "price": 67.08,
    "brand": "Energen",
    "category": "Bread and Biscuits"
  },
  {
    "id": 13115,
    "name": "Summit Spring Water Case - 35x350ml",
    "barcode": 14800014148087,
    "price": 271.87,
    "brand": "Summit",
    "category": "Water"
  },
  {
    "id": 13119,
    "name": "Summit Spring Water Case - 24x500ml",
    "barcode": 14800014141088,
    "price": 252.81,
    "brand": "Summit",
    "category": "Water"
  },
  {
    "id": 13123,
    "name": "Birch Tree Fortified Powdered Milk Sachet - 160x33g",
    "barcode": 20748485401496,
    "price": 1169.42,
    "brand": "Birch Tree",
    "category": "Milk"
  },
  {
    "id": 13127,
    "name": "Nestle Chuckie Tetra Pack - 10x150ml",
    "barcode": 4800361392464,
    "price": 166.41,
    "brand": "Chuckie",
    "category": "Milk"
  },
  {
    "id": 13131,
    "name": "C2 Green Tea Apple Case - 1L x 12",
    "barcode": 14800016052771,
    "price": 454.26,
    "brand": "C2",
    "category": "RTD"
  },
  {
    "id": 13135,
    "name": "Del Monte Juice Pineapple Heartsmart Box - 24x240ml",
    "barcode": 14800024572988,
    "price": 617.78,
    "brand": "Del Monte",
    "category": "RTD"
  },
  {
    "id": 13139,
    "name": "Angel Evaporada Liquid Creamer Can - 48x410ml",
    "barcode": 10748485400713,
    "price": 994.14,
    "brand": "Angel",
    "category": "Milk"
  },
  {
    "id": 13143,
    "name": "Nestle All Purpose Cream Tetra Pack - 24x250ml",
    "barcode": 14800361061329,
    "price": 1350.14,
    "brand": "Nestle",
    "category": "Spreads and Dressings"
  },
  {
    "id": 13147,
    "name": "Mang Tomas Lechon Sauce Case - 24x325g",
    "barcode": 14801668100261,
    "price": 736.29,
    "brand": "Mang Tomas",
    "category": "Condiments and Spices"
  },
  {
    "id": 13151,
    "name": "Refresh Mineral Water Case - 24x500ml",
    "barcode": 14800016073622,
    "price": 166.61,
    "brand": "Refresh",
    "category": "Water"
  },
  {
    "id": 13155,
    "name": "Refresh Mineral Water Case - 24x350ml",
    "barcode": 14800016073639,
    "price": 125.39,
    "brand": "Refresh",
    "category": "Water"
  },
  {
    "id": 13159,
    "name": "Birch Tree Fortified Powdered Milk Tie - 8x33g",
    "barcode": 748485401492,
    "price": 56.65,
    "brand": "Birch Tree",
    "category": "Milk"
  },
  {
    "id": 13163,
    "name": "Mountain Dew Case - 12x300ml",
    "barcode": 14803925280082,
    "price": 134.12,
    "brand": "Mountain Dew",
    "category": "Softdrinks"
  },
  {
    "id": 13167,
    "name": "Choco Mucho Cookies & Cream Bar Pack - 10x30g",
    "barcode": 4800092661167,
    "price": 62.51,
    "brand": "Choco Mucho",
    "category": "Candies and Chocolates"
  },
  {
    "id": 13667,
    "name": "Sprite Mismo Case - 12x300ml",
    "barcode": 4801981118601,
    "price": 132.66,
    "brand": "Sprite",
    "category": "Softdrinks"
  },
  {
    "id": 13672,
    "name": "Bear Brand Adult Plus Coffee Pack - 8x33g",
    "barcode": 4800361403986,
    "price": 116.66,
    "brand": "Bear Brand",
    "category": "Coffee"
  },
  {
    "id": 13675,
    "name": "Great Taste White Crema Stream - 10x30g",
    "barcode": 4800016022197,
    "price": 59.33,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 13678,
    "name": "Great Taste White Crema Twin Pack Tie - 10x50g",
    "barcode": 4800016022180,
    "price": 88.89,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 13681,
    "name": "Great Taste White Caramel Tie - 10x30g",
    "barcode": 4800016022210,
    "price": 59.42,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 13684,
    "name": "Great Taste White Caramel Twin Pack Tie - 10x50g",
    "barcode": 4800016022227,
    "price": 88.96,
    "brand": "Great Taste",
    "category": "Coffee"
  },
  {
    "id": 13691,
    "name": "Fundador Light Bottle - 1L",
    "barcode": 8410162100234,
    "price": 338.23,
    "brand": "Fundador",
    "category": "Alcohol"
  },
  {
    "id": 13694,
    "name": "Century Tuna Flakes Oil - 125g",
    "barcode": 748485103693,
    "price": 23.14,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 13706,
    "name": "Aji Panda Seasoning Tie - 18x11g",
    "barcode": 4801958341100,
    "price": 45.54,
    "brand": "Ajinomoto",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 14215,
    "name": "Argentina Corned Chicken Spicy Can - 150g",
    "barcode": 748485803685,
    "price": 26.49,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 14224,
    "name": "Argentina Corned Chicken Can - 150g",
    "barcode": 748485802473,
    "price": 25.82,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 14230,
    "name": "Argentina Corned Chicken Spicy Can - 100g",
    "barcode": 748485803708,
    "price": 17.45,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 14236,
    "name": "Argentina Corned Chicken Can - 100g",
    "barcode": 748485803692,
    "price": 17.33,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 14240,
    "name": "Alfonso I Brandy Light Bottle - 1L",
    "barcode": 8410028900091,
    "price": 261.88,
    "brand": "Alfonso",
    "category": "Alcohol"
  },
  {
    "id": 15278,
    "name": "Emperador Brandy Double Light Bottle - 1L",
    "barcode": 4800142118290,
    "price": 129.02,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 15284,
    "name": "Emperador Brandy Double Light Bottle - 750ml",
    "barcode": 4800142118283,
    "price": 97.88,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 15290,
    "name": "Rexona Deo-Lotion Ice Cool Tie - 3x3ml",
    "barcode": 4800888160027,
    "price": 18.57,
    "brand": "Rexona",
    "category": "Bath and Body Care"
  },
  {
    "id": 15297,
    "name": "Rexona Deo-Lotion Passion Tie - 3x3ml",
    "barcode": 4800888151100,
    "price": 18.3,
    "brand": "Rexona",
    "category": "Bath and Body Care"
  },
  {
    "id": 15309,
    "name": "Alfonso I Brandy Light - 12 x 1L",
    "barcode": 8410028900107,
    "price": 3164.11,
    "brand": "Alfonso",
    "category": "Alcohol"
  },
  {
    "id": 15316,
    "name": "CDO Karne Norte Can - 48 x 100g",
    "barcode": 14800249909408,
    "price": 816.59,
    "brand": "CDO",
    "category": "Packed Meat"
  },
  {
    "id": 15323,
    "name": "Nescafe Coffee Classic Sachet - 60x25g",
    "barcode": 4800361339193,
    "price": 1123.63,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 15347,
    "name": "Emperador Brandy Double Light 750ml x 12",
    "barcode": 14800142118280,
    "price": 1192.56,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 15355,
    "name": "Emperador Brandy Double Light 1L x 12",
    "barcode": 14800142118297,
    "price": 1562.5,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 15369,
    "name": "Birch Tree Fortified Choco Tie - 8x29g",
    "barcode": 748485401621,
    "price": 56.15,
    "brand": "Birch Tree",
    "category": "Milk"
  },
  {
    "id": 16407,
    "name": "SIP PURIFIED WATER BOTTLE - 350ML",
    "barcode": 4806531431209,
    "price": 7.53,
    "brand": "Sip",
    "category": "Water"
  },
  {
    "id": 16408,
    "name": "SIP PURIFIED WATER BOTTLE 500ML",
    "barcode": 4806531431216,
    "price": 9.12,
    "brand": "Sip",
    "category": "Water"
  },
  {
    "id": 16493,
    "name": "Wings Powder Solve Calamansi Tie 6x70g",
    "barcode": 8998866801614,
    "price": 26.89,
    "brand": "Wings",
    "category": "Laundry Products"
  },
  {
    "id": 16495,
    "name": "Wings Powder Solve Floral Fresh Tie 6x70g",
    "barcode": 8998866606851,
    "price": 24.54,
    "brand": "Wings",
    "category": "Laundry Products"
  },
  {
    "id": 16506,
    "name": "Silka Soap Orange Papaya Pack - 45g",
    "barcode": 4806507833358,
    "price": 10.76,
    "brand": "Silka",
    "category": "Bath and Body Care"
  },
  {
    "id": 16510,
    "name": "MEGA SARDNS TS XTRA HOT 155G",
    "barcode": 4806504710805,
    "price": 18.11,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 16518,
    "name": "MEGA FRIED SARDINES HOT & SPICY 155G",
    "barcode": 4806504710829,
    "price": 28.22,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 16526,
    "name": "MEGA FRIED SARDINES TAUSI 155G",
    "barcode": 4806504710812,
    "price": 28.73,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 16534,
    "name": "Alfonso I Brandy Light Bottle - 700ml",
    "barcode": 8410028900077,
    "price": 209.02,
    "brand": "Alfonso",
    "category": "Alcohol"
  },
  {
    "id": 16573,
    "name": "UFC Banana Catsup Pack - 48x100g - BOX",
    "barcode": 14285002796,
    "price": 377.28,
    "brand": "UFC",
    "category": "Oil and Sauces"
  },
  {
    "id": 16586,
    "name": "CAL CHEESE WAFER REGULAR PACK 35G",
    "barcode": 8996001356661,
    "price": 4.31,
    "brand": "Cal Cheese",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16587,
    "name": "CAL CHEESE WAFER PACK 53.5G",
    "barcode": 8996001350584,
    "price": 7.89,
    "brand": "Cal Cheese",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16588,
    "name": "Fres Candy Barley Mint Pack - 50x3g",
    "barcode": 8996001338063,
    "price": 28.13,
    "brand": "Fres Candy",
    "category": "Candies and Chocolates"
  },
  {
    "id": 16589,
    "name": "Fres Candy Mint Apple Peach Pack - 50x3g",
    "barcode": 8996001346365,
    "price": 27.56,
    "brand": "Fres Candy",
    "category": "Candies and Chocolates"
  },
  {
    "id": 16590,
    "name": "ENERGEN PANDESAL MATE TIE 10x30g",
    "barcode": 8996001603284,
    "price": 66.62,
    "brand": "Energen",
    "category": "RTD"
  },
  {
    "id": 16615,
    "name": "Beng-Beng Choco Wafer Pack - 20g",
    "barcode": 8886001038011,
    "price": 4.55,
    "brand": "Beng-Beng",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16630,
    "name": "Argentina Corned Beef Can - 48x150g",
    "barcode": 10748485800438,
    "price": 1474.72,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 16649,
    "name": "Silver Swan Wow Sarap All in one Seasoning 8gx12 Sachet",
    "barcode": 4800344020766,
    "price": 22.48,
    "brand": "Silver Swan",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 16662,
    "name": "Nissin Choco Wafer 12gx20s",
    "barcode": 4807770120213,
    "price": 42.44,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16670,
    "name": "Nissin Butter Coco Cracker Pack - 10x25g",
    "barcode": 4807770122170,
    "price": 46.27,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16678,
    "name": "Lucky Me Go Cup Mini La Paz Batchoy Cup - 40g",
    "barcode": 4807770271168,
    "price": 15.16,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 16688,
    "name": "Lucky Me Go Cup Mini Bulalo - 40g",
    "barcode": 4807770271175,
    "price": 15.2,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 16701,
    "name": "Lucky Me Go Cup Mini Spicy Bulalo - 40g",
    "barcode": 4807770273612,
    "price": 15.73,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 16709,
    "name": "Lucky Me Go Cup Mini Spicy Batchoy - 40g",
    "barcode": 4807770273810,
    "price": 15.23,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 16717,
    "name": "Dutchmill  UHT Yoghurt Drink Strawberry - 90ml",
    "barcode": 8851717200007,
    "price": 8.14,
    "brand": "Dutchmill",
    "category": "RTD"
  },
  {
    "id": 16727,
    "name": "Dutchmill UHT Yoghurt Drink Superfruits - 90ml",
    "barcode": 8853002303110,
    "price": 8.38,
    "brand": "Dutchmill",
    "category": "RTD"
  },
  {
    "id": 16735,
    "name": "Mama Sita's Oyster Sauce Sachet - 30gx12s",
    "barcode": 4804888809474,
    "price": 57.79,
    "brand": "Mama Sita's",
    "category": "Condiments and Spices"
  },
  {
    "id": 16743,
    "name": "Bingo Double Choco Singles 28g X 10s",
    "barcode": 4807770100611,
    "price": 47.15,
    "brand": "Bingo",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16751,
    "name": "Lucky Me La Paz Batchoy Pouch 55g",
    "barcode": 4807770272813,
    "price": 10.01,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 16759,
    "name": "Monde Special Mamon Mini Classic 23gX8s",
    "barcode": 4807770122422,
    "price": 49.57,
    "brand": "Monde",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16767,
    "name": "Eggnog Cookies 18g X 10s",
    "barcode": 4807770100963,
    "price": 46.72,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16775,
    "name": "Nissin Bread Stix Pack 20gx10s",
    "barcode": 4807770101502,
    "price": 46.29,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16779,
    "name": "Nissin King Wafer Choco - 22gx10s",
    "barcode": 4807770122262,
    "price": 46.5,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16786,
    "name": "Nissin King Wafer Peanut Butter 22gX10s",
    "barcode": 4807770122408,
    "price": 45.84,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16794,
    "name": "Nissin King Wafer Cheese 22gX10s",
    "barcode": 4807770122385,
    "price": 45.88,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16807,
    "name": "Nissin Wafer Double Choco 55g",
    "barcode": 4807770122644,
    "price": 8.85,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16815,
    "name": "Nissin Wafer Peanut Butter 50g",
    "barcode": 4807770122460,
    "price": 8.81,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16823,
    "name": "Nissin Wafer Cheese 50g",
    "barcode": 4807770122477,
    "price": 8.93,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 16857,
    "name": "Champion Todo Tipid Bar and Powder Pack Box - 48x145 + 40g",
    "barcode": 14806501703500,
    "price": 511.74,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 16867,
    "name": "Lucky Me Bulalo Pouch 55g",
    "barcode": 4807770272820,
    "price": 10.36,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 16878,
    "name": "CENTURY TUNA FLAKES HOT & SPICY 155G x50cans",
    "barcode": 10748485100415,
    "price": 1478.37,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 16886,
    "name": "CENTURY TUNA FLAKES HOT & SPICY 180GX48cans",
    "barcode": 10748485100095,
    "price": 1735.78,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 16894,
    "name": "CENTURY TUNA FLAKES IN OIL 48X180G BOX",
    "barcode": 10748485100088,
    "price": 1736.36,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 16902,
    "name": "CENTURY TUNA FLAKES IN OIL 50X155G BOX",
    "barcode": 10748485100408,
    "price": 1478.3,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 16910,
    "name": "CENTURY TUNA FLAKES IN OIL 50X125G BOX",
    "barcode": 10748485103690,
    "price": 1240.69,
    "brand": "Century",
    "category": "Canned Seafood"
  },
  {
    "id": 17954,
    "name": "555 Tuna Adobo - 50x155g Box",
    "barcode": 10748485700011,
    "price": 1135.58,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 17962,
    "name": "555 Tuna Mechado - 50x155g Box",
    "barcode": 10748485700042,
    "price": 1158.81,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 17969,
    "name": "555 Tuna Hot and Spicy - 50x155g Box",
    "barcode": 10748485700059,
    "price": 1268.8,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 17980,
    "name": "555 Tuna Caldereta - 50x155g Box",
    "barcode": 10748485700035,
    "price": 1136.08,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 17985,
    "name": "555 Tuna Afritada - 50x155g Box",
    "barcode": 10748485700028,
    "price": 1135.98,
    "brand": "555",
    "category": "Canned Seafood"
  },
  {
    "id": 18000,
    "name": "TIGER BEER BLACK STRONG 500ML CAN",
    "barcode": 4806033800015,
    "price": 47.62,
    "brand": "Tiger Beer",
    "category": "Alcohol"
  },
  {
    "id": 18008,
    "name": "TIGER BEER BLACK STRONG 24x500ml - BOX",
    "barcode": 14806033800012,
    "price": 1171.92,
    "brand": "Tiger Beer",
    "category": "Alcohol"
  },
  {
    "id": 18016,
    "name": "TIGER BEER CRYSTAL 330ML BOTTLE",
    "barcode": 86428260332,
    "price": 34.24,
    "brand": "Tiger Beer",
    "category": "Alcohol"
  },
  {
    "id": 18024,
    "name": "TIGER BEER CYSTAL LIGHT 24x330ml Box",
    "barcode": 86428210337,
    "price": 853.21,
    "brand": "Tiger Beer",
    "category": "Alcohol"
  },
  {
    "id": 18037,
    "name": "Piattos Roadhouse BBQ 80x40g - BOX",
    "barcode": 14800016633789,
    "price": 882.25,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 18045,
    "name": "Jack n Jill Potato Chips Vcut Spicy Barbeque - 25gx80s - BOX",
    "barcode": 14800016622530,
    "price": 882.62,
    "brand": "Potato Chips",
    "category": "Chips"
  },
  {
    "id": 18053,
    "name": "Piattos Sourcream and Onion - 80x40g - BOX",
    "barcode": 14800016671804,
    "price": 882.37,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 18061,
    "name": "Nova Country Cheddar 80x40g - BOX",
    "barcode": 14800016663809,
    "price": 882.97,
    "brand": "Nova",
    "category": "Chips"
  },
  {
    "id": 18069,
    "name": "Piattos Cheese 80x40g - BOX",
    "barcode": 14800016644808,
    "price": 882.73,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 18078,
    "name": "Chicharon ni Mang Juan Espesyal Sukang Paomboong Box- 26g x 80",
    "barcode": 14800016110532,
    "price": 426.74,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 18086,
    "name": "Chicharon ni Mang Juan Chicharon Espesyal Suka't Sili Box - 26g x 80",
    "barcode": 14800016110549,
    "price": 426.53,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 18094,
    "name": "Jack n' Jill Chik'N Skin ni Mang Juan Box - 17g x 100",
    "barcode": 14800016115018,
    "price": 533.43,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 18102,
    "name": "Alaska Evaporada Can - 48x140ml",
    "barcode": 14800575140155,
    "price": 524.77,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 18108,
    "name": "Clover Chips Cheese-22g x100 - BOX",
    "barcode": 14800216120010,
    "price": 573.55,
    "brand": "Clover Chips",
    "category": "Chips"
  },
  {
    "id": 18117,
    "name": "Mr. Chips Cheese Snack Box 26g x 100",
    "barcode": 14800016652032,
    "price": 433.03,
    "brand": "Mr. Chips",
    "category": "Chips"
  },
  {
    "id": 18125,
    "name": "Jack N Jill Potato Chips Vcut Cheese-25gx80s - BOX",
    "barcode": 14800016603256,
    "price": 882.52,
    "brand": "Potato Chips",
    "category": "Chips"
  },
  {
    "id": 18134,
    "name": "Jack N Jill Chicharron Mang Juan Paombong - 90gx18s - BOX",
    "barcode": 14800016110518,
    "price": 283.81,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 18143,
    "name": "Jack N Jill Chicharron Mang Juan Suka't Sili - 90gx18s - BOX",
    "barcode": 14800016110525,
    "price": 284.26,
    "brand": "Mang Juan",
    "category": "Chips"
  },
  {
    "id": 18152,
    "name": "Cheese Ring Snack - 20gx30s - BOX",
    "barcode": 10729461168155,
    "price": 191.8,
    "brand": "Cheese Ring",
    "category": "Chips"
  },
  {
    "id": 18161,
    "name": "Oishi Crispy Patata - 24gx100s - BOX",
    "barcode": 14800194104866,
    "price": 518.62,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 18170,
    "name": "Oishi Marty's Spicy - 22gx100s - BOX",
    "barcode": 14800194152898,
    "price": 518.2,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 18179,
    "name": "Oishi Marty's Salt and Vinegar - 22gx100s - BOX",
    "barcode": 14800194152904,
    "price": 518.14,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 18188,
    "name": "Oishi Marty's Plain Salted - 22gx100s - BOX",
    "barcode": 14800194152881,
    "price": 518.1,
    "brand": "Oishi",
    "category": "Chips"
  },
  {
    "id": 18197,
    "name": "Chippy BBQ Box - 27g x 100",
    "barcode": 14800016642026,
    "price": 533.06,
    "brand": "Chippy",
    "category": "Chips"
  },
  {
    "id": 18205,
    "name": "UFC Banana Catsup Bottle - 24x320g - BOX",
    "barcode": 10014285000065,
    "price": 523.62,
    "brand": "UFC",
    "category": "Oil and Sauces"
  },
  {
    "id": 18226,
    "name": "Piattos Cheese - 85GX50 - BOX",
    "barcode": 14800016644501,
    "price": 1238.91,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 18234,
    "name": "Piattos Sour Cream Onion - 85GX50s - BOX",
    "barcode": 14800016671507,
    "price": 1238.5,
    "brand": "Piattos",
    "category": "Chips"
  },
  {
    "id": 18242,
    "name": "Jack n' Jill Potato Chips Vcut Spicy Barbeque - 60GX50s - BOX",
    "barcode": 14800016625531,
    "price": 1303.77,
    "brand": "Potato Chips",
    "category": "Chips"
  },
  {
    "id": 18250,
    "name": "Cheese Ring Snack - 60Gx25s - BOX",
    "barcode": 14801688103518,
    "price": 348.36,
    "brand": "Regent",
    "category": "Chips"
  },
  {
    "id": 18258,
    "name": "Cheez It 25G X100s - BOX",
    "barcode": 14800523220076,
    "price": 533.5,
    "brand": "Cheez It",
    "category": "Chips"
  },
  {
    "id": 18266,
    "name": "Clover Chips Cheese - 55gx40 - BOX",
    "barcode": 14800216110066,
    "price": 662.39,
    "brand": "Clover Chips",
    "category": "Chips"
  },
  {
    "id": 18270,
    "name": "Fortune Red Ream 10x20 sticks",
    "barcode": 4800177002205,
    "price": 1086.46,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 18279,
    "name": "Hany Milk Choco Sp Milk 260gx20packs",
    "barcode": 14804888589502,
    "price": 723.11,
    "brand": "Hany",
    "category": "Candies and Chocolates"
  },
  {
    "id": 18288,
    "name": "Saba Mackerel in Natural Oil - 155gx100 - Box",
    "barcode": 10096785013295,
    "price": 2728.18,
    "brand": "Saba",
    "category": "Canned Seafood"
  },
  {
    "id": 18296,
    "name": "MEGA SARDINES TOMATO SAUCE XTRA HOT155GX100",
    "barcode": 14806504710802,
    "price": 2003.59,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 18305,
    "name": "MEGA FRIED SARDINES HS 155GX100",
    "barcode": 4806504710829,
    "price": 2978.41,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 18314,
    "name": "MEGA FRIED SARDINES TAUSI 155GX100",
    "barcode": 4806504710812,
    "price": 2978.28,
    "brand": "Mega",
    "category": "Canned Seafood"
  },
  {
    "id": 18323,
    "name": "San Marino Tuna Corned - 100gx48 - BOX",
    "barcode": 14800249006589,
    "price": 1169.36,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 18332,
    "name": "San Marino Tuna Corned - 150gx48 - BOX",
    "barcode": 14800249006602,
    "price": 1534.98,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 18341,
    "name": "San Marino Tuna Corned - 85gx48 - BOX",
    "barcode": 14800249008507,
    "price": 1102.42,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 18350,
    "name": "San Marino Tuna Corned Chili - 100gx48 - BOX",
    "barcode": 14800249010081,
    "price": 1181.36,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 18359,
    "name": "San Marino Tuna Corned Chili - 150gx48 - BOX",
    "barcode": 14800249006626,
    "price": 1534.55,
    "brand": "San Marino",
    "category": "Canned Seafood"
  },
  {
    "id": 18371,
    "name": "Tang Juice Powder Orange Case - 25g x 144",
    "barcode": 7622300559984,
    "price": 2403.04,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18373,
    "name": "Surf Detergent Powder Cherry Blossom - 65GX6X48 - Box",
    "barcode": 24800888544807,
    "price": 1411.35,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 18382,
    "name": "Surf Detergent Powder Kalamansi - 57GX6X48 - Box",
    "barcode": 24800888188841,
    "price": 1410.86,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 18395,
    "name": "Tang Juice Powder Pineapple Case -25g x 144",
    "barcode": 7622300601683,
    "price": 2403.41,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18404,
    "name": "Tang Juice Powder Grape Case - 25g x 144",
    "barcode": 7622300637989,
    "price": 2403.71,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18412,
    "name": "Nova Country Cheddar Case - 78g x 50",
    "barcode": 14800016663502,
    "price": 1303.69,
    "brand": "Nova",
    "category": "Chips"
  },
  {
    "id": 18421,
    "name": "Del Monte Juice Pine with Fiber Case - 240ml x 24",
    "barcode": 14800024562613,
    "price": 617.93,
    "brand": "Del Monte",
    "category": "RTD"
  },
  {
    "id": 18431,
    "name": "Tang Juice Powder Mango Case -25g x 144",
    "barcode": 7622300601690,
    "price": 2403.36,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18439,
    "name": "Payless Pancit Canton Kalamansi Case 130g x 48",
    "barcode": 14800016555982,
    "price": 685.04,
    "brand": "Payless",
    "category": "Rice and Noodles"
  },
  {
    "id": 18448,
    "name": "Payless Pancit Canton Chilimansi Case - 130g x 48",
    "barcode": 14800016556514,
    "price": 684.92,
    "brand": "Payless",
    "category": "Rice and Noodles"
  },
  {
    "id": 18457,
    "name": "Payless Pancit Canton Hotchili Case 130g x 48",
    "barcode": 14800016556804,
    "price": 685.07,
    "brand": "Payless",
    "category": "Rice and Noodles"
  },
  {
    "id": 18466,
    "name": "Nestea Iced Tea Powder Lemon Case -25g x 144",
    "barcode": 4800361379564,
    "price": 2451.57,
    "brand": "Nestea",
    "category": "Powdered Drink"
  },
  {
    "id": 18475,
    "name": "Nestea Iced Tea Powder Apple Case -25g x 144",
    "barcode": 4800361382090,
    "price": 2451.67,
    "brand": "Nestea",
    "category": "Powdered Drink"
  },
  {
    "id": 18485,
    "name": "Tang Juice Powder Dalandan Case - 25g x 144",
    "barcode": 17622300858565,
    "price": 2402.81,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18494,
    "name": "Tang Juice Powder Calamansi Case- 25g x 144",
    "barcode": 17622300858589,
    "price": 2403.25,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18503,
    "name": "Tang Juice Powder Pomelo Case -25g x 144",
    "barcode": 17622210706758,
    "price": 2403.03,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18510,
    "name": "Surf Detergent Powder Rose Fresh - 57GX6X48 - Box",
    "barcode": 24800888544418,
    "price": 1411.59,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 18519,
    "name": "Surf Detergent Powder Sun Fresh - 57GX6X48 - Box",
    "barcode": 24800888188834,
    "price": 1411.07,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 18528,
    "name": "Surf Detergent Powder Tawas - 57GX6X48 - Box",
    "barcode": 24800888188858,
    "price": 1411.76,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 18537,
    "name": "Calla Powder Rose Grdn 100gx6x20",
    "barcode": 14806501709366,
    "price": 1208,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 18546,
    "name": "Calla Pwd Fabcon 100gx6x20",
    "barcode": 14806501709120,
    "price": 1207.11,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 18555,
    "name": "Calla Pwdr Flrl Frsh 400gx24",
    "barcode": 14806501709113,
    "price": 921.34,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 18564,
    "name": "Nestle Chuckie Bulilit-110mlx60 - Box",
    "barcode": 4800361395694,
    "price": 715.4,
    "brand": "Chuckie",
    "category": "Milk"
  },
  {
    "id": 18573,
    "name": "Champion Detergent Regular Supra Clean-145gx96",
    "barcode": 14806501706112,
    "price": 847.95,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 18592,
    "name": "Zonrox Bleach Regular Bottle - 48x250ml",
    "barcode": 14800047840033,
    "price": 608.17,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 18600,
    "name": "Zonrox Bleach Regular Bottle - 72x100ml",
    "barcode": 24800047840047,
    "price": 549.61,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 18609,
    "name": "Zonrox Bleach Regular Bottle - 24x1000ml",
    "barcode": 14800047840019,
    "price": 802.5,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 18618,
    "name": "Zonrox Bleach Regular Box - 36x500ml",
    "barcode": 24800047840023,
    "price": 677.5,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 18627,
    "name": "Zonrox Bleach Colorsafe Box - 48 x 225ml",
    "barcode": 14800047841726,
    "price": 1015.34,
    "brand": "Zonrox",
    "category": "Laundry Products"
  },
  {
    "id": 18636,
    "name": "Safeguard BS Pure White Box - 162 x 60g",
    "barcode": 44902430945552,
    "price": 2606.52,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 18645,
    "name": "Safeguard Soap Floral Pink Box - 162 x 60g",
    "barcode": 24902430951351,
    "price": 2606.48,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 18759,
    "name": "Alaska Fortified Powdered Milk Drink 9+3 PROMO  - 33g",
    "barcode": 4800575240261,
    "price": 59.85,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 18769,
    "name": "Argentina Meatloaf Can in Box - 48 x 150g",
    "barcode": 10748485801497,
    "price": 855.21,
    "brand": "Argentina",
    "category": "Packed Meat"
  },
  {
    "id": 18787,
    "name": "Head and Shoulders Shampoo Smooth and Silky 6x12ml",
    "barcode": 4902430698658,
    "price": 27.03,
    "brand": "Head & Shoulders",
    "category": "Hair Care"
  },
  {
    "id": 18795,
    "name": "Pantene Conditioner 3Min Miracle HF Control Sachet - 6x9ml",
    "barcode": 4902430634014,
    "price": 25.95,
    "brand": "Pantene",
    "category": "Hair Care"
  },
  {
    "id": 18804,
    "name": "PANTENE SH HF CONTROL 6x12ml",
    "barcode": 4902430698085,
    "price": 25.33,
    "brand": "Pantene",
    "category": "Hair Care"
  },
  {
    "id": 18813,
    "name": "PANTENE SH TDC 6x12ml",
    "barcode": 4902430698146,
    "price": 24.48,
    "brand": "Pantene",
    "category": "Hair Care"
  },
  {
    "id": 18822,
    "name": "Safeguard Soap Ivory White Pack - 60g",
    "barcode": 4902430381772,
    "price": 14.64,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 18831,
    "name": "Safeguard Body Soap Lemon Pack - 60g",
    "barcode": 4902430803694,
    "price": 14.76,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 18840,
    "name": "Safeguard Body Soap White - 85g",
    "barcode": 4902430495073,
    "price": 25.15,
    "brand": "Safeguard",
    "category": "Bath and Body Care"
  },
  {
    "id": 18861,
    "name": "Tang Juice Powder Grape Ties - 25g x 12",
    "barcode": 7622300637996,
    "price": 199.24,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18868,
    "name": "Tang Juice Powder Mango Ties -25g x 12",
    "barcode": 7622300601782,
    "price": 199.23,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18876,
    "name": "Tang Juice Powder Pineapple Ties -25g x 12",
    "barcode": 7622300601768,
    "price": 199.03,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18884,
    "name": "Tang Juice Powder Pomelo Ties -25g x 12",
    "barcode": 7622210706768,
    "price": 199.07,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18892,
    "name": "Tang Juice Powder Calamansi Ties -25g x 12",
    "barcode": 7622300858599,
    "price": 198.85,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18900,
    "name": "Tang Juice Powder Dalandan Ties -25g x 12",
    "barcode": 7622300858575,
    "price": 198.64,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18908,
    "name": "Nestea Iced Tea Powder Apple Ties -25g x 12",
    "barcode": 4800361382083,
    "price": 203.25,
    "brand": "Nestea",
    "category": "Powdered Drink"
  },
  {
    "id": 18916,
    "name": "Nestea Iced Tea Powder Lemon Ties -25g x 12",
    "barcode": 4800361379557,
    "price": 202.94,
    "brand": "Nestea",
    "category": "Powdered Drink"
  },
  {
    "id": 18924,
    "name": "Nescafe Blend and Brew Original Ties - 10x28g",
    "barcode": 4800361403764,
    "price": 54.64,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 18932,
    "name": "Nescafe Original Twinpack Ties - 10 x 48g",
    "barcode": 4800361415347,
    "price": 97.1,
    "brand": "Nescafe",
    "category": "Coffee"
  },
  {
    "id": 18941,
    "name": "Tang Juice Powder Orange Ties - 25g x 12",
    "barcode": 7622300559991,
    "price": 198.46,
    "brand": "Tang",
    "category": "Powdered Drink"
  },
  {
    "id": 18948,
    "name": "Nestea Iced Tea Powder Honey Blend Ties -25g x 12",
    "barcode": 4800361387989,
    "price": 202.41,
    "brand": "Nestea",
    "category": "Powdered Drink"
  },
  {
    "id": 18958,
    "name": "Gilette Rubie II Razor 1S",
    "barcode": 4902430441896,
    "price": 17.36,
    "brand": "Gillette",
    "category": "Bath and Body Care"
  },
  {
    "id": 18966,
    "name": "Oral B Shiny Clean Toothbrush 1S",
    "barcode": 4902430349062,
    "price": 11.62,
    "brand": "Oral-B",
    "category": "Oral Care"
  },
  {
    "id": 18975,
    "name": "Ariel Liquid Sunrise Fresh 6x64g",
    "barcode": 4902430764858,
    "price": 59.53,
    "brand": "Ariel",
    "category": "Laundry Products"
  },
  {
    "id": 18984,
    "name": "Ariel Powder Golden Bloom 6x66g",
    "barcode": 4902430768917,
    "price": 60.18,
    "brand": "Ariel",
    "category": "Laundry Products"
  },
  {
    "id": 18993,
    "name": "Tide Powder Garden Bloom 6x74g",
    "barcode": 4902430831161,
    "price": 57.5,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 19002,
    "name": "Tide Powder Perfect Clean Perfume Fantasy 6x74g",
    "barcode": 4902430831338,
    "price": 58.45,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 19011,
    "name": "Tide Powder Perfume Fantasy 6x74g",
    "barcode": 4902430759250,
    "price": 50.51,
    "brand": "Tide",
    "category": "Laundry Products"
  },
  {
    "id": 19020,
    "name": "Nissin Malkist Sand Chocolate 10x24g",
    "barcode": 4807770122712,
    "price": 46.07,
    "brand": "Nissin (Biscuits)",
    "category": "Bread and Biscuits"
  },
  {
    "id": 19029,
    "name": "Lucky Me! Instant Lomi 65g",
    "barcode": 4807770272394,
    "price": 13.76,
    "brand": "Lucky Me",
    "category": "Rice and Noodles"
  },
  {
    "id": 19038,
    "name": "Bingo Orange 10x28g",
    "barcode": 4807770100536,
    "price": 47.75,
    "brand": "Bingo",
    "category": "Bread and Biscuits"
  },
  {
    "id": 19047,
    "name": "Monde Cheese Bar 10x23g",
    "barcode": 4807770122736,
    "price": 65.66,
    "brand": "Monde",
    "category": "Bread and Biscuits"
  },
  {
    "id": 19056,
    "name": "Maggi Magic Sarap 14x8g",
    "barcode": 48025522,
    "price": 40.9,
    "brand": "Maggi",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 19065,
    "name": "Milo Active Go Energy Drink 12x24g",
    "barcode": 4800361413480,
    "price": 80.74,
    "brand": "Milo",
    "category": "Milk"
  },
  {
    "id": 19075,
    "name": "Keratin Plus Gold 6x20g",
    "barcode": 4806515161511,
    "price": 33.42,
    "brand": "Keratin Plus",
    "category": "Hair Care"
  },
  {
    "id": 19083,
    "name": "Keratin Plus Hair Treatment 6x20g",
    "barcode": 4806515161504,
    "price": 28.73,
    "brand": "Keratin Plus",
    "category": "Hair Care"
  },
  {
    "id": 19092,
    "name": "Alcoplus Isopropyl Alcohol 150ml - 1S",
    "barcode": 4806515160781,
    "price": 28.97,
    "brand": "Alcoplus",
    "category": "Bath and Body Care"
  },
  {
    "id": 19101,
    "name": "Alcoplus Ethyl Alcohol 150ml - 1S",
    "barcode": 4806515160811,
    "price": 27.98,
    "brand": "Alcoplus",
    "category": "Bath and Body Care"
  },
  {
    "id": 19110,
    "name": "Alcoplus Ethyl Alcohol 60ml - 1S",
    "barcode": 4806515160804,
    "price": 15.49,
    "brand": "Alcoplus",
    "category": "Bath and Body Care"
  },
  {
    "id": 19119,
    "name": "Alcoplus Isopropyl Alcohol 60ml - 1S",
    "barcode": 4806515160774,
    "price": 16.42,
    "brand": "Alcoplus",
    "category": "Bath and Body Care"
  },
  {
    "id": 19128,
    "name": "Tisyu Coreless Tissue 2 Rolls - 1S",
    "barcode": 4806502359709,
    "price": 8.24,
    "brand": "Tisyu",
    "category": "Bath and Body Care"
  },
  {
    "id": 19137,
    "name": "Femme Tissues 12 rolls - 1S",
    "barcode": 4806502359785,
    "price": 88.92,
    "brand": "Femme",
    "category": "Bath and Body Care"
  },
  {
    "id": 19146,
    "name": "Femme Interfolded Paper Towel - 1S",
    "barcode": 4806502359914,
    "price": 38.87,
    "brand": "Femme",
    "category": "Bath and Body Care"
  },
  {
    "id": 19156,
    "name": "Monde Mamon Classic Saver Pack 12x40g",
    "barcode": 4807770121661,
    "price": 144.11,
    "brand": "Monde",
    "category": "Bread and Biscuits"
  },
  {
    "id": 19176,
    "name": "GSM Blue Mojito 700ml",
    "barcode": 4800130728128,
    "price": 91.8,
    "brand": "GSM Blue",
    "category": "Alcohol"
  },
  {
    "id": 19197,
    "name": "Nature's Spring Purified Water 350ml",
    "barcode": 4800049720107,
    "price": 6.4,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19205,
    "name": "Nature's Spring Purified Water 500ml",
    "barcode": 4800049720114,
    "price": 8.54,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19214,
    "name": "Nature's Spring Purified Water 1L",
    "barcode": 4800049720121,
    "price": 13.43,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19223,
    "name": "Nature's Spring Purified Water 6L",
    "barcode": 4800049712607,
    "price": 57.66,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19232,
    "name": "Nature's Spring Purified Water 10L",
    "barcode": 4800049720145,
    "price": 74.42,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19241,
    "name": "Nature's Spring Distilled Water 6L",
    "barcode": 4800049715608,
    "price": 66.21,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19250,
    "name": "Nature's Spring Distilled Water 10L",
    "barcode": 4800049720244,
    "price": 83.16,
    "brand": "Nature's Spring",
    "category": "Water"
  },
  {
    "id": 19257,
    "name": "Ajinomoto Crispy Fry Original in Box - 182 x 62g",
    "barcode": 14801958667009,
    "price": 2391.46,
    "brand": "Ajinomoto",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 19265,
    "name": "Ajinomoto Crispy Fry Original in Box - 168 x 30g",
    "barcode": 14801958460006,
    "price": 1434.72,
    "brand": "Ajinomoto",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 20295,
    "name": "Alaska Fortified Powdered Milk Drink 10+2 PROMO  - 33g",
    "barcode": 4800575240650,
    "price": 75.91,
    "brand": "Alaska",
    "category": "Milk"
  },
  {
    "id": 20323,
    "name": "Marlboro Lights Fliptop Ream - 10x20 sticks Promo",
    "barcode": 7623900001033,
    "price": 1181.61,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 20333,
    "name": "Fortune Extra Menthol Fliptop Long Ream - 10x20 sticks Promo",
    "barcode": 4800177024207,
    "price": 1086.71,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 20343,
    "name": "Marlboro Ice Blast Filter Ream - 10x20 sticks Promo",
    "barcode": 4806504616213,
    "price": 1181.72,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 20353,
    "name": "Fortune Lights Tribal Blue Label Ream - 10x20 sticks Promo",
    "barcode": 4806504611430,
    "price": 1086.48,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 20363,
    "name": "Marlboro Black Menthol Fliptop Ream - 10x20 sticks Promo",
    "barcode": 4806504610198,
    "price": 1181.22,
    "brand": "Marlboro",
    "category": "Cigarettes"
  },
  {
    "id": 20373,
    "name": "Fortune Mint Splash Ream - 10x20 sticks Promo",
    "barcode": 4806504611591,
    "price": 1086.68,
    "brand": "Fortune",
    "category": "Cigarettes"
  },
  {
    "id": 20383,
    "name": "Tiger Energy Vanilla - 25g",
    "barcode": 7622300743048,
    "price": 47.65,
    "brand": "Tiger",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20393,
    "name": "Tiger Energy Chocolate - 21g",
    "barcode": 7622300742171,
    "price": 47.6,
    "brand": "Tiger",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20403,
    "name": "Cheez Whiz Easy Squeeze - 210g",
    "barcode": 7622210074980,
    "price": 66.84,
    "brand": "Cheez Whiz",
    "category": "Spreads and Dressings"
  },
  {
    "id": 20413,
    "name": "Oreo Vanilla - 28.5g",
    "barcode": 4893049150012,
    "price": 60.87,
    "brand": "Oreo",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20423,
    "name": "Oreo Chocolate - 28.5g",
    "barcode": 4892642101926,
    "price": 61.61,
    "brand": "Oreo",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20433,
    "name": "Cheez Whiz Plain Twinpack - 25g",
    "barcode": 7622210895097,
    "price": 8.49,
    "brand": "Cheez Whiz",
    "category": "Spreads and Dressings"
  },
  {
    "id": 20443,
    "name": "Cadbury Shots - 18g",
    "barcode": 8901233028637,
    "price": 6.18,
    "brand": "Cadbury",
    "category": "Candies and Chocolates"
  },
  {
    "id": 20453,
    "name": "Tigers Crackers Plain  - 25g",
    "barcode": 7622210548948,
    "price": 44.27,
    "brand": "Tiger",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20463,
    "name": "Tiger Crackers Ensaymada - 25g",
    "barcode": 7622210549099,
    "price": 44.18,
    "brand": "Tiger",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20473,
    "name": "Tiger Crackers Leche Flan - 25g",
    "barcode": 7622210549068,
    "price": 43.62,
    "brand": "Tiger",
    "category": "Bread and Biscuits"
  },
  {
    "id": 20479,
    "name": "Emperador Lime Light 750ml",
    "barcode": 4800142901052,
    "price": 118.38,
    "brand": "Emperador",
    "category": "Alcohol"
  },
  {
    "id": 20485,
    "name": "Cobra Energy Defense 350ml",
    "barcode": 4800611928894,
    "price": 18.56,
    "brand": "Cobra",
    "category": "RTD"
  },
  {
    "id": 20495,
    "name": "Cobra Energy Drink 350ml",
    "barcode": 4800611546760,
    "price": 17.12,
    "brand": "Cobra",
    "category": "RTD"
  },
  {
    "id": 20505,
    "name": "Silka Body Soap Green 65g",
    "barcode": 4806507832214,
    "price": 15.44,
    "brand": "Silka",
    "category": "Bath and Body Care"
  },
  {
    "id": 20515,
    "name": "Chocomani Bulilit Bars 20x7g",
    "barcode": 4800237891442,
    "price": 14.51,
    "brand": "Choco Mani",
    "category": "Candies and Chocolates"
  },
  {
    "id": 20525,
    "name": "The Bar Pink Grape Fruity Mix 700ml",
    "barcode": 4800142113615,
    "price": 84.2,
    "brand": "The Bar",
    "category": "Alcohol"
  },
  {
    "id": 20535,
    "name": "The Bar Green Grape Fruity Mix 700ml",
    "barcode": 4800142113622,
    "price": 84.68,
    "brand": "The Bar",
    "category": "Alcohol"
  },
  {
    "id": 20545,
    "name": "Primera Light Brandy 750ml",
    "barcode": 4800130121097,
    "price": 85.81,
    "brand": "Primera",
    "category": "Alcohol"
  },
  {
    "id": 20612,
    "name": "Closeup Green Twinpack- 20g",
    "barcode": 4800888147240,
    "price": 35.9,
    "brand": "Close Up",
    "category": "Oral Care"
  },
  {
    "id": 20622,
    "name": "Clear Shampoo Cool Sport Menthol - 12ml",
    "barcode": 4800888151704,
    "price": 28.9,
    "brand": "Clear",
    "category": "Hair Care"
  },
  {
    "id": 20632,
    "name": "Rexona Deolotion Powder Dry - 3ml",
    "barcode": 4800888158888,
    "price": 18.6,
    "brand": "Rexona",
    "category": "Bath and Body Care"
  },
  {
    "id": 20642,
    "name": "Ponds Facial Moisturizer Pink - 6g",
    "barcode": 4800888150202,
    "price": 9.2,
    "brand": "Pond's",
    "category": "Bath and Body Care"
  },
  {
    "id": 20652,
    "name": "Sunsilk Damage Reconstruction - 13ml",
    "barcode": 4800888169693,
    "price": 23.75,
    "brand": "Sunsilk",
    "category": "Hair Care"
  },
  {
    "id": 20662,
    "name": "Creamsilk Tri-Keratin Straight - 10ml",
    "barcode": 4800888206121,
    "price": 30.21,
    "brand": "Cream Silk",
    "category": "Hair Care"
  },
  {
    "id": 20672,
    "name": "Creamsilk Tri-Keratin Shine - 10ml",
    "barcode": 4800888206084,
    "price": 29.28,
    "brand": "Cream Silk",
    "category": "Hair Care"
  },
  {
    "id": 20682,
    "name": "Knorr Shrimp Cubes - 10g",
    "barcode": 4000007484854,
    "price": 53.48,
    "brand": "Knorr",
    "category": "Seasonings and Mixes"
  },
  {
    "id": 20692,
    "name": "Gatorade Blue Bolt Bottle - 500ml",
    "barcode": 4803925061141,
    "price": 35.93,
    "brand": "Gatorade",
    "category": "Sports Drinks"
  },
  {
    "id": 20702,
    "name": "Nestle All Purpose Cream Tetra Pack - 125ml",
    "barcode": 4800361409537,
    "price": 32.19,
    "brand": "Nestle",
    "category": "Spreads and Dressings"
  },
  {
    "id": 20712,
    "name": "Ginebra Frasquito Bottle - 350ml",
    "barcode": 4800130100030,
    "price": 48,
    "brand": "Ginebra",
    "category": "Alcohol"
  },
  {
    "id": 21435,
    "name": "Surf Bar Cherry Blossom - 360g",
    "barcode": 4800888190987,
    "price": 21.03,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 21445,
    "name": "Surf Powder Pearl Blossoms - 6x65g",
    "barcode": 4800888199133,
    "price": 27.51,
    "brand": "Surf",
    "category": "Laundry Products"
  },
  {
    "id": 21465,
    "name": "Calla Powder Rose Garden - 6x45g",
    "barcode": 4806501709352,
    "price": 26.63,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 21475,
    "name": "Calla Powder Summer Fresh - 6x45g",
    "barcode": 4806501709307,
    "price": 27.15,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 21485,
    "name": "Champion Powder Fabcon - 6x40g",
    "barcode": 4806501705200,
    "price": 27.71,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 21495,
    "name": "Champion Powder Citrus Fresh - 6x40g",
    "barcode": 4806501705309,
    "price": 27.44,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 21505,
    "name": "Champion Powder Sunny Fresh - 6x40g",
    "barcode": 4806501705569,
    "price": 27.34,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 21515,
    "name": "Champion Powder Supra Clean Promo 6+1 - 7x40g",
    "barcode": 4806501703473,
    "price": 27.63,
    "brand": "Champion",
    "category": "Laundry Products"
  },
  {
    "id": 21525,
    "name": "Calla Powder Floral Fresh Promo 6+1 - 7x45g",
    "barcode": 4806501703480,
    "price": 27.07,
    "brand": "Calla",
    "category": "Laundry Products"
  },
  {
    "id": 21532,
    "name": "Lifebuoy Body Soap Total - 75g",
    "barcode": 4800888218841,
    "price": 14.52,
    "brand": "Lifebuoy",
    "category": "Bath and Body Care"
  }
];

export default  DUMMY_DATA;