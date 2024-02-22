// У нас есть 3 товара и 5 месяцев. Нужно узнать  среднеарифметическое количество проданных единиц товаров помесячно и за 5 месяцев. 
// Используем  в расчете только числовые элементы массива. Выводим в консоль только информацию с числовым показателем, предварительно делаем проверку.


class Sales {
    constructor(month, rollers, chess, balls) {
      this.month = month;
      this.rollers = rollers;
      this.chess = chess;
      this.balls = balls;
    }
  
    logSales() {
      console.log(`${this.month}: Rollers - ${this.rollers}, Chess - ${this.chess}, Balls - ${this.balls}`);
    }
  
    static calculateAverage(numbers) {
      const numericValues = numbers.filter(item => typeof item === 'number');
      const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
      return sum / numericValues.length;
    }
  }
  
  const salesData = [
    new Sales('Январь', 20, 15, 17),
    new Sales('Февраль', 10, 20, 20),
    new Sales('Март', 36, 5, 10),
    new Sales('Апрель', "пятнадцать", 15, 15),
    new Sales('Май', true)
  ];
  
  function calculateAverageByMonth(salesArray) {
    salesArray.forEach(sales => {
      const { rollers, chess, balls } = sales;
      if (typeof rollers === 'number' && typeof chess === 'number' && typeof balls === 'number') {
        sales.logSales();
        const average = Sales.calculateAverage([rollers, chess, balls]);
        console.log(`Среднее арифметическое: ${average}`);
      }
    });
  }
  
  function calculateAverageForAllMonths(salesArray) {
    const numericValues = salesArray.flatMap(sales => [sales.rollers, sales.chess, sales.balls]).filter(item => typeof item === 'number');
    if (numericValues.length > 0) {
      const allMonthsAverage = Sales.calculateAverage(numericValues);
      console.log(`Среднее арифметическое за все месяцы: ${allMonthsAverage}`);
    }
  }
  
  calculateAverageByMonth(salesData);
  calculateAverageForAllMonths(salesData);