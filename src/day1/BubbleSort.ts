export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

// Time complexity: O (nˆ2)

function swap(array: number[], index1: number, index2: number) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
