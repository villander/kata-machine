type Node = BinaryNode<number> | null | undefined;

export default function bfs(root: BinaryNode<number>, needle: number): boolean {
    // FIFO: first-in, first-out
    let queue: Node[] = [root];

    // since we need all the nodes at a particular level
    // we will need to iterate and push all the children in the queue
    while (queue.length) {
        let currentNode = queue.shift() as Node;

        // Search
        if (currentNode?.value === needle) {
            // we found the value
            return true;
        }

        // Add the children (if exisit) of the current node in the queue
        if (currentNode?.left) queue.push(currentNode.left);
        if (currentNode?.right) queue.push(currentNode.right);

        // next loop it will check the next level of the tree
    }

    return false;
}

export function bfs_walk(root: BinaryNode<number>): number[] {
    // FIFO: first-in, first-out
    let queue: Node[] = [root];
    let path: number[] = [];

    // since we need all the nodes at a particular level
    // we will need to iterate and push all the children in the queue
    while (queue.length) {
        let currentNode = queue.shift() as Node;

        if (currentNode) {
            // Add the node to the path
            path.push(currentNode.value);
        }

        // Add the children (if exisit) of the current node in the queue
        if (currentNode?.left) queue.push(currentNode.left);
        if (currentNode?.right) queue.push(currentNode.right);

        // next loop it will check the next level of the tree
    }

    return path;
}

// Time Complexity O(N) where N is the number of nodes in the tree
// Space Complexity O(N) The queue will hold all the nodes at a single level
