document.addEventListener("DOMContentLoaded", () => {
    const opcoes = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const mostrador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("surgir");
                observador.unobserve(entrada.target);
            }
        });
    }, opcoes);

    const elementos = document.querySelectorAll('.escondido');
    elementos.forEach(el => mostrador.observe(el));
});