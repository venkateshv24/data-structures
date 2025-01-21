class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const nodeInstance = new Node(value)
        if(!this.length){
            this.head = nodeInstance;
            this.tail = this.head
        } else if(!this.head.next){
            this.head.next = nodeInstance;
            this.tail = nodeInstance
            this.tail.prev = this.head
        } else {
            let prevNode = this.tail;
            prevNode.next = nodeInstance
            this.tail = nodeInstance;
            this.tail.prev = prevNode
        }
        return this.length++;
    }
    pop(){
        if(!this.length){
            return null
        } else if(!this.head.next){
            this.head = null;
            this.tail = this.head;
        } else {
           let prevNode = this.tail.prev;
           prevNode.next = null;
           this.tail = prevNode;
        }
        return this.length--;
    }
    shift(){
        if(!this.length){
            return null
        } else if(!this.head.next){
            this.head = null;
            this.tail = this.head;
        } else {
            let newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead
        }
        this.length--;
        return this
    }
    unshift(value){
        let newHead = new Node(value)
        if(!this.length){
            this.head = newHead;
            this.tail = this.head;
        } else if(!this.head.next){
            let currentHead = this.head;
            newHead.next = currentHead;
            this.head = newHead;
            this.tail = currentHead;
            this.tail.prev = newHead
        } else {
            let currentHead = this.head;
            this.head.prev = newHead;
            newHead.next = currentHead;
            this.head = newHead;
        }
        return this.length++;
    }
    get(position){
        if(!this.length || position > this.length){
            return undefined;
        }
        
        if(position <= (this.length/2)) {
            let count=1;
            let currentNode = this.head;
            while(count !== position){
                currentNode = currentNode.next;
                count++
            }
            return currentNode;
        } else {
            let count= this.length;
            let currentNode = this.tail;
            while(count !== position){
                currentNode = currentNode.prev;
                count--
            }
            return currentNode;
        }
        
    }
    set(value,position){
        if(!this.length || position > this.length ){
            return undefined
        }
        let currentNode = this.get(position)
        currentNode.value = value;
        return this;
    }
    insert(value,position){
        if(position > this.length+1 || position < 0){
            return undefined
        }
        if(position === 1) return this.unshift(value);
        if(position === this.length+1) return this.push(value);
        let newNode = new Node(value);
        let currentNode = this.get(position);
        let prevNode = currentNode.prev
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = currentNode;
        currentNode.prev = newNode
        return this.length++
    }
    remove(position){
        if(position > this.length || position < 0){
            return undefined
        }
        if(position === 1) return this.shift();
        if(position === this.length) return this.pop();
        let currentNode = this.get(position);
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        return this.length--;
    }
}

const dbl = new DoublyLinkedList()
dbl.unshift(2)
dbl.unshift(1)
dbl.unshift(3)
dbl.unshift(4)
// console.log(dbl)
console.log(dbl.get(1))
//console.log(dbl)

