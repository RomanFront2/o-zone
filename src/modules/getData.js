const getData = (str) => {
  return fetch(
    `https://test-5afe4-default-rtdb.firebaseio.com/goods.json`)
    // `https://test-5afe4-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then(response => {
      return response.json()
    })
}

export default getData