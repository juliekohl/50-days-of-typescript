import {Ingredients} from "./interfaces/ingredients.interface";

export class CoffeeMaker {
    resources: Ingredients;
    orderName: string;

    constructor(orderName: string = "",) {
        this.orderName = orderName;
        this.resources = {
            water: 500,
            milk: 200,
            coffee: 100,
        }
    }

    public report(): void {
        console.log(`Water: ${this.resources["water"]}ml`);
        console.log(`Milk: ${this.resources["milk"]}ml`);
        console.log(`Coffee: ${this.resources["coffee"]}g`);
    }

    public isResourceSufficient(ingredients: Ingredients) {
        let canMake: boolean = true;

        for (let item in this.resources) {

            if (ingredients[item] > this.resources[item]) {
                console.log(`Sorry there is not enough ${item}.`);
                canMake = false;
            }
        }
        return canMake;
    }

    public makeCoffee(ingredients: Ingredients, orderName = "latte" ): void {
        for (let item in this.resources) {
            this.resources[item] -= ingredients[item];
        }
        console.log(`Here is your ${orderName} ☕️. Enjoy!`);
    }
}
