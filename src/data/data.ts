const makeData = () => {

  const contents = [
    {
      "type": "markdown",
      "content": `
# WebApi

## API
Интерфейс прикладного программирования (Application Programming Interfaces, APIs) — это готовые конструкции языка программирования, позволяющие разработчику строить сложную функциональность с меньшими усилиями. Они "скрывают" более сложный код от программиста, обеспечивая простоту использования.

## Web API Определение своими словами
Расширение стандартного API языка JavaScript для решения задач на клиенте

## О Api в цифрах

За основу исследования был взят сайт

* https://developer.mozilla.org/ru/docs/Web/API

## Web API
Представляет набор интерфейсов решающих группу задач

### Web API в цифрах

* Общее число Спецификаций: 138
* Число Спецификаций в разработке: 42 из 138

* Общее число Интейрфейсов: 1008
* Число Интейрфейсов в разработке: 213 из 1008


### Примеры
      `
    },
    {
      "type": "javascript",
      "content": `
      console.html('hel2lo')
      
      
      
      `
    }
  ].map((el) => ({
    type: el.type,
    content: el
      .content
      .replace(/\n/gm, "№№№")
      .replace(/\s\s/gm, "")
      .replace(/\s\s/gm, "")
      .replace(/№№№/gm, "\n")
  }))

  console.log(contents)

  const data = {
    version: "0.0.1",
    contents
  }

  return data
}

export default makeData
