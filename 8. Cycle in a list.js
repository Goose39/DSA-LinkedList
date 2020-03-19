let CycleList = require('./1. Create a linked list class');

const checkCycle = (list) => {
  // No elements in list
  if (list.head === null) {
    return false
  }

  let fastTrack = list.head.next;
  let slowTrack = list.head

  while (fastTrack != null && fastTrack.next != null && slowTrack != null) {
    if (fastTrack.value === slowTrack.value) {
      return true
    }

    fastTrack = fastTrack.next.next;
    slowTrack = slowTrack.next;

    console.log('fastTrack', fastTrack)
    console.log('slowTrack', slowTrack)
  }

  return false

}
console.log(checkCycle(CycleList));