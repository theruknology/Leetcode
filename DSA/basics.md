# Basic Data Structures & Algorithms To Know

## Concepts:

- Big O Notaion

## Data Structure

### Arrays

An array is a collection of items of the same variable type that are stored sequentially in memory. It’s one of the most popular and simple data structures and often used to implement other data structures.

### Linked Lists

A linked list is a linear sequence of nodes that are linked together. Each node contains a value and a pointer to the next node in the list. Unlike arrays, linked lists do not have indexes, so you must start at the first node and traverse through each node until you get to the nth node. At the end, the last node will point to a null value.

### Stacks

Stacks are linear data structures in a LIFO (last-in, first-out) order. Now, what does that mean? Imagine a stack of plates. The last plate that you put on top of the stack is the first one you take out. Stacks work that way: the last value you add is the first one you remove.

### Queues

Queues are very similar to stacks in that they both are linear data structures with dynamic size. However, queues are FIFO (first-in, first-out) data structures. To visualize this data structure, imagine you are lining up for a roller coaster. The first people that line up get to leave the line for the ride.

### Graphs

A graph is a collection of vertices (nodes) that are connected by edges, creating a network.

### Hash Tables

Hashing is the process of assigning an object into a unique index, known as a key. Each object is identified using a key-value pair, and the collection of objects is known as a dictionary.

### Binary Search Trees

A binary search tree is a binary tree data structure made up of nodes. The nodes are arranged with the following properties:

- The left subnode always contains values less than the parent node.
- The right subnode always contains values greater than the parent node.
- Both subnodes will also be binary search trees.

## Algorithms

### Recursions

Recursion is the practice in which a function calls itself directly or indirectly. The corresponding function that is called is known as the recursive function. While recursion is often associated as an algorithm, it may help to understand it as a way or methodology to solve a problem.

### Bubble Sort

Bubble sort is a simple sorting algorithm that swaps adjacent elements if they are in an incorrect order. The algorithm will iterate through an array multiple times until the elements are in the correct order.

### Selection Sort

Selection sort is an algorithm that splits a collection of elements into sorted and unsorted. During each iteration, the algorithm finds the smallest element in the unsorted group and moves it to the end of the sorted group.

### Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final array by sorting an element one at a time. How does it work?

- Examines each element and compare it to the sorted elements on the left
- Inserts the item in the correct order for the sorted elements

### Binary Search

Binary search is the most efficient searching algorithm to find an element. The algorithm works by comparing the middle element of an array or list to the target element. If the values are the same, the index of the element will be returned. If not, the list will be cut in half.

If the target value were less than the middle value, the new list would be the left half. If the target value were greater than the middle value, the new list would be the right half.

This process continues where you keep splitting a list and searching one of the halves until the search algorithm finds the target value and returns the position.

### Others

- Heap sort
- Quick sort
- Merge sort
- Dynamic programming
- AVL tree
- Doubly linked list
- Dijkstra’s algorithm
- Tries
