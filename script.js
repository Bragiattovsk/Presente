document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.getElementById('loading-overlay');

    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1000);

    const datingStartDate = new Date('2020-06-10T00:00:00'); // Data do namoro
    const marriageDate = new Date('2021-06-10T00:00:00');    // Data do casamento

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

        const datingTime = getTimeComponents(datingStartDate);
        const marriageTime = getTimeComponents(marriageDate);

        daysDating.textContent = `${datingTime.days}d`;
        hoursDating.textContent = `${datingTime.hours}h`;
        minutesDating.textContent = `${datingTime.minutes}m`;
        secondsDating.textContent = `${datingTime.seconds}s`;

        daysMarriage.textContent = `${marriageTime.days}d`;
        hoursMarriage.textContent = `${marriageTime.hours}h`;
        minutesMarriage.textContent = `${marriageTime.minutes}m`;
        secondsMarriage.textContent = `${marriageTime.seconds}s`;
    }

    setInterval(updateTimers, 1000);
    updateTimers(); // Atualiza imediatamente ao carregar

    document.getElementById("playMusicBtn").addEventListener("click", function () {
        const audio = document.getElementById("loveSong");
        audio.play();
    });
});
