export class MoneyMachine {
    CURRENCY: string = "$";
    COIN_VALUES: {} = {
        quarters: 0.25,
        dimes: 0.10,
        nickles: 0.05,
        pennies: 0.01,
    }
    profit: number;
    moneyReceived: number;

    constructor() {
        this.profit = 0;
        this.moneyReceived = 0;
    }

    public report(): void {
        console.log(`Money: ${this.CURRENCY}${this.profit}`);
    }

    public processCoins(): number {
        console.log("Please insert coins.");
        for (let coin in this.COIN_VALUES) {
            this.moneyReceived += 20 * this.COIN_VALUES[coin];
            return this.moneyReceived;
        }
    }

    public makePayment(cost: number = 0) {
        this.processCoins();

        if (this.moneyReceived >= cost) {
            let change: number = Math.round(this.moneyReceived - cost);
            console.log(`Here is ${this.CURRENCY}${change} in change.`);
            this.profit += cost;
            this.moneyReceived = 0;
            return true;
        } else {
            console.log("Sorry that's not enough money. Money refunded.");
            this.moneyReceived = 0;
            return false;
        }
    }
}
