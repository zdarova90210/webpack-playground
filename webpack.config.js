const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // __dirname - системная переменная. Путь до текущей папки. Без имени файла.
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Чистим вилкой папку на каждый билд
    // [contenthash] - добавить хэш в имя файла.
    // Помогает отдавать юзеру актуальную версию кода. Браузер юзера не будет доставать закэшированный файлик т.к. имя новое.
    // Переменная name - стандартное имя, данное вебпаком. Сейчас это - main.
    filename: '[name].[contenthash].js'
  }
}
