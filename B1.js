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
  this.getMinValue = getMinValue
  this.getMaxValue = getMaxValue
  this.findSpecificData = findSpecificData
  this.getSmallestValue=getSmallestValue
  this.remove = remove;
  this.removeNode = removeNode;
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
    console.log(`node : --> ${nodeToVist.display()} is getting an IN-ORDER visiting day`);
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

function getMinValue(){
  let currentNode = this.rootNode
  while(currentNode.left !== null){
    currentNode = currentNode.left
  }
  return `Here is the Min Value data ---> ${currentNode.data}`
}


function getMaxValue(){
  let currentNode = this.rootNode
  while(currentNode.right !== null){
    currentNode = currentNode.right
  }
  return `Here is the Max Value data ---> ${currentNode.data}`
}

function findSpecificData(data){
  let currentNode = this.rootNode
  while(currentNode && currentNode.data !== data){
    if(data < currentNode.left){
      currentNode = currentNode.left
    }else{
      currentNode = currentNode.right
    }
  }

  return currentNode

}

function getSmallestValue(currentNode){
  if(currentNode.left === null){
    return currentNode
  }else{
    return getSmallestValue(currentNode.left)
  }

}


function remove(data){
  rootNode = removeNode(this.rootNode,data)
}

function removeNode(currentNode,data){
  if(currentNode === null){
    return null
  }
  
  if(data === currentNode.data){
    // node has no children
    if(currentNode.left === null && currentNode.right === null){
      return null
    }

    // have no left child
    if(currentNode.left === null){
      return currentNode.right
    }

    // have no right child
    if(currentNode.right === null){
      return currentNode.left
    }

    // have two children
    let tempNode = getSmallestValue(currentNode.right)
    currentNode.data = tempNode.data
    currentNode.right = this.removeNode(currentNode.right,tempNode.data)

    return currentNode

  }else if( data < currentNode.data){
    currentNode.left = this.removeNode(currentNode.left,data)
    return currentNode
  }

  else{
    currentNode.right = this.removeNode(currentNode.right,data)
    return currentNode
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

const minValue = numbers.getMinValue()
console.log(`The Min Value in The BST is ====> ${minValue}`) 

const maxValue = numbers.getMaxValue()
console.log(`The Max Value in The BST is ====> ${maxValue}`) 

const findVal = numbers.findSpecificData(10)
if(findVal !== null){
  console.log(`Data was found in BST`)
}else{
  console.log(`Data was not found in BST`)
}

// const removeVal = numbers.remove(5)
// if(removeVal !== null){
//   console.log(`Data to be REMOVED was found in BST`)
// }else{
//   console.log(`Data to be REMOVED was not found in BST`)
// }


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