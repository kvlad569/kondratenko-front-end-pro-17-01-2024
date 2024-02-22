// У нас есть 3 товара и 5 месяцев. Нужно узнать  среднеарифметическое количество проданных единиц товаров помесячно и за 5 месяцев.

class Sales {
    constructor(month, rollers, chess, balls) {
      this.month = month;
      this.rollers = rollers;
      this.chess = chess;
      this.balls = balls;
    }
  
    static calculateAverage(array) {
      const numbers = array.filter(item => typeof item === 'number');
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum / numbers.length;
    }
  
    logSales() {
      console.log(`${this.month}: Rollers - ${this.rollers}, Chess - ${this.chess}, Balls - ${this.balls}`);
    }
  }
  
  const salesData = [
    new Sales('Январь', 20, 15, 17),
    new Sales('Февраль', 10, 20, 20),
    new Sales('Март', 36, 5, 10),
    new Sales('Апрель', 15, 15, 15),
    new Sales('Май', 30, 11, 22)
  ];
  
  salesData.forEach(sales => {
    sales.logSales();
    const average = Sales.calculateAverage([sales.rollers, sales.chess, sales.balls]);
    console.log(`Среднее арифметическое: ${average}`);
  });
  
  const allMonthsAverage = Sales.calculateAverage(salesData.map(sales => [sales.rollers, sales.chess, sales.balls]).flat());
  console.log(`Среднее арифметическое за все месяцы: ${allMonthsAverage}`);