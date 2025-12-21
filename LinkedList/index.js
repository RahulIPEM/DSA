var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var newNode = new ListNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    LinkedList.prototype.push = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    LinkedList.prototype.pop = function () {
        if (!this.head) {
            return undefined;
        }
        else {
            var prev = this.head;
            var temp = this.head;
            while (temp === null || temp === void 0 ? void 0 : temp.next) {
                prev = temp;
                temp = temp === null || temp === void 0 ? void 0 : temp.next;
            }
            this.tail = prev;
            this.tail.next = null;
            this.length--;
        }
        return this;
    };
    return LinkedList;
}());
var linkedList = new LinkedList(5);
// console.log(linkedList);
linkedList.push(10);
// console.log(linkedList);
linkedList.push(20);
console.log(JSON.stringify(linkedList, null, 2));
linkedList.pop();
console.log(JSON.stringify(linkedList, null, 2));
