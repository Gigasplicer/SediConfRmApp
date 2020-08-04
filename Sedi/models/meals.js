class Meals{
    constructor(id, categoryIds, title, affordability, complexity, imageURL, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree, array){
        this.id = id;
        this.categoryIds= categoryIds;
        this.affordability= affordability;
        this.title = title;
        this.complexity = complexity;
        this.imageURL = imageURL;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
        this.array= array;
    }
}
export default Meals;