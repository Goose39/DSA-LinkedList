let LinkedList = require('./1. Create a linked list class');

main = () => {
  let SSL = new LinkedList();

  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');

  // SSL.insertLast('Tauhida');
  // SSL.remove('Husker');

  // SSL.insertBefore('Boomer', 'Athena');
  // SSL.insertAfter('Helo', 'Hotdog');

  // SSL.insertAt(3, 'Kat')

  // SSL.remove('Tauhida');

  return SSL
}

module.exports = main();