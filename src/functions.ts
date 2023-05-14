const myArray: number[][] = [];

export const table = (rows: number, columns: number) => {
  for (let i: number = 0; i < rows; i++) {
    myArray[i] = [];
    for (let j: number = 0; j < columns; j++) {
      myArray[i][j] = 1;
    }
  }

  return myArray;
};

export const randomizeTable = (table: any) => {
  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      if (Math.random() < 0.5) {
        table[row][col] = "1";
      } else {
        table[row][col] = "0";
      }
    }
  }
};

const table5: any[][] = table(1, 1);
console.log(table5);

randomizeTable(table5);
console.log(table5);

export const checkLive = () => {
  for (let i = 0; i < table5.length; i++) {
    for (let j = 0; j < table5[i].length; j++)
      if (table5[i][j] + 1 === "0") {
        table5[i][j].replace("1", "0");
      }
  }

  return table5;
};

setInterval(() => {
  console.table(checkLive());
}, 1000);
