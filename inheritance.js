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


