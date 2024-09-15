import bt_in_order from "@code/BTInOrder";
import { tree } from "./tree";

test("In order", function () {
    expect(bt_in_order(tree)).toEqual([
        69, 5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
    ]);
});

test("In order traversal recursively", function () {
    class Node<T> {
        value: T;
        left?: Node<T>;
        right?: Node<T>;

        constructor(value: any) {
            this.value = value;
            this.left = undefined;
            this.right = undefined;
        }
    }

    let root = new Node(10);
    root.left = new Node(20);
    root.right = new Node(30);
    root.left.left = new Node(40);
    root.left.right = new Node(50);
    root.right.left = new Node(60);
    root.right.right = new Node(70);

    expect(bt_in_order(root as BinaryNode<number>)).toEqual([
        40, 20, 50, 10, 60, 30, 70,
    ]);
});
