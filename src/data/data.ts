const makeData = () => {

  const contents = [
    {
      "type": "markdown",
      "content": `
# Jupyter lab + Deno

* Установка anaconda: https://www.anaconda.com/download/success
* установка Deno
* deno jupyter --unstable
* conda install -c conda-forge jupyterlab

      `
    },
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
localStorage.removeItem('catName');
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
* Повышение скорости работы программ благодаря использованию видеоускорителей
* Сокращение числа проблем, вызываемыхграфическими драйверами
* появление новых возможностей веб-приложений

#### Для включения
* посетить chrome://flags/
* Unsafe WebGPU Support

#### Доступность

- [x] Google Chrome
- [ ] Edge
- [ ] Mozilla
- [ ] Safari
      `
    },
    {
      "type": "javascript",
      "content": `
async function init() {
  if (!navigator.gpu) {
    console.html('WebGPU not supported.')
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    console.html('Couldnt request WebGPU adapter.')
  } else {
     const device = await adapter.requestDevice();
  }

}

init()
      

      `
    },
    {
      "type": "markdown",
      "content": `
### Battery Status API
API состояния батареи (Battery Status API), чаще называемое Battery API.


* предоставляет информацию об уровне заряда батареи системы 
* позволяет получать уведомления о событиях, которые отправляются при изменении уровня заряда или состояния зарядки. 

Это может быть полезно для настройки использования ресурсов вашего приложения с целью снижения 
расхода батареи при низком уровне заряда или для сохранения данных перед разрядкой батареи, чтобы предотвратить их потерю.
      `
    },
    {
      "type": "javascript",
      "content": `
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.html(\`Battery charging? \${battery.charging ? "Yes" : "No"}\`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.html(\`Battery level: \${battery.level * 100}%\`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.html(\`Battery charging time: \${battery.chargingTime} seconds\`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.html(\`Battery discharging time: \${battery.dischargingTime} seconds\`);
  }
});

      `
    },
    {
      "type": "markdown",
      "content": `
# Web Workers API
      `
    },
    { "type": "newline", "content": `` },
    { "type": "newline", "content": `` },
    { "type": "newline", "content": `` },
    {
      "type": "markdown",
      "content": `
# IndexDB
      `
    },
    {
      "type": "markdown",
      "content": `
### Создание базы данных и таблицы

      `
    },
    {
      "type": "javascript",
      "content": `
const STORE_NAME = 'store'

function openDatabase() {
    let openRequest = indexedDB.open(STORE_NAME, 1);

    openRequest.onupgradeneeded = function() {
      console.html('onupgradeneeded');
    };
    
    openRequest.onerror = function() {
      console.html('Error', openRequest.error);
    };
    
    openRequest.onsuccess = function() {
      console.html('onsuccess');
    };
}

openDatabase()
      
      `
    },
    {
      "type": "markdown",
      "content": `
### Инициализация таблицы и добавление данных

      `
    },
    {
      "type": "javascript",
      "content": `

const STORE_NAME = 'store'
const DB_NAME = 'page'

function openDatabase() {
    let openRequest = indexedDB.open(STORE_NAME, 9);

    console.html('start');

    openRequest.onupgradeneeded = function() {
      console.html('onupgradeneeded');
      
      let db = openRequest.result;

      if (!db.objectStoreNames.contains(DB_NAME)) { // если хранилище 'books' не существует
        db.createObjectStore(DB_NAME, {keyPath: 'id'}); // создаём хранилище
        console.html('createObjectStore');
      }

      console.html('store created');
    };
    
    openRequest.onsuccess = function() {
      console.html('onsuccess');

      let db = openRequest.result;
      let transaction = db.transaction(DB_NAME, "readwrite");
      console.html('transaction');

      // получить хранилище объектов для работы с ним
      let books = transaction.objectStore(DB_NAME); // (2)

      let id = Math.round(Math.random() * 10000)
      
      let book = {
        id: 20,
        price: 10,
        createdAt: new Date()
      };
      
      let request = books.add(book); // (3)

      let data = books.getAll()
      console.html(data)

      request.onsuccess = function() { // (4)
        console.html("Книга добавлена в хранилище");
      };
      
      request.onerror = function() {
        console.html("Ошибка");
      };

      console.html('successed');
    };
}

openDatabase()
      `
    },
    {
      "type": "markdown",
      "content": `
### Получение данных

      `
    },
    {
      "type": "javascript",
      "content": `
const STORE_NAME = 'store'
const DB_NAME = 'page'

function openDatabase() {
    let openRequest = indexedDB.open(STORE_NAME, 9);
    
    openRequest.onsuccess = function() {
      console.html('onsuccess');

      let db = openRequest.result;
      let transaction = db.transaction(DB_NAME, 'readwrite');

      let books = transaction.objectStore(DB_NAME); // (2)

      let data = books.getAll()

      data.onsuccess = () => {
        console.html(data.result)
      }

      console.html('successed');
    };
}

openDatabase()

      `
    },
    {
      "type": "markdown",
      "content": `
# Остальные Web API

### File System API
### File API
### File and Directory Entries API
### History API
### Web Share API
Web Share API позволяет вам обмениваться текстом, ссылками и даже файлами с веб-страницы с другими приложениями,
установленными на устройстве.
### Clipboard API
Clipboard API позволяет вам считывать и записывать данные в буфер обмена. 
Это полезно для реализации функции копирования в буфер обмена.
### Screen Wake Lock API
Блокировка пробуждения экрана
### Fullscreen API
Позволяет отображать элемент или всю страницу в полноэкранном режиме.

      `
    },
  ].map((el) => {
    if (!el.content) return el
    if (el.type === "javascript") return {
      type: el.type,
      content: el.content.replace(/"/gm, "'")
    }

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
