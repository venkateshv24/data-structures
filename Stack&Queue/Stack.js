class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let node = new Node(value)
        if(this.size === 0) {
            this.first = node;
            this.last = this.first
        } else {
            let currentFirst = this.first;
            node.next = currentFirst;
            this.first = node;
        }
        return this.size++
    }

    pop() {
        if(this.size === 0) return null;
        let removed;
        if(this.size === 1) {
            removed = this.first;
            this.first = null;
            this.last = null;
        } else {
            removed = this.first;
            this.first = removed.next;
        }
        this.size--;
        removed.next = null;
        return removed;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.pop();
stack.pop();
console.log(stack)