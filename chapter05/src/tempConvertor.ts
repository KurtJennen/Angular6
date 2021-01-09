export class TempConvertor {
    // static convertFtoc(temp: number | string) : string {
    //     //let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
    //     let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);

    //     return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    // }

    static convertFtoc(temp: any): string {
        let value: number;
        if ((temp as number).toPrecision) {
            value = temp;
        } else if ((temp as string).indexOf) {
            value = parseFloat(<string>temp);
        } else {
            value = 0;
        }

        return TempConvertor.performCalculation(value).toFixed(1);
    }

    private static performCalculation(value: number) : number {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    }
}