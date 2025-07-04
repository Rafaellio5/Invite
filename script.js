function goToPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + num).classList.add('active');
}

function answer(choice) {
  const msgBox = document.getElementById('thanksMessage');
  msgBox.style.opacity = 0;
  msgBox.style.display = 'block';

  if (choice === 'yes') {
    msgBox.textContent = 'Спасибо, я счастлив 😊';
    sendTelegram('Поздравляю 🥳');
  } else {
    msgBox.textContent = 'Печаль... но уважаю твой выбор 😔';
    sendTelegram('Эх...');
  }

  // Плавное появление текста
  setTimeout(() => {
    msgBox.style.opacity = 1;
  }, 50);
}

function sendTelegram(message) {
  const token = 'ТОКЕН_БОТА';   // 🔁 Замени на свой токен
  const chatId = 'ТВОЙ_CHAT_ID'; // 🔁 Замени на свой chat_id

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ chat_id: chatId, text: message })
  });
}
