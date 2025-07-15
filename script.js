document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const from = this.from.value;
    const to = this.to.value;
    const date = this.date.value;
    const passengers = this.passengers.value;
    document.getElementById("result").innerHTML =
        `<p>Пошук рейсів з <strong>${from}</strong> до <strong>${to}</strong> на <strong>${date}</strong> для <strong>${passengers}</strong> пасажирів...</p>`;
});
