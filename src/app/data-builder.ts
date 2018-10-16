const SYMBOLS = ['2_YEAR', '3_YEAR', '5_YEAR', '7_YEAR', '10_YEAR', '30_YEAR'];
const DESTINATIONS = ['ESPEED', 'BROKERTEC', 'DEALERWEB', 'BLOOMBERG'];
const STATUS = ['NEW', 'FILLED', 'CANCELLED', 'PENDING', 'REJECTED'];
const randomNumberGenerator = (min: number, max: number): number => {
    return Math.floor(Math.random() * max) + min;
};
export interface Order {
    symbol: string;
    dest: string;
    status: string;
    price: number;
    qty: number;
    remQty: number;
    exDate: Date;
};

export class DataBuilder {
    build(size: number): Order[] {
        const orders = [];
        for (let i = 0; i < size; i++) {
            orders.push(this.createOrderItem());
        }
        return orders;
    }

    changeData(orders: Order[]) {
        let index=0;
        setInterval(() => {
            index = randomNumberGenerator(0, orders.length);
            let order = orders[index];
            order.symbol = SYMBOLS[randomNumberGenerator(0, SYMBOLS.length)];
            order.dest = DESTINATIONS[randomNumberGenerator(0, DESTINATIONS.length)];
            order.status = STATUS[randomNumberGenerator(0, STATUS.length)];
            order.qty = randomNumberGenerator(50,100);
            order.remQty = randomNumberGenerator(20,40);
        }, 200);


    }

    private createOrderItem(): Order {
        const exDate = new Date;
        return {
            symbol: SYMBOLS[randomNumberGenerator(0, SYMBOLS.length)],
            dest: DESTINATIONS[randomNumberGenerator(0, DESTINATIONS.length)],
            status: STATUS[randomNumberGenerator(0, STATUS.length)],
            price: 0,
            qty: 0,
            remQty: 0,
            exDate
        };
    }
}