export function findMax(numbers: number[]): number {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

export function findMin(numbers: number[]): number {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

export function findMedian(numbers: number[]): number {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
        return sortedNumbers[middleIndex];
    }
}

export function findAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

export function findIncreasingSequence(numbers: number[]): number[] {
    let currentSequence = [numbers[0]];
    let tempSequence = [numbers[0]];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            tempSequence.push(numbers[i]);
        } else {
            if (tempSequence.length > currentSequence.length) {
                currentSequence = tempSequence;
            }
            tempSequence = [numbers[i]];
        }
    }

    return tempSequence.length > currentSequence.length ? tempSequence : currentSequence;
}

export function findDecreasingSequence(numbers: number[]): number[] {
    let currentSequence = [numbers[0]];
    let tempSequence = [numbers[0]];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            tempSequence.push(numbers[i]);
        } else {
            if (tempSequence.length > currentSequence.length) {
                currentSequence = tempSequence;
            }
            tempSequence = [numbers[i]];
        }
    }

    return tempSequence.length > currentSequence.length ? tempSequence : currentSequence;
}
