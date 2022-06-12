class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  find(value) {
    let currNode = this.head
    while (currNode.value !== value) {
      currNode = currNode.next
    }
    return currNode
  }

  append(newValue) {
    const newNode = new Node(newValue)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue)
    newNode.next = node.next
    node.next = newNode
  }

  remove(value) {
    let prevNode = this.head
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next
    }
  }

  display() {
    let currNode = this.head
    let displayString = '['
    while (currNode !== null) {
      displayString += `${currNode.value}, `
      currNode = currNode.next
    }

    displayString = displayString.substr(0, displayString.length - 2)
    displayString += ']'
    console.log(displayString)
  }
}

const linkedList = new SinglyLinkedList()
// console.log('000000===>: ', linkedList);
linkedList.append(1)
// console.log('11111===>: ', linkedList);
linkedList.append(2)
// console.log('222222===>: ', linkedList);
linkedList.append(3)
// console.log('333333===>: ', linkedList);
linkedList.append(5)
// console.log('5555555===>: ', linkedList);
linkedList.display()
console.log(linkedList.find(3))
linkedList.remove(3)
linkedList.display()
linkedList.insert(linkedList.find(2), 10)
linkedList.display()
