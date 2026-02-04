    // Create floating hearts
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        // Create hearts periodically
        setInterval(createHeart, 800);

        // Initialize some hearts
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 300);
        }

        // Move the "No" button when user tries to click it
        function moveButton() {
            const button = document.getElementById('noBtn');
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            
            // Better bounds checking for mobile
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;
            const maxX = Math.max(50, containerRect.width - buttonWidth - 40);
            const maxY = Math.max(50, containerRect.height - buttonHeight - 40);
            
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            button.style.position = 'absolute';
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
            
            // Make the Yes button bigger each time
            const yesBtn = document.querySelector('.yes-btn');
            const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
            yesBtn.style.fontSize = (currentSize + 2) + 'px';
        }

        // Handle "Yes" click
        function sayYes() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('celebration').style.display = 'block';
            
            // Create confetti
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    createConfetti();
                }, i * 30);
            }
        }

        // Create confetti pieces
        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = ['#ff1493', '#ff69b4', '#ffc0cb', '#ff6b9d', '#c06c84'][Math.floor(Math.random() * 5)];
            confetti.style.animationDelay = Math.random() + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }