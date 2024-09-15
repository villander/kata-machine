// POST_ORDER we visit the current node after visiting the child nodes
// (left child, right child, current node).
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

function walk(current: BinaryNode<number> | null, path: number[]) {
    // Base case, there's no more nodes
    if (current === null) {
        return path;
    }

    // pre-recurse

    // recurse
    // visit as far left as we can
    walk(current.left, path);
    // visit as far right as we can
    walk(current.right, path);
    // visit the current
    path.push(current.value);

    //post-recurse
    // Return the stack of visited nodes
    return path;
}
