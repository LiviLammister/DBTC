import React, { Component } from 'react'
import {
  Button,
  Card,
  Grid,
  Header,
  Image,
  Modal
} from 'semantic-ui-react'

class NewTask extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <Card>
        <Image style={{ 'padding': '5px' }} src='/img/add.png' />
        <Card.Content>
          <Grid verticalAlign='middle'>
            <Grid.Column width='8' floated='left'>
              <Header as='h3'>Add Task</Header>
            </Grid.Column>
            <Grid.Column width='4' floated='right'>
              <Modal trigger={<Button basic color='green' icon='add' />} >
                Hello
              </Modal>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

export default NewTask