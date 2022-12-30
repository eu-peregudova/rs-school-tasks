// ES6
//base class
class InheritanceES6 {
    constructor(int = 0) {
        this.int = int
    }
    get() {
        return this.int
    }
}

//child class
class IntBuilder extends InheritanceES6 {
    constructor(int) {
        super(int);
    }

    plus(...numbers) {
        for (let i of numbers) {
            this.int += i
        }
        return this
    }

    minus(...numbers) {
        for (let i of numbers) {
            this.int -= i
        }
        return this
    }

    multiply(n) {
        this.int *= n
        return this
    }

    divide(n) {
        this.int = Math.floor(this.int / n)
        return this
    }

    mod(n) {
        this.int %= n
        return this
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to + 1 - from) + from)
    }
}

//ES5
//base class
function InheritanceES5(str = '') {
    this.string = `${str}`
}

InheritanceES5.prototype.get = function () {
    return this.string
}

//child class
function StringBuilder(str) {
    InheritanceES5.call(this, str)
}

StringBuilder.prototype = Object.create(InheritanceES5.prototype)
StringBuilder.prototype.constructor = StringBuilder

StringBuilder.prototype.plus = function (...strings) {
    for (let i of strings) {
        this.string += `${i}`
    }
    return this
}

StringBuilder.prototype.minus = function (n) {
    this.string = this.string.substring(0, this.string.length - n)
    return this
}

StringBuilder.prototype.multiply = function (int) {
    let initialString = this.string
    for (let i = 1; i <= int - 1; i++) {
        this.string += initialString
    }
    return this
}

StringBuilder.prototype.divide = function (n) {
    let k = Math.floor(this.string.length / n)
    this.string = this.string.substring(0, k)
    return this
}

StringBuilder.prototype.remove = function (str) {
    while (this.string.includes(str)) {
        this.string = this.string.substring(0, this.string.indexOf(str)) +
            this.string.substring(this.string.indexOf(str) + str.length)
    }
    return this
}

StringBuilder.prototype.sub = function (from, n) {
    this.string = this.string.substring(from, from + n)
    return this
}


