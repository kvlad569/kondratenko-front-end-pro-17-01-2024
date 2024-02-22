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
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
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
  
  Sales.calculateAverageByMonth = function(salesArray) {
    salesArray.forEach(sales => {
      sales.logSales();
      const { rollers, chess, balls } = sales;
      const average = Sales.calculateAverage([rollers, chess, balls]);
      console.log(`Среднее арифметическое: ${average}`);
    });
  };
  
  Sales.calculateAverageForAllMonths = function(salesArray) {
    const allNumbers = salesArray.flatMap(sales => [sales.rollers, sales.chess, sales.balls]);
    const allMonthsAverage = Sales.calculateAverage(allNumbers);
    console.log(`Среднее арифметическое за все месяцы: ${allMonthsAverage}`);
  };
  
  Sales.calculateAverageByMonth(salesData);
  Sales.calculateAverageForAllMonths(salesData);