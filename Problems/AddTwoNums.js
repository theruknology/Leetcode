// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

const ListNode = (val, next) => {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
};

const addTwoNums = (l1, l2) => {
  const liToNum = (l) => {
    let number = 0;
    let power = 0;
    while (l != null) {
      number += l.val * 10 ** power;
      power++;
      l = l.next;
    }
    return number;
  };

  const sum = liToNum(l1) + liToNum(l2);
  const sumStr = sum.toPrecision(21);
  const sumLi = ListNode();
  let cur = sumLi;

  for (let i = sumStr.length; i > 0; i--) {
    cur.val = sumStr[i - 1];
    if (sumStr[i-2] == undefined) {
      break;
    }
    cur.next = ListNode();
    cur = cur.next;
  }
  return sumLi;
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
