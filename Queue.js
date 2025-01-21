class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail =  null;
        this.length = 0;
    }

    enqueue(val){
        let node = new Node(val)
        if(this.length === 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            let current = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    }

    dequeue(){
        let current;
        if(this.length === 1) {
            current = this.head;
            this.head = null;
            this.tail = null;
        } else {
            current = this.head;
            let next = current.next;
            this.head = next;
            current.next = null;
        }
        this.length--;
        return current
    }
}

const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue)