// Use Recursion to Create a Range of Numbers

// Utilice la recursividad para crear un rango de números

function rangeOfNumbers(startNum: number, endNum: number): number[] {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers: number[] = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
