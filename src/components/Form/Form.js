import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      interest: '',
      message: '',
    }

    this.changeHandle = this.changeHandle.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  changeHandle(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  submitHandle(event) {
    event.preventDefault()

    this.props.sendContacts(this.state)

    this.setState({
      name: '',
      email: '',
      interest: '',
      message: '',
    })
  }
  render() {
    return (
      <form className='form-container' onSubmit={this.submitHandle}>
        <h2>Get in touch.</h2>
        <div className='fields-container'>
          <p>
            My name is{' '}
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.changeHandle}
              placeholder={
                this.props.client.errors ? this.props.client.errors.name : null
              }
            />
            and my email is{' '}
            <input
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.changeHandle}
              placeholder={
                this.props.client.errors ? this.props.client.errors.email : null
              }
            />
            .
          </p>
          <p>
            I'm interested in{' '}
            <input
              name='interest'
              type='text'
              value={this.state.interest}
              onChange={this.changeHandle}
              placeholder={
                this.props.client.errors
                  ? this.props.client.errors.interest
                  : null
              }
            />
            .
          </p>
          <p>
            My message is{' '}
            <input
              name='message'
              type='text'
              value={this.state.message}
              onChange={this.changeHandle}
            />
            .
          </p>
        </div>
        <button type='submit' disabled={this.props.client.loading}>
          Send
        </button>
      </form>
    )
  }
}

export default Form
