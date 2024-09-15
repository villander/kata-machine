// IN_ORDER we visit the current node in the order it would naturally fall
// (left child, current node, right child).
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

function walk(current: BinaryNode<number> | null, path: number[]) {
    // Base case, found the last node
    if (!current) {
        return path;
    }

    // Recurse
    // visit as far left as we can
    walk(current.left, path);
    // visit the current
    path.push(current.value);
    // Then as far right as we can
    walk(current.right, path);

    // post-recurse
    // Return the stack of visited nodes
    return path;
}
