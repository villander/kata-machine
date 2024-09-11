class Node<T> {
    public value: T;
    public next?: Node<T>;

    constructor(data: T) {
        this.value = data;
        this.next = undefined;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    /**
     * Add the new node to the beginning of the list
     * @param item
     */
    prepend(item: T): void {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // The head points to the new node and set the tail with the new node
            // @ts-ignore
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {}

    /**
     * Add the new node to the end of the list
     * @param item
     */
    append(item: T): void {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // The tail points to the new node and set the tail with the new node
            // @ts-ignore
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let nodeToRemove;

        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            /* There is one node in the list */
            nodeToRemove = this.head;
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return nodeToRemove?.value;
        }

        // Two pointers
        let currentNode = this.head;
        let previousNode;

        // Until find the value or reach run out the list
        while (currentNode?.value !== item || currentNode.next) {
            previousNode = currentNode;
            // current node is now the next node
            currentNode = currentNode?.next;
        }

        // Node found, it's the currentNode
        nodeToRemove = currentNode;
        // Previous node, now points to the next node after the one that must be removed
        // 1 -> 2 -> 3. So 2 must be removed so the 1 now points to 3. Resuting in 1 -> 3 after remotion.
        (previousNode as Node<T>).next = currentNode.next;

        // If the it's the last element to be removed, make the previous the tail
        if (previousNode?.next === undefined) {
            this.tail = previousNode;
        }

        this.length--;

        // we found the index, please return it
        return currentNode?.value;
    }

    get(index: number): T | undefined {
        // if the index does not exist or the list is empty
        if (index < 0 || index > this.length || this.isEmpty()) {
            return undefined;
        }

        // we want the first node
        if (index === 0) {
            return this.head?.value;
        }

        // we want the last node
        if (index === this.length - 1) {
            return this.tail?.value;
        }

        // we want something in the way around
        let currentNode = this.head;
        let iterator = 0;

        // stop when reach the iterator === index
        // because we already got the position(index) doing `currentNode = currentNode.next` in the last iteration
        while (iterator < index) {
            iterator++;
            // current node is now the next node
            currentNode = currentNode?.next;
        }

        // we found the index, please return it
        return currentNode?.value;
    }

    // @ts-ignore
    removeAt(idx: number): T | undefined {}

    isEmpty(): boolean {
        return this.length === 0;
    }
}
