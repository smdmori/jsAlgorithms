class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)

        this.start = newNode
        this.last = newNode

        this.length = 1
    }
}

let q = new Queue(5)
q