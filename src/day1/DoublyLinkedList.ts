type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Firstly `node` and `head` points to each orther
        newNode.next = this.head;
        this.head.prev = newNode;
        // Now head is the new node
        this.head = newNode;
    }

    insertAt(item: T, index: number): boolean {
        const newNode = { value: item } as Node<T>;

        if (index < 0 || index > this.length || this.isEmpty()) {
            return false;
        } else if (index === 0) {
            this.prepend(item);
            return true; // Return true to indicate successful insertion
        } else if (index === this.length) {
            // If inserting at the end, update the tail
            this.append(item);
            return true;
        }
        let currentNode = this.head;
        let iterator = 0;

        while (index < iterator) {
            currentNode = currentNode?.next;
            iterator++;
        }

        // Link the new node with the current position (index)
        newNode.next = currentNode;
        // Link the new node with the `position.prev`
        newNode.prev = currentNode?.prev;

        // Link the previous node to the new Node
        // @ts-ignore
        currentNode.prev.next = newNode;

        // Link the position (index) node to the new Node
        // @ts-expect-error
        currentNode.prev = node;

        this.length++; // Increment the length of the list
        return true; // Return true to indicate successful insertion
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Firstly `node` points to tail node
        newNode.prev = this.tail;
        // @ts-expect-error
        this.tail.next = newNode;
        // Now tails is the new node
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        return this.removeNode(item);
    }

    get(index: number): T | undefined {
        if (this.isEmpty()) {
            return;
        }

        let currentNode = this.head;
        let iterator = 0;

        while (currentNode) {
            if (index === iterator) {
                return currentNode.value;
            }
            iterator++;
            currentNode = currentNode.next;
        }

        return undefined;
    }

    removeAt(index: number): T | undefined {
        if (this.isEmpty()) {
            return;
        }

        let currentNode = this.head;
        let iterator = 0;

        while (currentNode) {
            if (index === iterator) {
                return this.removeNode(currentNode.value);
            }
            iterator++;
            currentNode = currentNode.next;
        }

        return undefined;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    private removeNode(item: T): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            const out = this.head?.value;
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return out as T;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode?.value === item) {
                // We found it!
                break;
            }

            currentNode = currentNode.next;
        }

        if (!currentNode) {
            // Item not found into the list
            return undefined;
        }

        this.length--;

        // If the item to be removed node is a head.
        if (currentNode === this.head) {
            this.head = currentNode?.next;
        }

        // If the item to be removed is a tail.
        if (currentNode === this.tail) {
            this.tail = currentNode?.prev;
        }

        if (currentNode?.prev) {
            // If the item to be removed has prev and next.
            currentNode.prev.next = currentNode?.next;
        }

        if (currentNode?.next) {
            // If the item to be removed has prev and next.
            currentNode.next.prev = currentNode?.prev;
        }

        // Break the old links
        // @ts-expect-error
        currentNode?.prev = undefined;
        // @ts-expect-error
        currentNode?.next = undefined;

        return currentNode?.value as T;
    }
}
