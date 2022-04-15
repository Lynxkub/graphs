class Node {
    constructor(value  , adjacent = new Set()) {
        this.value = value;
        this.adjacent=adjacent;
    }

}

class Graph {
    constructor() {
        this.nodes = new Set();
    }

    addVertex(node) {
        this.nodes.add(node)
    }

    

    addVertices(nodesToAdd) {
        for(let node of nodesToAdd) {
            this.addVertex(node);
        }
    }

    addEdge(node1 , node2) {
        node1.adjacent.add(node2);
        node2.adjacent.add(node1)
    }

    removeEdge(node1 , node2){
        if(node1.adjacent.has(node2)){
            node1.adjacent.delete(node2)
        }
        if(node2.adjacent.has(node1)) {
            node2.adjacent.delete(node1)
        }
    }

    removeVertex(nodeToRemove){
        if(this.nodes.has(nodeToRemove)) {
            this.nodes.delete(nodeToRemove);
            nodeToRemove.adjacent.clear();
            for(let node of this.nodes) {
                if(node.adjacent.has(nodeToRemove)) {
                    node.adjacent.delete(nodeToRemove)
                }
            }
        }
    }

    depthFirstSearch(node1 , node2) {
        let toVisitStack = [node1];
        let visited = new Set(toVisitStack);
        while(toVisitStack.length) {
            let currNode = toVisitStack.pop();
            if(currNode.value === node2.value){
                let answer = [];
                for(let i of visited) {
                    answer.push(i.value)
                }
                return answer;
                
            }if(!visited.has(currNode)){
                visited.add(currNode)
            }
                for(let adjacent of currNode.adjacent) {
                    toVisitStack.push(adjacent);
                }
            

        }
        return false
    }


    breadthFirstSearch(node1 , node2) {
        let toVisitQueue = [node1];
        let visited = new Set(toVisitQueue);
        while(toVisitQueue.length) {
            let currNode = toVisitQueue.shift();
            if(currNode.value === node2.value) {
                let answer = [];
                for(let i of visited) {
                    answer.push(i.value)
                }
                return answer 
            }
            if(!visited.has(currNode)) {
                visited.add(currNode)
            }
            for(let adjacent of currNode.adjacent) {
                toVisitQueue.push(adjacent);
            }
        }
        return false
    }
}

const g = new Graph();
let jake = new Node('jake')
let kayde = new Node('kayde')
let lucas = new Node('lucas')
let jamie = new Node('jamie')
g.addVertices([jake , kayde , lucas , jamie])

let graph = new Graph()
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);
