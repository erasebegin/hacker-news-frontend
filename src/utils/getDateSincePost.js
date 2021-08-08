export default function getDateSincePost(postDate) {
  const timeSince = Date.now() / 1000 - postDate
  const days = Math.floor(timeSince / (60 * 60 * 24))

  if (days) {

    if (days === 1) {
      return days + " day ago"
    }

    return days + " days ago"
  }

  const hours = Math.floor(timeSince / (60 * 60))

  if (hours) {
      
    if (hours === 1) {
      return hours + " hour ago"
    }

    return hours + " hours ago"
  }

  const minutes = Math.floor(timeSince / 60)

  if (minutes === 1) {
    return minutes + " minute ago"
  }

  return minutes + " minutes ago"
}
