// تعریف کلاس Node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// تعریف کلاس LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.string = "";
  }

  // تابع Unshift: افزودن یک عضو به ابتدای لیست
  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  at(n) {
    if (this.string[n] !== undefined) {
      return this.string[n];
    }
  }
  // تابع InsertLast: افزودن یک عضو به انتهای لیست
  insertLast(value) {
    const newNode = new Node(value);
    // console.log("newNodnewNodee", newNode);

    if (this.head === null) {
      // اگر لیست خالی است
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; 
    }
  }
}
console.log(list.insert("a"));
console.log(list.at(4));
