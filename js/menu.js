(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-menu-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-menu на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
    // Знаходимо всі посилання всередині мобільного меню
    menuLinks: document.querySelectorAll(".mob-menu a"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Додаємо слухач події кліку на кожне посилання в меню
  refs.menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Закриваємо меню, якщо воно відкрите
      if (refs.modal.classList.contains("is-open")) {
        toggleModal();
      }
    });
  });

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();
// Що змінилося:
// Селектор document.querySelectorAll(".mob-menu a") знаходить всі посилання (і навігаційні, і телефон/email, і іконки соцмереж) всередині блоку .mob-menu.

// За допомогою forEach на кожне посилання повішено перевірку: якщо меню відкрите (is-open), викликається функція toggleModal(), яка знімає цей клас та закриває меню.
