import axios from "axios"

export default async function fetchIDs(range = 5, url = "") {
  const res = await axios.get(url).catch(err => console.error(err))
  // slice array to get number of IDs equal to provided range

  if(!res.data){
    console.log(['could not find IDs'])
    return
  }

  return res.data.slice(0, range)
}
