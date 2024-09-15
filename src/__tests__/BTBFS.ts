import bfs from "@code/BTBFS";
import { bfs_walk } from "@code/BTBFS";
import { tree } from "./tree";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 99)).toEqual(false);
    expect(bfs(tree, 5)).toEqual(true);
    expect(bfs(tree, 9)).toEqual(false);
});

test("walk with a bfs method for each level", function () {
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
    expect(bfs_walk(root as BinaryNode<number>)).toEqual([
        10, // level0
        20, // level1
        30, // level1
        40, // level2
        50, // level2
        60, // level2
        70, // level2
    ]);
});
