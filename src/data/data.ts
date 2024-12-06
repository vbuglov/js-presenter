const makeData = () => {

  const contents = [
    {
      "type": "markdown",
      "content": `
# Чекинатор

* http://89.223.31.122/

      `
    },
    {
      "type": "javascript",
      "content": `
const br =   document.createElement("br");    
      
const img = document.createElement("img");
img.style.width = "300px"
img.src = "/qr_checkinator.png"
img.style.paddingBottom = "50px"

console.render(img)
      `
    },
    {
      "type": "javascript",
      "content": `
const img2 = document.createElement("img");
img2.style.width = "600px"
img2.src = "/password_example.png"

console.render(img2)
      `
    },
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

### Точки входа

* Браузерные объекты
* window
* document
* navigator

Объект navigator является частью Web API в браузерной среде и предоставляет информацию о браузере пользователя, 
операционной системе, языке и другие данные, связанные с пользовательским агентом. Этот объект часто используется в веб-приложениях для 
адаптации функционала в зависимости от характеристик устройства пользователя.

В стандартном Node.js объект navigator отсутствует. Node.js — это серверная среда выполнения JavaScript, которая не
 имеет доступа к браузерным API. Поскольку Node.js работает на сервере, он не может напрямую взаимодействовать с объектами, доступными в
  браузере, такими как window, document или navigator.
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
    {
      "type": "javascript",
      "content": `

const element = document.createElement('div');
element.style.position = 'relative';
element.style.width = '500px';
element.style.height = '300px';
element.style.border = '1px solid black';

const outerSquare = document.createElement('div');
outerSquare.style.width = '100px';
outerSquare.style.height = '100px';
outerSquare.style.backgroundColor = 'green';
outerSquare.style.position = 'absolute';
outerSquare.style.left = '0px';
outerSquare.style.top = '80px';


element.appendChild(outerSquare)

// Добавляем внешний квадрат на страницу
console.render(element);

// Создаем внутренний квадрат
const innerSquare = document.createElement('div');
innerSquare.style.width = '60px';
innerSquare.style.height = '60px';
innerSquare.style.backgroundColor = 'orange';
innerSquare.style.position = 'absolute';
innerSquare.style.left = '0px';
innerSquare.style.top = '35px'; // Позиционируем внутри внешнего квадрата
innerSquare.style.opacity = "0.8"

// Добавляем внутренний квадрат во внешний
outerSquare.appendChild(innerSquare);

// Начальные позиции квадратов
let outerPosition = 0;
let innerPosition = 0;

// Функция анимации
function animate() {
    outerPosition += 0.1; // Скорость внешнего квадрата
    innerPosition += 0.3; // Скорость внутреннего квадрата

    outerSquare.style.left = outerPosition + 'px';
    innerSquare.style.left = innerPosition + 'px';

    if (innerPosition < 750) {
        requestAnimationFrame(animate);
    }
}

// Настраиваем IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // Меняем цвет квадратов на фиолетовый
          outerSquare.style.backgroundColor = 'black';
          innerSquare.style.backgroundColor = 'white';
        } else if (entry.intersectionRatio < 1) {
            // Меняем цвет квадратов на фиолетовый
            outerSquare.style.backgroundColor = 'purple';
            innerSquare.style.backgroundColor = 'purple';
        }
    });
}, {
    root: outerSquare, // Отслеживаем относительно внешнего квадрата
    threshold: [0, 1] // Отслеживаем изменение пересечения
});

// Начинаем наблюдение за внутренним квадратом
observer.observe(innerSquare);

// Запускаем анимацию
animate();
      
      `
    },
    { "type": "newline", content: "" },
    {
      "type": "markdown",
      "content": `
# WebNN / Web AI

![](/webnn_schema.jpg)

* Запуск искуственного интеллекта на стороне клиента на процессоре, видеокарте или NPU устройстве / WebAssembly / WebGPU с использованием JavaScript

* Нейро́нный проце́ссор (англ. Neural Processing Unit, NPU или ИИ-ускоритель англ. AI accelerator) — это специализированный класс микропроцессоров и сопроцессоров (часто являющихся специализированной интегральной схемой), используемый для аппаратного ускорения работы
 алгоритмов искусственных нейронных сетей, компьютерного зрения, распознавания по голосу, машинного обучения и других методов искусственного интеллекта[1].
* Устройство NPU отвечает за обработку данных, полученных от основной консоли и других подключенных устройств (консолей или крыльев) 
и эффективно распределяет нагрузку, обеспечивает плавную и быструю работу всей сетевой системы благодаря собственным 
вычислительным мощностями

## WebNN
https://www.w3.org/TR/webnn/


Web Neural Network API (WebNN) — это низкоуровневый API, разработанный для ускорения вывода нейронных сетей в веб-приложениях
 за счет использования аппаратных возможностей устройств, таких как GPU, CPU и специализированные AI-ускорители. Он предоставляет 
 абстракцию, независимую от конкретных платформ, что позволяет веб-разработчикам эффективно интегрировать машинное обучение в
  свои приложения без привязки к специфическим возможностям операционных систем.

### Текущее состояние технологии:
* Кандидат в рекомендации W3C: По состоянию на 4 декабря 2024 года WebNN API находится на стадии Candidate Recommendation Draft, что свидетельствует о его зрелости и готовности к внедрению.
* Поддержка браузеров: Ведутся работы по интеграции WebNN API в основные браузеры. Например, в Microsoft Edge реализована поддержка через DirectML, что позволяет использовать аппаратное ускорение на устройствах с Windows.
* Реальные применения: WebNN API уже используется в различных демонстрационных приложениях, включая классификацию изображений, сегментацию и генерацию изображений, что подтверждает его практическую применимость.
* https://github.com/webmachinelearning/awesome-webnn?utm_source=chatgpt.com

Активно используемые библиотеки исскуственного интелекта в бразауре:
 
* Keras.js
* ml5.js
* TensorFlow.js

      `
    },
    {
      "type": "javascript",
      "content": `
// По завершении загрузки страницы запускаем классификацию
window.addEventListener('load', () => {
    // Инициализируем классификатор с предобученной моделью "MobileNet"
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

    function modelLoaded() {
        console.log('Модель успешно загружена!');
        classifyImage();
    }

    function classifyImage() {
        const image = document.getElementById('inputImage');
        classifier.classify(image, gotResult);
    }

    function gotResult(results) {
        // results — это массив объектов с вероятностями и метками
        let answ = \`\`

        results.forEach((result) => {
            const label = result.label;
            const confidence = (result.confidence * 100).toFixed(2);
            answ = answ + \`<div>\${label}, \${confidence}</div> </br>\`;
        })

        console.log(results);
        document.getElementById('result').innerHTML = answ
    }
});
      `
    },
    { "type": "newline", "content": `` },
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

![123](/caniuse.png)
      `
    },
    {
      type: "newline",
      content: ""
    },
    {
      "type": "markdown",
      "content": `
![123](/developer_mozilla.png)
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
### File System API

![123](/filesystemapi.png)

#### Получение файлов и папок из папки
      `
    },
    {
      "type": "javascript",
      "content": `

async function selectFolder() {
    try {
        // Открыть диалог выбора папки
        const directoryHandle = await window.showDirectoryPicker();

        // Перебрать содержимое папки
        for await (const [name, handle] of directoryHandle.entries()) {
            if (handle.kind === 'file') {
                console.html(\`File: \${name}\`);
            } else if (handle.kind === 'directory') {
                console.html(\`Directory: \${name}\`);
            }
        }
    } catch (err) {
        console.error('Error accessing folder:', err);
    }
}

selectFolder()
      
      `
    },
    {
      "type": "javascript",
      "content": `
 async function saveFile() {
  const options = {
    types: [
      {
        description: 'Текстовые файлы',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  };

  // Открываем диалоговое окно для сохранения файла
  const handle = await window.showSaveFilePicker(options);
  const writable = await handle.createWritable();

  // Записываем данные в файл
  await writable.write('Содержимое вашего файла');

  // Закрываем и сохраняем файл
  await writable.close();
}

saveFile()
      `
    },
    {
      "type": "javascript",
      "content": `
 async function runcpp() {
  // Open file picker
  const [fileHandle] = await window.showOpenFilePicker();
  // Get file from handle
  const file = await fileHandle.getFile();
  // Read file contents
  const text = await file.text();

  // Get the exported function
  const getStringLength = console.getStringLength;

  // Call the function and get the result
  const length = getStringLength(text);

  // Display the result
  console.html(\`The length of the file content is \${length} characters.\`)
} 

runcpp()
      `
    },
    {
      "type": "markdown",
      "content": `
# Остальные Web API

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
    { "type": "newline", content: "" },
    { "type": "newline", content: "" },
    { "type": "newline", content: "" },
    {
      "type": "markdown",
      "content": `
# Спасибо за внимание

* Голосовалка
* https://polls.tbank.ru/s/cm4bamjse01pl36z4gf5te2yp

* Телеграм
* https://t.me/vbuglov
      `
    },
    { "type": "newline", content: "" },
    {
      "type": "javascript",
      "content": `
const img = document.createElement("img");
img.style.width = "700px"
img.src = "/qr_poll.jpg"

console.render(img)
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
