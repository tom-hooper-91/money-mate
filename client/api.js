import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}
// ***   ***   ***

export async function getUser () {
  const result = await request.get('https://randomuser.me/api/')
  // console.log(result.body)
  return result.body
}
