import { ChestWalk } from "./ChestWalk.js";
import { Run } from "./Run.js";
import { SquatWalk } from "./SquatWalk.js";
import { Walk } from "./Walk.js";
import { Axe } from "./Axe.js";
import { BowAndArrow } from "./BowAndArrow.js";
import { Knife } from "./Knife.js";
import { Sword } from "./Sword.js";
import { King } from "./King.js";
import { Knight } from "./Knight.js";
import { Queen } from "./Queen.js";
import { Troll } from "./Troll.js";


// Personaje número 1
console.log("PERSONAJE 1")
const personaje1 = new King(new Walk(), new Sword());
console.log(personaje1.display());
console.log(personaje1.performMove());
console.log(personaje1.performWeapon());

personaje1.setMoveBehaviour(new Run());
personaje1.setWeaponBehaviour(new BowAndArrow());

console.log("\nDespués de cambiar comportamientos:")
console.log(personaje1.performMove());
console.log(personaje1.performWeapon());
console.log("\n")


// Personaje número 2
console.log("PERSONAJE 2")
const personaje2 = new Queen(new Run(), new BowAndArrow());
console.log(personaje2.display());
console.log(personaje2.performMove());
console.log(personaje2.performWeapon());

personaje2.setMoveBehaviour(new SquatWalk());
personaje2.setWeaponBehaviour(new Knife());

console.log("\nDespués de cambiar comportamientos:")
console.log(personaje2.performMove());
console.log(personaje2.performWeapon());
console.log("\n")


// Personaje número 3
console.log("PERSONAJE 3")
const personaje3 = new Knight(new SquatWalk(), new Knife());
console.log(personaje3.display());
console.log(personaje3.performMove());
console.log(personaje3.performWeapon());

personaje3.setMoveBehaviour(new ChestWalk());
personaje3.setWeaponBehaviour(new Axe());

console.log("\nDespués de cambiar comportamientos:")
console.log(personaje3.performMove());
console.log(personaje3.performWeapon());
console.log("\n")


// Personaje número 4
console.log("PERSONAJE 4")
const personaje4 = new Troll(new ChestWalk(), new Axe());
console.log(personaje4.display());
console.log(personaje4.performMove());
console.log(personaje4.performWeapon());

personaje4.setMoveBehaviour(new Walk());
personaje4.setWeaponBehaviour(new Sword());

console.log("\nDespués de cambiar comportamientos:")
console.log(personaje4.performMove());
console.log(personaje4.performWeapon());