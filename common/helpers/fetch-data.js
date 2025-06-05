async function fetchAndSetData(url, setData) {
  const response = await fetch("http://localhost:3000/api/" + url);
  const data = await response.json();
  setData(data);
}

export default fetchAndSetData;
