// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

const ListNode = (val, next) => {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
};

const addTwoNums = (l1, l2) => {
  
  return 
};

const sample1 = ListNode(0);
let cur = sample1;
const l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
for (let x = 0; x < l1.length; x++) {
  cur.val = l1[x];
  if (l1[x+1] == undefined) {
    break;
  }
  cur.next = ListNode(0);
  cur = cur.next
}
console.log((1e+30).toPrecision(21))

const sample2 = ListNode(3);
sample2.next = ListNode(3);

const returned = addTwoNums(sample1, sample2);
console.log(returned);
