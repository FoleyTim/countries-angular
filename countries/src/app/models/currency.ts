export class Currency {
    code: string;
    name: string;
    symbol: string;
    constructor(data: any) {
        this.code = data.code;
        this.name = data.name;
        this.symbol = data.symbol;
    }
}
