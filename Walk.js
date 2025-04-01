import { MoveBehaviour } from "./MoveBehaviour.js";

export class Walk extends MoveBehaviour {
    move() {
        return "Estoy caminando."
    }
}