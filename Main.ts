import * as fs from 'fs';
import * as functions from './Functions'

function readNumbersFromFile(filename: string): number[] {
    const fileContent = fs.readFileSync(filename, 'utf-8');
    const lines = fileContent.trim().split('\n');
    const numbers = new Array<number>(lines.length);

    for (let i = 0; i < lines.length; i++) {
        numbers[i] = parseInt(lines[i], 10);
    }

    return numbers;
}

function main(filename: string) {
    const numbers = readNumbersFromFile(filename);

    console.log('Максимальне число:', functions.findMax(numbers));
    console.log('Мінімальне число:', functions.findMin(numbers));
    console.log('Медіана:', functions.findMedian(numbers));
    console.log('Середнє арифметичне:', functions.findAverage(numbers));

    const increasingSequence = functions.findIncreasingSequence(numbers);
    const decreasingSequence = functions.findDecreasingSequence(numbers);

    console.log('Найбільша послідовність чисел, яка збільшується:', increasingSequence);
    console.log('Найбільша послідовність чисел, яка зменьшується:', decreasingSequence);
}

const filename = "C:/Users/Yarik_Shaman/Desktop/10m.txt";
main(filename);