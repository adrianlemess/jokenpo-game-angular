export class StrategyError implements Error {
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(name: string) {
        (this.name = name), (this.message = `Hand not implemented on ${this.name} `);
    }
}
