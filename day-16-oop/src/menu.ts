class MenuItem {
    name: string = "";
    cost: number = 0;
    ingredients: {
        water: number,
        milk: number,
        coffee: number,
    } = {
        water: 0,
        milk: 0,
        coffee: 0,
    };

    constructor(name: string = "", water: number = 0, milk: number = 0, coffee: number = 0, cost: number = 0) {
        this.name = name;
        this.cost = cost;
        this.ingredients = {
            water: water,
            milk: milk,
            coffee: coffee,
        }
    }
}

class Menu {
    menu: [MenuItem, MenuItem, MenuItem] = [
        new MenuItem(),
        new MenuItem(),
        new MenuItem(),
    ];

    constructor() {
        this.menu = [
            new MenuItem(
                "latte",
                200,
                150,
                24,
                2.5,
            ),
            new MenuItem(
                "espresso",
                50,
                0,
                18,
                1.5,
            ),
            new MenuItem(
                "cappuccino",
                250,
                50,
                24,
                3,
            ),
        ];
    }

    public getItems(): string {
        let options: string = "";

        for (let item in this.menu) {
            options += `${this.menu[item].name}/`;
        }

        return options;
    }

    public findDrink(orderName: string = ""): string {
        for (let item in this.menu) {
            if (this.menu[item].name === orderName) {
                return this.menu[item].name;
            }
        }
        return "Sorry that item is not available."
    }

}

// const test = new Menu();
// console.log("test", test.getItems());
// console.log("test", test.findDrink());
