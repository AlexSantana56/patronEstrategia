export class Character {
    constructor(moveBehaviour, weaponBehaviour) {
        this.moveBehaviour = moveBehaviour;
        this.weaponBehaviour = weaponBehaviour;
    }

    performMove() {
        return this.moveBehaviour.move();
    }

    performWeapon() {
        return this.weaponBehaviour.weapon();
    }

    setMoveBehaviour(mb) {
        this.moveBehaviour = mb;
    }

    setWeaponBehaviour(wb) {
        this.weaponBehaviour = wb;
    }

    display() {
        return "Soy un caracter genérico."
    }
}