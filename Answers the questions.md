1. Что такое DOM?
   DOM (Document Object Model) — это интерфейс, позволяющий JS работать с разметкой документа. Когда пользователь открывает веб-страницу, браузерный движок переводит её содержимое в понятный для JavaScript вид — создаёт DOM-дерево.
2. Что такое BOM?
   BOM (Browser Object Model) — это набор глобальных объектов, которые управляют поведением браузера. Все они находятся внутри объекта window.

3. Каким методом можно получить элемент по его идентификатору в DOM?
   document.getElementById();
4. Каким методом можно создать новый элемент в DOM?
   document.createElement();
5. Каким методом можно добавить класс к элементу в DOM?
   classList.add();
6. Каким методом можно изменить текстовое содержимое элемента в DOM?
   textContent;
7. Что такое объект события и какие у него могут быть свойства?
   Объект Event описывает событие, произошедшее на странице. Одной из причин возникновения событий являются действия пользователя, такие как клики мышкой MouseEvent или ввод с клавиатуры KeyboardEvent. Существует множество различных событий с разным набором информации.

Свойства:

- bubbles — является ли данное событие всплывающим.
- cancelable — является ли событие отменяемым.
- currentTarget — указывает на элемент, на котором установлен обработчик события.
- defaultPrevented — отменено ли поведение события по умолчанию.
- eventPhase — указывает на фазу срабатывания события.
- isTrusted — указывает на происхождение события, будет в значении true, если событие инициировано действиями пользователя. false — если событие инициировано из кода с помощью dispatchEvent().
- target — ссылка на объект, которым было инициировано событие. Например, если событие произошло на поле ввода, мы получим ссылку на этот DOM элемент.
- timeStamp — время возникновения события в миллисекундах.
- type — тип события.

8. Есть элемент: <input id= "input" value = "Привет">. Какой вызов поменяет значение в нём?
   document.getElementById('input').value = 'Новое значение';

9. Для чего используется запись: setAttribute(name, value)?
   Добавляет указанные атрибут и его значение к элементу
10. Как сделать переход на другую страницу при клике на кнопку (без <a href=...>, только средствами JavaScript)?

<!-- HTML: <button id="myButton">Нажми меня!</button> -->

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
window.location.href = "http://www.example.com";
});

11. Найдите ошибку в коде, которая мешает изменить цвет текста при нажатии на кнопку.
<body>
  <h1 id="myElement">Hello, World!</h1>
  <button onclick="changeColor()">Change Color</button>
	<script>
	    function changeColor() {
	      let element = document.getElementByid('myElement'); // Id должна быть с заглавной буквы
	      element.style.color = 'red';
	    }
	 </script>
</body>
​
12. Найдите ошибку в коде, которая мешает добавить новый элемент списка при нажатии на кнопку.
<body>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <button onclick="addListItem()">Add Item</button>
  <script>
    function addListItem() {
      let list = document.getElementById('myList');
      let item = document.createElement('li');
      item.innerHTML = 'New Item';
      item.append(item); // list.append(item); - правильный вариант
    }
  </script>
</body>
​
13. Найдите ошибку в коде, которая мешает удалить параграф при нажатии на кнопку.
<body>
  <p class="myParagraph">This is a paragraph.</p>
  <button onclick="removeParagraph">Remove Paragraph</button> 
  <!-- отсутствуют скобоки в вызове функции: onclick="removeParagraph()" -->
  <script>
    function removeParagraph() {
      let paragraph = document.getElementsByClassName('myParagraph'); 
// Так как с помощью getElementsByClassName выводится массив, то нам нужно использовать [] для выбора элемента, либо изменить селектор, например, document.querySelector('.myParagraph')
      paragraph.remove();
    }
  </script>
</body>
​
14. Найдите ошибку в коде, которая мешает добавить изображение при нажатии на кнопку.
<body>
  <button onclick="showImage()">Показать изображение</button>
</body>
<script>
    function showImage() {
      const img = document.createElement('img');
      img.src = image.jpg; //отсутствуют кавычки: img.src = "image.jpg";
      document.body.append(img);
    }
</script>
