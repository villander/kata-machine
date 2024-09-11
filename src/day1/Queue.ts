export default class Queue<T> {
    public length: number;
    private queue: T[];

    constructor() {
        this.queue = [];
        this.length = 0;
    }

    enqueue(item: T): void {
        this.queue.push(item);
        this.length++;
    }
    deque(): T | undefined {
        if (!this.length) {
            // queue is empty
            return undefined;
        }

        const el = this.queue.shift();
        this.length--;
        return el;
    }
    peek(): T | undefined {
        return this.queue[this.length - 1];
    }
}
