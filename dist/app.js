"use strict";
console.log("Hello World!");
let Vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log("Generic Vehicle:", Vehicle);
let Car = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4
};
let Plan = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65
};
let Boat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log("Car:", Car);
console.log("Boat:", Boat);
console.log("Plan:", Plan);
class VehicleService {
    items = [];
    add(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
}
const cars = new VehicleService();
const boats = new VehicleService();
cars.add(Car);
boats.add(Boat);
console.log("List of car", cars.list());
console.log("List of car", boats.list());
