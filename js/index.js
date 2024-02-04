const hamb = document.querySelector("#hamb");/*В начале мы поочередно считываем наши элементы, обращаясь к id каждого из них.*/
const popup = document.querySelector("#popup");


//если кнопка нажата дать ей статус(opened - открыта, None - )
hamb.addEventListener("click", function(){
    this.classList.toggle('opened');
})

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    renderPopup();
}

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);
// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}