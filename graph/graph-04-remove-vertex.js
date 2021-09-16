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

    removeEdge(vertex1, vertex2) {
        if ( this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(v => v != vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(v => v != vertex1)
            return true
        }
        return false
    }

    removeVertex(vertex) {
        if ( !this.adjacencyList[vertex]) return undefined
        while ( this.adjacencyList[vertex].length ) {
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge( vertex, temp )
        }
        delete this.adjacencyList[vertex]
        return this
    }
}

let gr = new Graph()
gr.addVertex('A')
gr.addVertex('B')
gr.addVertex('C')
gr.addVertex('D')

gr.addEdge('A', 'B')
gr.addEdge('B', 'D')
gr.addEdge('C', 'D')
gr.addEdge('A', 'D')
gr.addEdge('A', 'C')

gr
