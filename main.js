document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    const sections = document.querySelectorAll('section');

    // Remove a tela de carregamento após um pequeno atraso
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500); // Tempo da transição do CSS
    }, 1000); // Exibe o spinner por 1 segundo

    // Datas de referência
    const datingStartDate = new Date('2021-06-10T00:00:00');
    const marriageDate = new Date('2022-06-10T00:00:00');

    // Elementos dos timers
    const daysDating = document.getElementById('days-dating');
    const hoursDating = document.getElementById('hours-dating');
    const minutesDating = document.getElementById('minutes-dating');
    const secondsDating = document.getElementById('seconds-dating');

    const daysMarriage = document.getElementById('days-marriage');
    const hoursMarriage = document.getElementById('hours-marriage');
    const minutesMarriage = document.getElementById('minutes-marriage');
    const secondsMarriage = document.getElementById('seconds-marriage');

    function updateTimers() {
        const now = new Date();

        // Timer de Namoro
        const diffDating = now.getTime() - datingStartDate.getTime();
        const secondsSinceDating = Math.floor(diffDating / 1000);
        const minutesSinceDating = Math.floor(secondsSinceDating / 60);
        const hoursSinceDating = Math.floor(minutesSinceDating / 60);
        const daysSinceDating = Math.floor(hoursSinceDating / 24);

        daysDating.textContent = daysSinceDating;
        hoursDating.textContent = hoursSinceDating % 24;
        minutesDating.textContent = minutesSinceDating % 60;
        secondsDating.textContent = secondsSinceDating % 60;

        // Timer de Casamento
        const diffMarriage = now.getTime() - marriageDate.getTime();
        const secondsSinceMarriage = Math.floor(diffMarriage / 1000);
        const minutesSinceMarriage = Math.floor(secondsSinceMarriage / 60);
        const hoursSinceMarriage = Math.floor(minutesSinceMarriage / 60);
        const daysSinceMarriage = Math.floor(hoursSinceMarriage / 24);

        daysMarriage.textContent = daysSinceMarriage;
        hoursMarriage.textContent = hoursSinceMarriage % 24;
        minutesMarriage.textContent = minutesSinceMarriage % 60;
        secondsMarriage.textContent = secondsSinceMarriage % 60;
    }

    // Atualiza os timers a cada segundo
    setInterval(updateTimers, 1000);
    // Chama a função uma vez para exibir os valores imediatamente ao carregar
    updateTimers();

    // Animação de entrada das seções
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Começa a animar quando 10% da seção está visível

    sections.forEach((section, index) => {
        section.dataset.delay = index * 0.2; // Atraso sequencial para as seções
        observer.observe(section);
    });

    // Efeito de partículas de fundo (opcional, para dar mais vida)
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 5 + 2; // Partículas de 2 a 7px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.position = 'fixed';
        particle.style.zIndex = '-1';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.opacity = '0';
        particle.style.pointerEvents = 'none';

        const animationDuration = Math.random() * 10 + 5; // 5 a 15 segundos
        const delay = Math.random() * 5; // 0 a 5 segundos de atraso
        const startOpacity = Math.random() * 0.6 + 0.2; // Opacidade inicial
        const endOpacity = 0; // Opacidade final

        particle.animate([
            { opacity: startOpacity, transform: 'translateY(0) scale(1)' },
            { opacity: endOpacity, transform: `translateY(${Math.random() * 200 - 100}px) scale(0.5)` }
        ], {
            duration: animationDuration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });

        // Remove a partícula quando a animação termina (se não for infinita)
        // particle.addEventListener('animationend', () => {
        //     particle.remove();
        // });
    }

    // Cria algumas partículas
    // for (let i = 0; i < 30; i++) {
    //     createParticle();
    // }
});