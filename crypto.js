export async function encrypt(text) {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode('YOUR_SECRET_KEY'),
    { name: 'AES-GCM' }, false, ['encrypt']
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(text);
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data);
  return btoa(String.fromCharCode(...new Uint8Array(iv))) + ':' +
         btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}
