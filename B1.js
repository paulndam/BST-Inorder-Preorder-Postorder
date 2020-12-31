/** @format */

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.display = display;
}

function display() {
  return this.data;
}
//    5
//  /   \
// 4     7
//

// build class to represent the BST
// this class will have only one data which is the node

function BST() {
  this.rootNode = null;
  this.insertNewNode = insertNewNode;
  this.InOrder = InOrder;
  this.predOrder = preOrder;
  this.postOrder = postOrder;
}

function insertNewNode(data) {
  let newNode = new Node(data, null, null);
  if (this.rootNode === null) {
    this.rootNode = newNode;
  } else {
    let currentNode = this.rootNode;
    let parent;
    while (true) {
      parent = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode === null) {
          parent.left = newNode;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }
}

function InOrder(nodeToVist) {
  if (nodeToVist !== null) {
    InOrder(nodeToVist.left);
    console.log(`node : --> ${nodeToVist.display()} is getting a visiting day`);
    InOrder(nodeToVist.right);
  }
}

function preOrder(nodeToVist){
    if(nodeToVist !== null){
        console.log(`node : --> ${nodeToVist.display()} is getting a PRE-ORDER visiting day`);
        preOrder(nodeToVist.left)
        preOrder(nodeToVist.right)
    }
}

function postOrder(nodeToVist){
    if(nodeToVist !== null){
        postOrder(nodeToVist.left)
        postOrder(nodeToVist.right)
        console.log(`node : --> ${nodeToVist.display()} is getting a POST-ORDER visiting day`);
    }
}


const numbers = new BST();
numbers.insertNewNode(5);
numbers.insertNewNode(3);
numbers.insertNewNode(7);
numbers.insertNewNode(10);
numbers.insertNewNode(2);
numbers.insertNewNode(11);
numbers.insertNewNode(15);
console.log(`Inorder Traversal`)
numbers.InOrder(numbers.rootNode)
console.log('<----------------------->')
const scores = new BST()
scores.insertNewNode(5)
scores.insertNewNode(9)
scores.insertNewNode(3)
scores.insertNewNode(8)
scores.insertNewNode(12)
scores.insertNewNode(20)
scores.insertNewNode(6)
console.log(`PreOrder Traversal`)
scores.predOrder(scores.rootNode)
console.log('<----------------------->')
const points = new BST()
points.insertNewNode(15)
points.insertNewNode(4)
points.insertNewNode(30)
points.insertNewNode(23)
points.insertNewNode(65)
points.insertNewNode(70)
points.insertNewNode(40)
console.log(`PostOrder Traversal`)
points.postOrder(points.rootNode)