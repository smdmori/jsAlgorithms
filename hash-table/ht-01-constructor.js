class HashTable {
    constructor( size = 7 ) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for ( let i = 0; i < key.length; i++ ) {
            hash = ( hash + i.charCodeAt(i) * 23 ) % this.dataMap.length
            console.log('i >> ' + i + ' : hash >> ' + hash)
        }
        return hash
    }
}

let ht = new HashTable()