const { getRandomInt } = require("./utils.js")

const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg','Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']
const meals = []
const recipes =[
    {
        name:'Mushroom Rice Balls',
        ingredients:['Big Hearty Truffle','Hylian Rice']
    },
    {
        name:'Cheesy Omlette',
        ingredients:['Hateno Cheese','Bird Egg']
    },
    {
        name:'Cheesy Hylian Pizza',
        ingredients:['Hateno Cheese','Tabantha Wheat']
    },
    {
        name:'Prime Meat and Rice Bowl',
        ingredients:['Raw Prime Meat','Hylian Rice']
        
    },
    {
        name:'Egg Pudding',
        ingredients:['Bird Egg', 'Fresh Milk', 'Cane Sugar']
        
    },
    {
        name:'Egg Tart',
        ingredients:['Bird Egg', 'Tabantha Wheat', 'Cane Sugar','Goat Butter']
        
    },
    {
        name:'Chicken Egg Fried Rice',
        ingredients:['Bird Egg', 'Hylian Rice', 'Raw Prime Meat']
        
    },
    {
        name:'Poultry Pilaf',
        ingredients:['Bird Egg', 'Raw Bird Thigh', 'Goat Butter','Hylian Rice']
        
    },
]

// Function to pick a random meal and cook it
const cookRandomMeal = () => {
    const randomRecipe = recipes[getRandomInt(recipes.length)];
    meals.push(randomRecipe.name)
}
// Specify the number of meals to generate
const numberOfMealsToGenerate = 1

// Generate random meals
for (let food = 0; food < numberOfMealsToGenerate; food++) {
    cookRandomMeal()
}

console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meal)
}