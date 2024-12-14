// Countdown Timer Function
function startCountdown() {
    const newYear = new Date("Jan 1, 2025 00:00:00").getTime();
    
    const updateCountdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = newYear - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update Timer Display
        document.getElementById("days").innerText = formatNumber(days);
        document.getElementById("hours").innerText = formatNumber(hours);
        document.getElementById("minutes").innerText = formatNumber(minutes);
        document.getElementById("seconds").innerText = formatNumber(seconds);

        // If countdown is complete
        if (distance < 0) {
            clearInterval(updateCountdown);
            document.getElementById("message").innerText = "🎉 Happy New Year! 🎉";
            document.querySelector('.timer').style.display = 'none';
        }
    }, 1000);
}

// Add leading zeros for single-digit numbers
function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}

// Show preview message
function showMessage() {
    document.getElementById("message").innerText = "🎆 Happy New Year! 🎆";
}

// Start the countdown
startCountdown();