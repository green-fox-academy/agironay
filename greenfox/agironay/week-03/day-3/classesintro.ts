class Car {
    private static SERIES_NUMBER = 0;

    private _seriesNumber: number;

    private _ownerName: string;

    private constructor (public brandName: string){
        Car.SERIES_NUMBER++;
        this._seriesNumber = Car.SERIES_NUMBER;

    }
    public static BuyCar(brandName: string, ownerName: string){
        let car = new Car(brandName);
        car.ownerName = ownerName;

        return car;
    }

    public startCar(): void{
        this._startEngine();

    }
    private _startEngine(): void{
    }

    public get seriesNumber(): number{
        return this._seriesNumber;
    }

    public get ownerName(): string{
        return this._ownerName;
    }

    public set ownerName(name: string){
        //do some validation on the name..
        this._ownerName = name;
    
    }
}

let car = Car.BuyCar('Mazda', 'Agi');
car.startCar();
car.ownerName = 'Agi';
console.log('Brand number:' , car.brandName);
console.log('Series Number', car.seriesNumber);
console.log('owner name:', car.ownerName);

let car2 = Car.BuyCar('Mazda', 'other name')
console.log('Brand number2 :', car2.brandName);
console.log('Series Number2:', car2.seriesNumber);
console.log('owner name2 :', car2.ownerName);