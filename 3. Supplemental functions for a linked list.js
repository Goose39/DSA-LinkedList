let linkedList = require('./2. Creating a singly linked list');

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

size = (list) => {
  let currentNode = list.head;
  let count = 0;

  if (list.head === null) {
    return count
  }

  

  while( currentNode.next != null) {
    count++
    currentNode = currentNode.next;
  }

  return count
}

isEmpty = (list) => {

  if (list.head === null) {
    return true
  } else return false

}

findPrevious = (item, list) => {

   // Start at the head
   let currNode = list.head;
   let prevNode = list.head; 
   // If the list is empty
   if (!list.head) {
       return null;
   }
   // Check for the item 
   while (currNode.value !== item) {
       /* Return null if it's the end of the list 
         and the item is not on the list */
       if (currNode.next === null) {
           return null;
       }
       else {
           // Otherwise, keep looking 
           prevNode = currNode;
           currNode = currNode.next;

       }
   }
   // Found it
   return prevNode;

}

findLast = (list) => {
  currentNode = list.head;

  while (currentNode.next != null) {
    currentNode = currentNode.next
  }

  return currentNode.value;
}

console.log(display(linkedList));
console.log(size(linkedList));
console.log(isEmpty(linkedList));
console.log(findPrevious('Boomer', linkedList));
console.log(findLast(linkedList));