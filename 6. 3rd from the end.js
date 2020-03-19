let linkedList = require('./2. Creating a singly linked list');

thirdLast = (list) => {
  let currNode = list.head
  let listLength = 0;

  while (currNode != null) {
    currNode = currNode.next
    listLength++
  }

  if (listLength < 3) {
    return "List length < 3 elements"
  }

  currNode = list.head;

  for (let i = 1; i <= listLength - 3; i++) {
    currNode = currNode.next;
  }

  return currNode

}

console.log(thirdLast(linkedList));