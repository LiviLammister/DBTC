import React    from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navigation = () => {
  return (
    <Menu inverted>
      <Menu.Item as={Link} to='/'        name='Dashboard' />
      <Menu.Item as={Link} to='/tasks'   name='Tasks'     />
    </Menu>
  )
}

export default Navigation
