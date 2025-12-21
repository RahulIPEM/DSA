interface NodeType {
  value: number;
  next: NodeType | null;
}

interface LinkedListType {
  head: NodeType;
  tail: NodeType;
  length: number;
}

class ListNode implements NodeType {
  value: number;
  next: NodeType | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: ListNode;
  tail: ListNode;
  length: number;

  constructor(value: number) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: number): LinkedListType {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): LinkedListType | undefined {
    if (!this.head) {
      return undefined;
    } else {
      let prev = this.head;
      let temp = this.head;

      while (temp?.next) {
        prev = temp;
        temp = temp?.next;
      }

      this.tail = prev;
      this.tail.next = null;
      this.length--;
    }
    return this;
  }
}
const linkedList = new LinkedList(5);
// console.log(linkedList);
linkedList.push(10);
// console.log(linkedList);
linkedList.push(20);
console.log(JSON.stringify(linkedList, null, 2));
linkedList.pop();
console.log(JSON.stringify(linkedList, null, 2));
