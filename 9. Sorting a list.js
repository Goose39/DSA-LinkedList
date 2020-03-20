let LinkedList = require('./1. Create a linked list class');

main = () => {
  let SSL = new LinkedList();
  SSL.insertFirst(3);
  SSL.insertLast(2);
  SSL.insertLast(5);
  SSL.insertLast(7);
  SSL.insertLast(1);
  return SSL
}


sortList = (list) => {
  // Only one item in list
  if (list.head === null) {
    return list.head
  }

  let prevNode = list.head;
  let currNode = list.head.next;

  while ( currNode != null ) {
    
    if (list.head.value > currNode.value) {
      prevNode.next = currNode.next;
      currNode.next = list.head;
      list.head = currNode;

      prevNode = list.head;
      currNode = list.head.next; 
    }     

    prevNode = currNode;
    currNode = currNode.next; 
  }
  return list
}

let newList = main();
console.log(sortList(newList));