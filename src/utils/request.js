async function get(uri){
  let data = await fetch(uri).then(resp => resp.json())
  return data
}

export default {
  get
}