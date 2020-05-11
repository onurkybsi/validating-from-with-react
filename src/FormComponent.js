import React, { Component } from "react";
import FormValidator from "./FormValidator";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      birthdate: "",
      email: "",
      conditions: false,
    };
  }

  updateFormValues = (evet) => {
    this.setState({ [evet.target.name]: evet.target.value });
  };

  render() {
    return (
      <FormValidator
        data={this.state}
        submit={this.props.submit}
      >
        <form className="ui form">
          <div className="field">
            <label style={{ float: "left" }}>First Name</label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.updateFormValues}
              placeholder="First Name"
            />
          </div>
          <div className="field">
            <label style={{ float: "left" }}>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.updateFormValues}
              placeholder="Last Name"
            />
          </div>
          <div className="field">
            <label style={{ float: "left" }}>Birth Date</label>
            <input
              type="text"
              name="birthdate"
              value={this.state.birthdate}
              onChange={this.updateFormValues}
              placeholder="Birth Date"
            />
          </div>
          <div className="field">
            <label style={{ float: "left" }}>E-mail</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.updateFormValues}
              placeholder="E-mail"
            />
          </div>
          <div
            className="ui checkbox"
            value={this.state.conditions}
            onChange={this.updateFormValues}
            style={{ float: "left" }}
          >
            <input
              type="checkbox"
              name="conditions"
              tabIndex="0"
              className="hidden"
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </form>
      </FormValidator>
    );
  }
}
