// PRE_ORDER we visit the current node before visiting the child nodes
// (current node, left child, right child).

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

function walk(current: BinaryNode<number> | null, path: number[]) {
    // Base case, found the last node
    if (!current) {
        return path;
    }

    // Recurse
    // visit the current
    path.push(current.value);
    // visit as far left as we can
    walk(current.left, path);
    // Then as far right as we can
    walk(current.right, path);

    // post-recurse
    // Return the stack of visited nodes
    return path;
}
