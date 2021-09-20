class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if ( this.root === null ) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while (true) {
            if ( temp.value === newNode.value ) return undefined
            
             if ( newNode.value < temp.value ) {
                if ( temp.left === null ) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }
            else {
                if ( temp.right === null ) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if ( this.root === null ) return false
        let temp = this.root
        
        while ( temp ) {
            if ( value < temp.value) {
                temp = temp.left
            }
            else if ( value > temp.value ) {
                temp = temp.right
            }
            else {
                return true
            }
       }
       return false
    }

    BFS() {
        let currentNode = this.root
        let queue = []
        let results = []
        queue.push(currentNode)

        while( queue.length ) {
            currentNode = queue.shift()
            results.push(currentNode.value)
            if ( currentNode.left ) queue.push( currentNode.left )
            if ( currentNode.right ) queue.push( currentNode.right )
        }
        return results
    }
}

let bst = new BST()
bst.insert(47)
bst.insert(21)
bst.insert(76)
bst.insert(18)
bst.insert(27)
bst.insert(52)
bst.insert(82)
