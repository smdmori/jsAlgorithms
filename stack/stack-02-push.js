class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        
        const newNode = new Node(value)
        
        if ( this.length === 0 ) {

            this.top = newNode
        }
        else {

            newNode.next = this.top
            this.top = newNode
        }
        
        this.length++
        return this
    }
}

let st = new Stack(11)

st.push(23)
st.push(1)
st.push(47)
