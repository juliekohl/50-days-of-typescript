import {Menu, MenuItem} from './menu';
import { CoffeeMaker } from "./coffee-maker";
import { MoneyMachine } from "./money-machine";

const menu = new Menu();
const coffeeMaker = new CoffeeMaker();
const moneyMachine = new MoneyMachine();

let isOn: boolean = true;

if (isOn === true) {
    let options: string = menu.getItems();
    console.log(`what would you like? (${options}): `);
    let orderName: string = 'latte';

    if (orderName === 'off') {
        isOn = false;
    } else if (orderName === 'report') {
        coffeeMaker.report();
        moneyMachine.report();
    } else {
        let drink: MenuItem = new MenuItem(menu.findDrink(orderName));

        if (coffeeMaker.isResourceSufficient(drink.ingredients) &&
            moneyMachine.makePayment(drink.cost)) {
            coffeeMaker.makeCoffee(drink.ingredients);
        }
    }
}
