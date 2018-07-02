import React    from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item as={Link} to='/'        name='Dashboard' />
      <Menu.Item as={Link} to='/tasks'   name='Tasks'     />
      <Menu.Item as={Link} to='calendar' name='Calendar'  />
      <Menu.Item as={Link} to='/stats'   name='Stats'     />
    </Menu>
  )
}

export default Navigation
