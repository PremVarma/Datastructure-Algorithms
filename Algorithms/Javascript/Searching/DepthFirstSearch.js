// Depth First Search: search follows one branch of the tree all the way down to target or youngest child/end of branch. lower memory requirement (no need to store all child pointers). go as deep as possible starting at left most branch and moving toward the right

// DFS
// (+) less memory
// (+) does path exist?
// (-) can get slow (if very deep)
// if you have additional info on target node location (and it is close to bottom) => use DFS


// DFS:
// Time complexity is again O(|V|), you need to traverse all nodes.
// Space complexity - depends on the implementation, a recursive implementation can have a O(h) space complexity [worst case], where h is the maximal depth of your tree.
// Using an iterative solution with a stack is actually the same as BFS, just using a stack instead of a queue - so you get both O(|V|) time and space complexity.

//Interview Q's:
//If you know a solution is not far from the root of the tree: Breadth
//If the tree is very deep and solutions are rare: Breadth (Depth will take too long)
//If the tree is very wide: Depth (Breadth will take too much memory)
//If solutions are frequent but located deep in the tree: Depth
//Determining whether a path exists between two nodes: Depth
//Finding the shortest path: Breadth
//------------------------------------


let DFS = [9, 4, 1, 6, 20, 15, 170]