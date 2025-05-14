import { encrypt } from './crypto.js';
document.getElementById('entryForm')
  .addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const cipher = await encrypt(JSON.stringify(data));
    await fetch('https://YOUR_FUNCTION_URL/submit', {
      method: 'POST',
      body: JSON.stringify({ payload: cipher }),
      headers: { 'Content-Type': 'application/json' }
    });
    alert('Submitted!');
  });
