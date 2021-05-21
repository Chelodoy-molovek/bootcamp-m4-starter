export async function loadList(name) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${encodeURIComponent(name)}&apikey=f0d0ad1a`
    );
    const body = await response.json();
    return body;
  } catch (err) {
    alert('err');
  }
}
