document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("flightForm");
  const confirmation = document.getElementById("confirmation");
  const pages = document.querySelectorAll(".page-section");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const flightClass = document.getElementById("class").value;

    if (from && to && date && phone && flightClass) {
      let classText = "";
      switch (flightClass) {
        case "economy":
          classText = "Економ";
          break;
        case "business":
          classText = "Бізнес";
          break;
        case "first":
          classText = "Перший клас";
          break;
        default:
          classText = "Невідомий клас";
      }

      confirmation.classList.remove("hidden");
      confirmation.innerHTML = `
        <h3>✈️ Бронювання підтверджено!</h3>
        <p>Ваш рейс з <strong>${from}</strong> до <strong>${to}</strong> на <strong>${date}</strong>.</p>
        <p>Ми зателефонуємо вам за номером <strong>${phone}</strong>.</p>
        <p>Клас обслуговування: <strong>${classText}</strong></p>
      `;
      form.reset();
    } else {
      confirmation.classList.remove("hidden");
      confirmation.innerHTML = `<p style="color:red;">Будь ласка, заповніть усі поля!</p>`;
    }
  });

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");

      pages.forEach(section => {
        section.classList.add("hidden");
      });

      const activePage = document.getElementById(page);
      activePage?.classList.remove("hidden");
    });
  });

  const pageButtons = document.querySelectorAll("[data-page]:not(nav a)");

  pageButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const page = btn.getAttribute("data-page");

      pages.forEach(section => {
        section.classList.add("hidden");
      });

      const activePage = document.getElementById(page);
      activePage?.classList.remove("hidden");
    });
  });
});
