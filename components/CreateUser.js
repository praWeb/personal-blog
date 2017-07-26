import { gql, graphql } from 'react-apollo'

function Submit ({ createUser }) {
  function handleSubmit (e) {
    e.preventDefault()

    let email = e.target.elements.email.value
    let password = e.target.elements.password.value

    createUser(email, password)

    // reset form
    e.target.elements.email.value = ''
    e.target.elements.password.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit</h1>
      <input placeholder='email' name='email' type= "email" />
      <input placeholder='password' name='password' type="password"/>
      <button type='submit'>Submit</button>
    </form>
  )
}

const createUser = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(authProvider: {email: {email: $email, password: $password}}) {
      id
      email
      createdAt
    }
  }
`

export default graphql(createUser, {
  props: ({ mutate }) => ({
    createUser: (email, password) => mutate({
      variables: { email, password },
      updateQueries: {
        allUsers: (previousResult, { mutationResult }) => {
          const newUser = mutationResult.data.createUser
          return Object.assign({}, previousResult, {
            // Append the new user
            allUsers: [newUser, ...previousResult.allUsers]
          })
        }
      }
    })
  })
})(Submit)
