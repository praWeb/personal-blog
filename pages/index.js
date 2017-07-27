import withData from '../lib/withData'

import App from './App'
import CreateUser from '../components/CreateUser'
import Users from './users'

export default withData((props) => (
  <App>
    <CreateUser/>
    <Users/>
  </App>
))
