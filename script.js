document.getElementById('habit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const habitInput = document.getElementById('habit-input');
    const habitName = habitInput.value;
    habitInput.value = '';

    const habitList = document.getElementById('habit-list');
    const habitItem = document.createElement('li');
    habitItem.innerHTML = `
        <span>${habitName}</span>
        <div>
            <button class="increment">+</button>
            <span class="count">0</span>
        </div>
    `;

    habitList.appendChild(habitItem);

    const incrementButton = habitItem.querySelector('.increment');
    const countSpan = habitItem.querySelector('.count');

    incrementButton.addEventListener('click', function() {
        countSpan.textContent = parseInt(countSpan.textContent) + 1;
    });
});
