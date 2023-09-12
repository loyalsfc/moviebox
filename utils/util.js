export const fetchData = async(url) => {
    const options = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzliNDQxZTkwNzhlN2I4MjA4OWEyMzZjYTg4OWI1MyIsInN1YiI6IjYzNTk1YjU3NjY1NDA4MDA3ZTBiZmM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YqiVCbGjdqAOj44XByspw4JqthU67XVUqQq87l2bRwk'
        }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    return data
}