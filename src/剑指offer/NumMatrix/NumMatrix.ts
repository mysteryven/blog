class NumMatrix {
  private sums: number[][] = [];

  constructor(matrix: number[][]) {
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    let sum: number;

    for (let i = 0; i <= rowLen; i++) {
      this.sums[i] = new Array(colLen + 1).fill(0);
    }

    for (let i = 0; i < rowLen; i++) {
      sum = 0;
      for (let j = 0; j < colLen; j++) {
        sum += matrix[i][j];
        this.sums[i + 1][j + 1] = this.sums[i][j + 1] + sum;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.sums[row2 + 1][col2 + 1] -
      this.sums[row1][col2 + 1] -
      this.sums[row2 + 1][col1] +
      this.sums[row1][col1]
    );
  }
}
