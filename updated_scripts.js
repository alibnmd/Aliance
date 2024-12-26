
// JavaScript pour les animations des chiffres dans "Aliance en chiffres"
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-item h2");
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
});
