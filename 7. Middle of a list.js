let linkedList = require('./2. Creating a singly linked list');

middle = (list) => {
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
  let middle = Math.floor(listLength/2);

  for (let i = 1; i <= middle; i++) {
    currNode = currNode.next;
  }

  return currNode

}

console.log(middle(linkedList));