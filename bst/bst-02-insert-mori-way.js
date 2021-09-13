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
            
            // this does not work, and I know why, but i keeped here so in the future don't have this mistake 
            if ( newNode.value < temp.value ) {
                console.log("temp >> ", temp)
                console.log("temp.left >> ",temp.left)
                temp = temp.left
            }
            else {
                temp = temp.right
            }
            if (temp === null ) {
                console.log("if temp >> ", temp)
                console.log("if temp newNode >> ", newNode)
                temp = newNode
                return this
            }
            // end of this dosn't work
        }
    }
}

let bst = new BST()
bst.insert(47)
bst.insert(21)
bst.insert(76)
bst.insert(18)

bst.insert(52)
bst.insert(82)
