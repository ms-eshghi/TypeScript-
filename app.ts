console.log("Hello World!");

type TVehicle={
    model: string,
    color:string,
    year: number,
    power:number
}
let Vehicle: TVehicle={
    model: "Boring generic vehicle",
    color:"Red",
    year:1993,
    power:60

}
console.log("Generic Vehicle:",Vehicle);

interface IVehicle{
    model: string,
    color:string,
    year: number,
    power:number,
    
}

interface ICar extends IVehicle {
    bodyType: string,
    wheelCount: number
}

interface IBoat extends IVehicle {
    draft: number
}

interface IPlan extends IVehicle {
    wingspan: number
}

let Car:ICar={
   model: "Ford focus", 
    color: "Green", 
    year: 2016, 
    power: 150, 
    bodyType: "Hatchback", 
    wheelCount: 4 
}
let Plan:IPlan={
    model: "Boeing 777", 
    color: "White", 
    year: 2020, 
    power: 170000, 
    wingspan: 65 
}

let Boat:IBoat={
     model: "Bella", 
    color: "Black", 
    year: 2022, 
    power: 100, 
    draft: 0.42 
}

console.log("Car:",Car);
console.log("Boat:",Boat);
console.log("Plan:",Plan);


class VehicleService<T>{
    private items: T[]=[];

add(item: T): void{
    this.items.push(item)
}

list(): T[]{
    return this.items;

}
}

const cars=new VehicleService<ICar>();
const boats=new VehicleService<IBoat>()

cars.add(Car);
boats.add(Boat);

console.log("List of car", cars.list());
console.log("List of car", boats.list());

