import React, { PureComponent } from 'react';

//declare provider and consumer
const { Provider, Consumer: AuthConsumer } = React.createContext('');

//class AuthProvider provides the state of the app, 
//as well as some functions for manipulating that state to all consumers

class AuthProvider extends PureComponent {
  //initial state
  state = {
    email: '', 
    authorizeError: '', 
    isAuthorized: false,
  }

  //methods 
  authorize = (email, password) => {
    let correctEmail = 'stu@dent.com'
    let correctPassword = '123'
    if (email === correctEmail && password === correctPassword) {
      this.setState({
        email: email,
        isAuthorized: true,
        authorizeError: ''
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }

  logout = () => {
    this.setState({
      isAuthorized: false
    })
  }

  getProviderValue = () => {
    const values = {
      email: this.state.email,
      isAuthorized: this.state.isAuthorized,
      authorizeError: this.state.authorizeError,
      authorize: this.authorize,
      logout: this.logout
    }
    return values
  }


  render() {
    const { children } = this.props;
    return <Provider value = {this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
