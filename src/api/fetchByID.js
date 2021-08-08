import axios from "axios"

export default async function fetchStories(ids = []) {

  // returns an array of promises
  const itemsAsPromises = await ids.map(async id => {
      let response = {}
      await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => response = res)
        .catch(err => console.error(err))

        return response
    })

    // resolves array of promises
    const resolvedPromises = await Promise.all(itemsAsPromises)

  return resolvedPromises

  // slice array to get IDs for only the first 10 stories
  //   return res.data.slice(0, range)
}
