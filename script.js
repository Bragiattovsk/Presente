document.addEventListener('DOMContentLoaded', () => {
    // Parte do código para a tela de carregamento (loading)
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // ----- INÍCIO DO CÓDIGO DO CONTADOR DE TEMPO -----

    // Define as datas de início
    const datingStartDate = new Date('2021-06-10T00:00:00'); // Data do namoro
    const marriageDate = new Date('2022-06-10T00:00:00');    // Data do casamento

    // Pega os elementos do HTML para o tempo de namoro
    const daysDating = document.getElementById('days-dating');
    const hoursDating = document.getElementById('hours-dating');
    const minutesDating = document.getElementById('minutes-dating');
    const secondsDating = document.getElementById('seconds-dating');

    // Pega os elementos do HTML para o tempo de casamento
    const daysMarriage = document.getElementById('days-marriage');
    const hoursMarriage = document.getElementById('hours-marriage');
    const minutesMarriage = document.getElementById('minutes-marriage');
    const secondsMarriage = document.getElementById('seconds-marriage');

    // Função auxiliar para adicionar um zero à esquerda em números menores que 10
    function pad(num) {
        return String(num).padStart(2, '0');
    }

    // Função principal que atualiza os contadores
    function updateTimers() {
        const now = new Date();

        // Função interna que calcula a diferença de tempo
        function getTimeComponents(startDate) {
            const diff = now - startDate;
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            return {
                days,
                hours: hours % 24,
                minutes: minutes % 60,
                seconds: seconds % 60
            };
        }

        // Calcula o tempo para ambas as datas
        const datingTime = getTimeComponents(datingStartDate);
        const marriageTime = getTimeComponents(marriageDate);

        // Atualiza os valores na tela para o tempo de NAMORO
        if (daysDating) daysDating.textContent = `${datingTime.days}d`;
        if (hoursDating) hoursDating.textContent = `${pad(datingTime.hours)}h`;
        if (minutesDating) minutesDating.textContent = `${pad(datingTime.minutes)}m`;
        if (secondsDating) secondsDating.textContent = `${pad(datingTime.seconds)}s`;

        // Atualiza os valores na tela para o tempo de CASAMENTO
        if (daysMarriage) daysMarriage.textContent = `${marriageTime.days}d`;
        if (hoursMarriage) hoursMarriage.textContent = `${pad(marriageTime.hours)}h`;
        if (minutesMarriage) minutesMarriage.textContent = `${pad(marriageTime.minutes)}m`;
        if (secondsMarriage) secondsMarriage.textContent = `${pad(marriageTime.seconds)}s`;
    }

    // Roda a função de atualização a cada segundo
    setInterval(updateTimers, 1000);

    // Roda a função uma vez imediatamente para não haver atraso
    updateTimers();

    // ----- FIM DO CÓDIGO DO CONTADOR DE TEMPO -----


    // Código para o botão de tocar música
    const playButton = document.getElementById("playMusicBtn");
    const audio = document.getElementById("loveSong");

    if (playButton && audio) {
        playButton.addEventListener("click", function() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    }
});