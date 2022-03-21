/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let elem = document.createElement(tag);
        elem.textContent = content;
        document.body.append(elem);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let currentLevel;
    arguments[2] === undefined
        ? (currentLevel = 1)
        : (currentLevel = arguments[2]);
    let elem = document.createElement('div');
    elem.classList.add(`item_${currentLevel}`);
    if (level != 1) {
        for (let i = 0; i < childrenCount; i++) {
            elem.append(
                generateTree(childrenCount, level - 1, currentLevel + 1),
            );
        }
    }
    return elem;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let divNodes = tree.querySelectorAll('.item_2');
    divNodes.forEach((item) => {
        let elem = document.createElement('section');
        elem.classList.add('item_2');
        elem.innerHTML = item.innerHTML;
        item.after(elem);
        item.remove();
    });
    return tree;
}
