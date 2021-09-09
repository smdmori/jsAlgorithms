class Node {

    constructor(value) {
        
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {

    constructor(value) {

        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length++
    }
}