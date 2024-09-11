export default function bs_list(array: number[], target: number): boolean {
    let low = 0;
    let high = array.length;

    // go forward until the pointers cross each other
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // mid index of the array
        let guess = array[mid]; // mid element

        if (guess === target) {
            return true;
        }

        // if the target number belongs to the RIGHT half
        if (guess < target) {
            // make the low the begining of the right half and exclude the mid guess
            low = mid + 1;
        } else {
            // the target number belongs to the LEFT half of the array
            // make the high the end of the left half and exclude the mid guess
            high = mid - 1;
        }
    }
    // if we finished all search way around and didn't find the target
    return false;
}
