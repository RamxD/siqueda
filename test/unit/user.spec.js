'use strict'

// Importamos test y trait para poder realizar consultas a la api
const { test, trait } = use('Test/Suite')('User Login')
trait('Test/ApiClient')

// Models
const User = use('App/Models/User')

// user template
const test_user = {
  username: 'test_user',
  email: 'test@yopmail.com',
  password: 'password'
}

test('[Login] Request access with bad email', async ({ client }) => {
  // Create test user
  const user = await User.create(test_user)

  // Send request to API with invalid email
  const response = await client.post('/api/v1/auth/login')
    .send({
      email: 'bad_email@example.com',
      password: 'password'
    })
    .end()
  // Check response status
  response.assertStatus(401)
  
  // check response content
  response.assertJSONSubset({ error: 'bad credentials' })

  // delete test user
  await user.delete()
})