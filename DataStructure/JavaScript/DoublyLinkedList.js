class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    
    append(value) {
        //Code here
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
      //Code here
      const newNode = new Node(value)
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
      this.length++
      return this
    }

    printList() {
      const array = []
      let currentNode = this.head
      while(currentNode !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      return array.join(' -> ')
    }
    
    traverseToIndex(index) {
      let counter = 0
      let currentNode = this.head
      while(counter !== index) {
        currentNode = currentNode.next
        counter++
      }
      return currentNode
    }

    insert(index, value) {
      if(index >= this.length) {
        return this.append(value)
      }
      const newNode = new Node(value)
      const leader = this.traverseToIndex(index - 1)
      const follower = leader.next
      leader.next = newNode
      newNode.prev = leader
      newNode.next = follower
      follower.prev = newNode
      this.length++
      return this.printList()
    }

    remove(index) {
      if(index >= this.length) {
        console.log("Entered index out of bounds")
      }
      if(this.length === 0) {
        console.log("Linked List is empty");
      }
      const leader = this.traverseToIndex(index - 1)
      const unwantedNode = leader.next
      leader.next = unwantedNode.next
      unwantedNode.next.prev = leader
      delete this.unwantedNode
      this.length--
      return this.printList()
    }

   
}
  
let myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(7);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
myLinkedList.remove(2)
console.log(myLinkedList.printList());
  