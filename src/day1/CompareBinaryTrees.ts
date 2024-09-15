export default function compare(
    a: BinaryNode<number> | null | undefined,
    b: BinaryNode<number> | null | undefined,
): boolean {
    // Base case
    // structural check
    if (a === null && b === null) {
        return true;
    }

    // strtuctural check
    if (a === null || b === null) {
        // the might be two things:
        // nodes has different values OR
        // the structure are not the same (one node is null and other one exist)
        return false;
    }

    // value check
    if (a?.value !== b?.value) {
        return false;
    }

    // recurse
    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
