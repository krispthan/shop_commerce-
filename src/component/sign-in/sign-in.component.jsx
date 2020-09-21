import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: ' ' });
  };
  handleChange = (e) => {
    const { name, value } = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            name="password"
            value={this.state.password}
            required
            label="password"
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
