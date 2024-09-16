export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}

function search(
    currentNode: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (!currentNode) {
        return false;
    }

    if (currentNode.value === needle) {
        return true;
    }

    if (currentNode.value < needle) {
        return search(currentNode.right, needle);
    } else {
        return search(currentNode.left, needle);
    }
}
