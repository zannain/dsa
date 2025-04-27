# Properties

1. Almost complete. The filled items in the last level are left-justified
2. For any node, its key (priority) is greater than it's parent key (min heap)

*For a max heap, for any node, its key is less than it's parent key*

- Is not sorted across a level but is sorted from root to leaf node which makes inserting and deleting a $Olog(n)$
- The height of a heap is $Olog(n)$

# Formulas

1. Left Child: $2i + 1$
2. Right Child: $2i + 2$
3. Parent: `floor((i - 1) / 2)`

## `heapq` in Python

- built in min-heap


