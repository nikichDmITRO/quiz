export const DATA = [
  {
    question: "Верно ли, что null == undefined?",
    answers: [
      { id: "1", value: "Да", correct: true },
      { id: "2", value: "Нет", correct: false },
     
    ]
  },
  {
    question: "Какая арифметическая операция приводит к ошибке в javascript?",
    answers: [
      { id: "3", value: "Деление на ноль.", correct: false },
      { id: "4", value: "Умножение числа на строку.", correct: false },
      { id: "5", value: "Корень из отрицательного числа.", correct: false },
      { id: "6", value: "Никакая из вышеперечисленных.", correct: true },
    ]
  },
  {
    question: "Что делает оператор ** ?",
    answers: [
      { id: "7", value: "Возводит в степень.", correct: true },
      { id: "8", value: "Умножает число само на себя.", correct: false },
      { id: "9", value: "Нет такого оператора.", correct: false },

    ]
  },
  {
    question: "Что такое ECMAScript?",
    answers: [
      { id: "10", value: "Новый язык программирования.", correct: false },
      { id: "11", value: "Переработанная реализация Javascript.", correct: false },
      { id: "12", value: "Спецификация языка Javascript.", correct: true },

    ]
  },
  {
    question: "Где верно указан запуск всплывающего окна?",
    answers: [
      { id: "13", value: "info ('Hi')", correct: false },
      { id: "14", value: "Нет верных вариантов.", correct: false },
      { id: "15", value: "new alert ('Hi').", correct: false },
      { id: "16", value: "alert ('Hi')", correct: true },

    ]
  },
  {
    question: "Где верно указан вывод данных?",
    answers: [
      { id: "17", value: "documentWrite('Hello').", correct: false },
      { id: "18", value: "prompt('Hello').", correct: false },
      { id: "19", value: "console.log('Hello).", correct: true },
      { id: "20", value: "print(Hello).", correct: false },
      { id: "21", value: "write('Hello').", correct: false },
     ]
   },

   
   {
    question: "Язык JavaScript является подвидом языка Java – верно?",
    answers: [
      { id: "17", value: "Нет.", correct: true },
      { id: "18", value: "Да.", correct: false },
      { id: "19", value: "Наоборот, Java – подвид JavaScript.", correct: false },
     
     ]
   },
   {
    question: "Есть ли разница между вызовами i++ и ++i?",
    answers: [
      { id: "20", value: "Разница в значении, которое возвращает такой вызов.", correct: true },
      { id: "21", value: "Разница в значении i после вызова.", correct: false },
      { id: "22", value: "Нет никакой разницы.", correct: false },
     
     ]
   },
  
];
