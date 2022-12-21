// ES6
class IntBuilder {
    constructor(int = 0) {
        this.int = int;
    }

    plus() {
        for (let i of arguments) {
            this.int += i
        }
        return this
    }

    minus() {
        for (let i of arguments) {
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

    get() {
        return this.int
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to + 1 - from) + from)
    }
}

//ES5
function StringBuilder(str = '') {
    this.string = `${str}`
}

StringBuilder.prototype.plus = function () {
    for (let i of arguments) {
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

StringBuilder.prototype.get = function () {
    return this.string
}

