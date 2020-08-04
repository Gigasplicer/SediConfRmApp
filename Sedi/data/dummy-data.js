import Category from '../models/category';
import Meal from '../models/meals';

export const CATEGORIES = [
  new Category('c1', 'SEDI Home Office', '#f5428d', require('../assets/images/SediEye.png')),
  new Category('c2', 'NSK Dental', '#f54242', require('../assets/images/NSK.png')),
  new Category('c3', 'S&C Electric', '#f5d142', require('../assets/images/SC.png')),
  new Category('c4', 'Museum of Science and Industry', '#368dff', require('../assets/images/100.png')),
  new Category('c5', 'ACME', '#f5a442', require('../assets/images/acme.png')),
  //new Category('c6', 'Exotic', '#41d95d'),
  //new Category('c7', 'Breakfast', '#9eecff'),
  //new Category('c8', 'Asian', '#b9ffb0'),
  //new Category('c9', 'French', '#ffc7ff'),
  //new Category('c10', 'Summer', '#47fced')
];

// '../assets/images/SediEye.png'
//'https://i.imgur.com/qlOfajE.png'
export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'SEDI Conference Room',
    '12 Lights',
    'White/Warm White',
    require('../assets/images/conference.png'),
    12,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true,
    [10,10,10,10,10,10,10,10,10,10,10,10]
  ),

  new Meal(
    'm2',
    ['c2'],
    'NSK USA',
    'Cabinets',
    'RGBW',
    require('../assets/images/NSK.png'),
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  ),

  new Meal(
    'm3',
    ['c2'],
    'NSK Canada',
    'Cabinets',
    'RGBW',
    require('../assets/images/NSK.png'),
    6,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  ),

  new Meal(
    'm4',
    ['c3'],
    'S&C Demo Room',
    'Track Lighting',
    'RGBW',
    require('../assets/images/SC.png'),
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  ),

  new Meal(
    'm5',
    ['c4'],
    'Bug\'s life exhibit',
    'Display Lights',
    'RGBW',
    require('../assets/images/100.png'),
    5,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  ),

  new Meal(
    'm6',
    ['c5'],
    'ACME Counters',
    '2 Counters',
    'RGBW',
    require('../assets/images/acme.png'),
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false,
    [10,10,10,10,10,10,10,10,10,10,10,10]
  ),

  new Meal(
    'm7',
    ['c1'],
    'Bob\'s office',
    'Overhead Light',
    'White',
    require('../assets/images/office.png'),
    1,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false,
    [10]
  ),

  new Meal(
    'm8',
    ['c1'],
    'A/V Office',
    'Overhead Lights(4)',
    'White',
    require('../assets/images/av.png'),
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    require('../assets/images/acme.png'),
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  ),
  new Meal(
    'm10',
    ['c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    require('../assets/images/acme.png'),
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true,
    [5,5,10,10,10,10,10,10,5,5,5,5]
  )
];
