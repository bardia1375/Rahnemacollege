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
        // پیمایش تا رسیدن به انتهای لیست
        current = current.next;
      }
      current.next = newNode; // افزودن نود جدید به انتهای لیست
    }
  }
  size() {
    console.log("length", this.length);
    return this.length;
  }
  at(n) {
    if (this.string[n] !== undefined) {
      return this.string[n];
    }
  }
  join(separator = ",") {
    // const joinString=this.string.map((el)=>el.value).join(separator)
    // return joinString
    let current = this.head;
    console.log("this.head", current);
    let result = "";
    while (current.next) {
      current = current.next;

      if (current.next) {
        result += current.value + separator;
      } else {
        result += current.value;
      }
    }
    return result;
  }
  // تابع PrintList: چاپ مقادیر نودهای موجود در لیست
  printList() {
    let current = this.head;

    console.log("current", current);
    while (current) {
      this.length++;
      console.log(current.value);
      this.string = [...this.string, current];
      current = current.next;
    }
  }
  map(func) {
    let current = this.head;
    const newList = new LinkedList();
    while (current) {
      newList.insertLast(func(current.value));
      current = current.next;
    }
    return newList;
  }
  filter(func) {
    let current = this.head;
    const newList = new LinkedList();

    while (current) {
      if (func(current.value)) {
        newList.insertLast(current.value);
      }
      current = current.next;
    }
    return newList;
  }
  //تابع بالا به روش بازگشتی
  filterRecursive(func, current = this.head, newList = new LinkedList()) {
    if (!current) {
      return newList;
    }

    if (func(current.value)) {
      newList.insertLast(current.value);
    }

    return this.filterRecursive(func, current.next, newList);
  }



  find(func) {
    let current = this.head;

    while (current) {
      if (func(current.value)) {
        return current.value; 
      }
      current = current.next;
    }

    return null;
  }



}

// استفاده از LinkedList
const list = new LinkedList();
list.insert("a"); // افزودن به ابتدای لیست
list.insertLast("b"); // افزودن به انتهای لیست
list.insertLast("c"); // افزودن به انتهای لیست
list.insert("d"); // افزودن به ابتدای لیست
list.insertLast("z"); // افزودن به ابتدای لیست

list.printList(); // چاپ لیست: باید a، سپس b و سپس c را نمایش دهد
list.size();
console.log(list.at(4));
console.log(list.join(","));
console.log(list.map((el) => el.toUpperCase()));
console.log(list.filter((el) => el < "n"));
const filteredList = list.filterRecursive((el) => el < "n");
filteredList.printList();
// مثال استفاده از تابع find برای یافتن اولین عضوی که مقدارش 'c' است
const foundNode = list.find(value => value === 'c');
console.log("First node with value 'c':", foundNode); // خروجی باید 'c' باشد