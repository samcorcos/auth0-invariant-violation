import Auth0Lock from 'auth0-lock'

const AUTH0_KEY_ADMIN = ''
const AUTH0_DOMAIN = ''

const options = {
  auth: {
    redirect: false,
    sso: false,
  },
  rememberLastLogin: false,
}

const lock = new Auth0Lock(AUTH0_KEY_ADMIN, AUTH0_DOMAIN, options)

lock.on('authenticated', (token) => {
  lock.getUserInfo(token.accessToken, (error, profile) => {
    if (error) return console.log(error)

    console.log(token)

    localStorage.setItem('cd_token', token.idToken)

    return null
  })
})

export default () => lock.show()
