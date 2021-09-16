class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }

    addEdge(vertex1, vertex2) {
        if ( this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }
}

let gr = new Graph()
gr.addVertex(1)
gr.addVertex(2)

gr.addEdge(1, 2)
gr