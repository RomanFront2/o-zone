const getData = () => {
  return fetch('https://test-5afe4-default-rtdb.firebaseio.com/goods.json')
    .then(response => {
      return response.json()
    })
}

export default getData