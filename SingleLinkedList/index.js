class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const nodeInstance = new Node(value);
        if(!this.head){
            this.head = nodeInstance;
            this.tail = this.head;
        } else {
            this.tail.next = nodeInstance
            this.tail = nodeInstance
        }
        this.length += 1;
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let currentNode = this.head;
        let newTail = currentNode;
        if(!currentNode.next){
            this.head = null;
            this.tail = null;
            this.length--;
            return currentNode
        }
        while(currentNode.next){
            newTail = currentNode
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return currentNode
    }
    shift(){
        if(!this.head){
            return undefined
        }
        let currentHead = this.head;
        if(!this.head.next) {
            this.tail = null;
        }
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(value){
        const newNode = new Node(value)
        let currentHead = this.head;
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        this.head = newNode;
        this.head.next = currentHead;
        this.length++
        return this;
    }
    get(index){
        let currentHead = this.head;
        if(index < 0 || index >= this.length) return null;
        for(let counter=0;counter !== index;counter++){
            currentHead = currentHead.next
        }
        return currentHead
    }
    set(index,newValue) {
       let currentHead = this.get(index)
       return currentHead ? currentHead.value = newValue : null
    }
    insert(index,value) {
        if(index < 0 || index > this.length) {
            return false
        }
        let newNode = new Node(value)
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let prevNode = this.get(index-1)
        let newNextNode = prevNode.next
        prevNode.next = newNode;
        newNode.next = newNextNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop();
        let prevNode = this.get(index-1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for( let i =0 ; i < this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }
    removeFromEnd(n){
        let current = this.head;
        let iteration = this.length - n;
        if(n === this.length){
            return this.shift()
        } else if(n === 1) {
            return this.pop()
        }
        for(let i=1;i<iteration;i++){
            current = current.next;
        }
        let removeNode = current.next
        current.next = current.next.next;
        return removeNode

    }
}

const l1 = new SinglyLinkedList();
l1.push(1)
l1.push(2)
l1.push(3)
l1.push(4)
l1.push(5)
console.log(l1.removeFromEnd(1))
console.log(l1)

// const l2 = new SinglyLinkedList();
// l2.unshift(1)
// l2.unshift(2)
// l2.unshift(4)

// const addList = (l1,l2) => {

//     let current1 = l1.head;
//     let current2 = l2.head;
//     let sum = 0, carry = 0;
//     // console.log(current1,current1)
//     let newList = new SinglyLinkedList();
//     while(current1 || current2) {
//         if(!current1){
//             return newList.unshift(current2.value)
//         }
//         if(!current2){
//             return newList.unshift(current1.value)
//         }
//         sum = current1.value + current2.value + carry
//         if(sum > 10) {
//             carry = sum % 10;
//             sum = Math.trunc(sum / 10)
//         }
//         newList.unshift(sum)
//         current1 = current1.next;
//         current2 = current2.next;
//     }
//    return newList
// }
// console.log(addList(l1,l2))
//  495
// 1123
// 1618