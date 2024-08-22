new WOW().init();

        // Popup functions
        function showPopup() {
            document.getElementById('popup').classList.add('show');
        }

        function closePopup() {
            document.getElementById('popup').classList.remove('show');
        }

        // Countdown timer
        function updateCountdown() {
            var countdownDate = new Date("2024-08-23T23:59:59").getTime();
            var now = new Date().getTime();
            var distance = countdownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML =
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById('countdown').innerHTML = "EXPIRED";
            }
        }

        var x = setInterval(updateCountdown, 1000);

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
        
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields");
                event.preventDefault();
            }
        });
