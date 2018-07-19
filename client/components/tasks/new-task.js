'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Card,
  Grid,
  Header,
  Image,
  Input,
  Modal
} from 'semantic-ui-react'

import { createTask } from '../../store/tasks'

class NewTask extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      imgUrl: ''
    }
  }

  _handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  _handleSubmit = () => {
    this.props.createTask(this.state)
    window.location.reload()
  }

  render() {
    return (
      <Card>
        <Image
          style={{ 'padding': '5px' }}
          src='/img/add.png'
        />
        <Card.Content>
          <Grid verticalAlign='middle'>
            <Grid.Column
              floated='left'
              width='8'
            >
              <Header
                as='h3'
                content="Add Task"
              />
            </Grid.Column>
            <Grid.Column
              width='4'
              floated='right'
            >
              <Modal
                trigger={<Button
                  basic
                  color='green'
                  icon='add'
                />}
              >
                <Modal.Header content='New Task' />
                <Modal.Content>
                  <Grid columns={2}>
                    <Grid.Column>
                      <Input
                        fluid
                        label='Name'
                        name='name'
                        onChange={this._handleChange}
                        value={this.state.name}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Input
                        fluid
                        label='Image URL'
                        name='imgUrl'
                        onChange={this._handleChange}
                        value={this.state.imgUrl}
                      />
                    </Grid.Column>
                  </Grid>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color='green'
                    content='Submit'
                    onClick={this._handleSubmit}
                  />
                  <Button content='Cancel' />
                </Modal.Actions>
              </Modal>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatch = { createTask }

export default connect(null, mapDispatch)(NewTask)