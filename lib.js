/**
 * Constante da raiz de 3. Use para operações mais rápidas.
 * @type {Number}
 * @description Raiz Quadrada de 3.
 * @constant
 */
const SQRT3 = 1.732



/**
 * Interpola e retorna um valor entre dois números.
 * @param {Number} start valor inicial
 * @param {Number} end valor final
 * @param {Number} t progresso decimal. Valores entre [0, 1] retornarão dentro da faixa. 
 * @returns {Number}
 */
export function lerp(start, end, t){
    return start + ((end-start) * t);
}

/**
 * Sum two numbers
 * @param {Number} n1 
 * @param {Number} n2 
 * @returns {Number}
 */
export function sum(n1, n2){
    return n1 + n2;
}

/**
 * 
 * @description Classe para manipular vetores de duas dimensões.
 * @class 
 */
export class Vector2{
    static zero = [0, 0];
    static one = [1, 1];

    static right = [1, 0]
    static up = [0, 1]
    static left = [-1, 0]
    static down = [0, -1]
    /**
     * Soma dois vetores
     * @param {Vector2} v1
     * @param {Vector2} v2 
     * @returns {Vector2} Vetor resultante
     */
    static sumVectors(v1, v2){
        return [v1[0] + v2[0], v1[1] + v2[1]]
    }

    /**
     * Instancia um vetor de duas dimensões;
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Vector2} Vetor de duas dimensões
     */
    constructor(x = 0, y = 0){
        if(typeof x !== "number" || typeof y !== "number"){
            throw TypeError(`INPUTS X: ${typeof x, x}, Y: ${typeof y, y} ARE NOT NUMBERS`);
        }
        return [x, y]
    };
}

/**
 * 
 * @description Classe para manipular vetores de duas dimensões.
 * @class 
 */
export class Vector3{
    static zero = [0, 0, 0];
    static one = [1, 1, 1];
    
    static right = [1, 0, 0];
    static up = [0, 1, 0];
    static left = [-1, 0, 0];
    static down = [0, -1, 0];

    /**
     * Soma dois vetores
     * @param {Vector2} v1
     * @param {Vector2} v2 
     * @returns {Vector2} Vetor resultante
     */
    static sumVectors(v1, v2){
        return [v1[0] + v2[0], v1[1] + v2[1]]
    }

    /**
     * Instancia um vetor de duas dimensões;
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Vector2} Vetor de duas dimensões
     */
    constructor(x = 0, y = 0){
        if(typeof x !== "number" || typeof y !== "number"){
            throw TypeError(`INPUTS X: ${typeof x, x}, Y: ${typeof y, y} ARE NOT NUMBERS`);
        }
        return [x, y]
    };
}




export class Transform{
    position = [0, 0, 0]
    rotation = [0, 0, 0]
    scale = [0, 0, 0]

    static identity = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

    constructor(){
        return [
            this.position,
            this.rotation,
            this.scale
        ]
    }
}