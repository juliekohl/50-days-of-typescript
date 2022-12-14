interface Resources {
    water: number,
    milk: number,
    coffee: number,
};

class CoffeeMaker {
    resources: Resources;

    constructor() {
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

    public isResourceSufficient(ingredients: Partial<Resources> ): boolean {
        let canMake: boolean = true;

        for (let item in this.resources) {
            if (ingredients[item] > this.resources[item]) {
                console.log(`Sorry there is not enough ${item}.`);
                canMake = false;
            }
        }
        return canMake;

    }

    public makeCoffee(ingredients: Partial<Resources>, orderName: string = "espresso" ): void {
        for (let item in this.resources) {
            this.resources[item] -= ingredients[item];
        }
        console.log(`Here is your ${orderName} ☕️. Enjoy!`);
    }
}

// const test = new CoffeeMaker();
// console.log("report:", test.report());
// console.log("isResourceSufficient:", test.isResourceSufficient({water: 600}));
// console.log("isResourceSufficient:", test.makeCoffee({water: 200}));
