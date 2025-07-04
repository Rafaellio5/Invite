function goToPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + num).classList.add('active');
}

function answer(choice) {
  if (choice === 'yes') {
    alert('Я бесконечно счастлив!');
    sendTelegram('Поздравляю 🥳');
  } else {
    alert('😔');
    sendTelegram('Эх...');
  }
}

function sendTelegram(message) {
  const token = '8064298274:AAFGZPM-6JN_jMPUyW2wvxJm-kTcoSJHX0Q';
  const chatId = '42463564';
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ chat_id: chatId, text: message })
  });
}
