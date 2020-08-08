// Middle of Linked List https://leetcode.com/problems/middle-of-the-linked-list/
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])

// The obvious solution to this is: 
// loop through the linked list and find the lenght of the list, l
// get middle point with l/2 + 1 

// The second idea is Floyd's Tortoise and Hare
// there are two pointers with one moving twice as much
// when the second pointer reaches the end, we return the first one. 
// Both have O(n) time complexity, but Floyd's algorithm is 1/3 faster: N + N/2 vs N (fast & slow pointer traverse half of N).

// Solution 1 My Attempt at Floyd's Tortoise and Hare Algorithm

var middleNode = function(head) {
  let fast = head;
  while(true) {
      if (fast.next == null) {
          return head;
      }
      if (fast.next.next == null) {
          head = head.next;
          return head;
      }
      
      head = head.next;
      fast = fast.next;
      fast = fast.next;
  };
};


// Solution 2 More Clean Alternative 
// Credit: https://leetcode.com/problems/middle-of-the-linked-list/discuss/426521/Javascript-two-pointers-(fast-and-slow)

var middleNode = function(head) {
  let fast = slow = head;
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
};

// Solution 3 The Simple Two for Loop #
// Credit: https://leetcode.com/problems/middle-of-the-linked-list/discuss/569428/JavaScript-two-O(N)-solutions

var middleNode = function(head) {
    let hi = head, cnt = 1;
    while (hi.next) {
        hi = hi.next;
        cnt++;
    }
    cnt = parseInt(cnt / 2);
    while (cnt--) {
        head = head.next;
    }
    return head;
};

