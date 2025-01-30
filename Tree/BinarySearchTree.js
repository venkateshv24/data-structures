class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(val){
        let node = new Node(val);
        if(this.root === null){
            this.root = node;
            return this;
        } else {
            let current = this.root;
                while(current){
                    if(current.value < val) {
                        if(current?.right){
                            current = current?.right;
                        } else {
                            current.right = node;
                            return this;
                        }
                    } else {
                        if(current?.left){
                            current = current?.left;
                        } else {
                            current.left = node;
                            return this;
                        }
                    }
                }
        }
    }

    find(val) {
        if(this.root === null) return false;
        if(this.root.value === val) {
            return true
        }
        let current = this.root;
        let found = false;
        while(current && !found) {
            if(val > current.value) {
                current = current.right;
            } else if(val < current.value){
                current = current.left;
            } else {
                found = true;
            }
        }
        return found
    }

    bfs(){
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while(queue.length !== 0) {
            let dequed = queue.shift();
            visited.push(dequed?.value);
            if(dequed?.left){
                queue.push(dequed?.left);
            }
            if(dequed?.right){
                queue.push(dequed?.right);
            }
        }
        console.log(visited)
        return visited
    }

    DFSPre(){
        let visited = [];
        let current = this.root;
        const helper = (node) => {
            visited.push(node?.value);
            if(node?.left) helper(node?.left);
            if(node?.right) helper(node?.right);
        }
        helper(current);

        // With Loop
        // let queue = [];
        // queue.push(this.root);
        // while(queue.length) {
        //     let dequed = queue.pop();
        //     visited.push(dequed?.value);
        //     if(dequed?.right){
        //         queue.push(dequed?.right);
        //     }
        //     if(dequed?.left){
        //         queue.push(dequed?.left);
        //     }
        // }
        console.log(visited)
        return visited
    }

    DFSPost(){
        let visited = [];
        let current = this.root;
        const helper = (node) => {
            if(node?.left) helper(node?.left);
            if(node?.right) helper(node?.right);
            visited.push(node?.value);
        }
        helper(current);

        // With Loop
        // let queue = [];
        // queue.push(this.root);
        // while(queue.length) {
        //     let dequed = queue.pop();
        //     visited.push(dequed?.value);
        //     if(dequed?.right){
        //         queue.push(dequed?.right);
        //     }
        //     if(dequed?.left){
        //         queue.push(dequed?.left);
        //     }
        // }
        console.log(visited)
        return visited
    }


    DFSIn(){
        let visited = [];
        let current = this.root;
        const helper = (node) => {
            if(node?.left) helper(node?.left);
            visited.push(node?.value);
            if(node?.right) helper(node?.right);
        }
        helper(current);

        // With Loop
        // let queue = [];
        // queue.push(this.root);
        // while(queue.length) {
        //     let dequed = queue.pop();
        //     visited.push(dequed?.value);
        //     if(dequed?.right){
        //         queue.push(dequed?.right);
        //     }
        //     if(dequed?.left){
        //         queue.push(dequed?.left);
        //     }
        // }
        console.log(visited)
        return visited
    }
}

let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.insert(14);
bst.bfs();
bst.DFSPre();
bst.DFSPost();
bst.DFSIn();

//          10
//     6            15
// 3      8      14    20