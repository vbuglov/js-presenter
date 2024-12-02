const makeData = () => {

  const contents = [
    {
      "type": "markdown",
      "content": `
# Netify
Инструмент для перехвата сообщений в браузере
      `
    },
    {
      "type": "javascript",
      "content": `
const el = fetch('/api/v1/books')
  .then((el) => el.json())
  .then((el) => {
    console.html('success')
    console.html(el)
  })
  .catch((error) => {
    console.html(error.toString())
  })
      `
    },
    {
      "type": "markdown",
      "content": `
# WebApi

## API
Интерфейс прикладного программирования (Application Programming Interfaces, APIs) — это готовые конструкции языка программирования, 
позволяющие разработчику строить сложную функциональность с меньшими усилиями. Они "скрывают" более сложный код от программиста, обеспечивая простоту использования.

## О Api в цифрах

За основу исследования был взят сайт

* https://developer.mozilla.org/ru/docs/Web/API
      `
    },
    { "type": "newline", content: "" },
    { "type": "newline", content: "" },
    {
      "type": "markdown",
      "content": `
### Web API Определение своими словами
* Расширение стандартного API языка JavaScript для решения задач на клиенте      
* Представляет набор интерфейсов решающих группу задач

### Web API в цифрах

* Общее число Спецификаций: 138
* Число Спецификаций в разработке: 42 из 138

* Общее число Интейрфейсов: 1008
* Число Интейрфейсов в разработке: 213 из 1008

### Web Storage API

* Storage
* Window
* StorageEvent
      `
    },
    {
      "type": "javascript",
      "content": `
console.html(localStorage.getItem('catName'))      

localStorage.setItem('catName', 'Вася')
console.html(localStorage.getItem('catName'))

      `
    },
    { "type": "newline", content: "" },
    {
      "type": "markdown",
      "content": `
### Intersection Observer API
      `
    },
    {
      "type": "javascript",
      "content": `
const element = document.createElement('div');
element.style.position = 'relative';
element.style.width = '500px';
element.style.height = '300px';
element.style.border = '1px solid black';


// Создаем квадратик
const square = document.createElement('div');
square.style.position = 'absolute';
square.style.width = '50px';
square.style.height = '50px';
square.style.backgroundColor = 'purple';
square.style.left = '0';
square.style.top = '75px';
square.style.zIndex = '20'

// Добавляем квадратик в родителя
element.appendChild(square);

// Добавляем родителя в тело документа
console.render(element)

// Анимируем движение квадратика
let position = 0;
function animate() {
    position += 2;
    square.style.left = position + 'px';
    if (position < 750) {
        requestAnimationFrame(animate);
    }
}
animate();

// Настраиваем Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            square.style.backgroundColor = 'blue';
        }
    });
}, {
    root: element
});

// Наблюдаем за квадратиком
observer.observe(square);
      
      `
    },
    { "type": "newline", content: "" },
    {
      "type": "markdown",
      "content": `
### Web GPU
      `
    },
    {
      "type": "javascript",
      "content": `
localStorage.setItem('catName', 'Вася')
console.html(localStorage.getItem('catName'))

      `
    },
  ].map((el) => {
    if (!el.content) return el
    if (el.type === "javascript") return el

    return {
      type: el.type,
      content: el
        .content
        .replace(/\n/gm, "№№№")
        .replace(/\s\s/gm, "")
        .replace(/\s\s/gm, "")
        .replace(/№№№/gm, "\n")
    }
  })

  const data = {
    version: "0.0.1",
    contents
  }

  return data
}

export default makeData
