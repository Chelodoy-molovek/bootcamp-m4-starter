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


export async function creatNewList(arr, title) {
  const info = {
    title: title,
    movies: arr
  }
  const response = await fetch("https://acb-api.algoritmika.org/api/movies/list", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(info)
  })
  const data = await response.json();
  return data;
}
export function renderingList(id) {
  let arr = id.map((item) => fetch(`http://www.omdbapi.com/?apikey=f0d0ad1a=${item}`).then(response => response.json()));
  return Promise.all(arr)
}