import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { emailAdd, history } = this.props;
    const { email } = this.state;
    emailAdd(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const characters = 6;
      const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.setState({
        btnDisable: !(email.length >= characters && emailValidate.test(email)
        && password.length >= characters),
      });
    });
  }

  render() {
    const { email, password, btnDisable } = this.state;
    return (
      <form>
        <div>
          <input
            data-testid="email-input"
            required
            type="email"
            value={ email }
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            name="password"
            placeholder="Senha"
            onChange={ this.handleChange }
            required
          />
          <input
            type="button"
            value="Entrar"
            onClick={ this.onClick }
            disabled={ btnDisable }
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailAdd: (email) => dispatch(addEmail(email)),
});

Login.propTypes = {
  emailAdd: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
