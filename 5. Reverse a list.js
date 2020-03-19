let linkedList = require('./2. Creating a singly linked list');

const revList = (list) => {
  let currNode = list.head;
  let prevNode = list.head;
  let nextNode = currNode.next;

  while (currNode.next != null) {

    if (currNode === prevNode) {
      currNode.next = null;
      prevNode = currNode;
      currNode = nextNode;
    } else {
        nextNode = currNode.next
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
      }
    
  }

  list.head = currNode;
  currNode.next = prevNode;

  return list;
} 

display = (list) => {
  let currentNode = list.head;

  if (list.head === null) {
    return console.log("empty list");
  }

  let arr = [];

  while( currentNode != null) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

  return arr;
}

console.log(display(linkedList));

let newList = revList(linkedList);
console.log(display(newList));