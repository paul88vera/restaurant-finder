import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("City: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section id="search-container">
        <form
          className="form-container right-inner-addon input-container"
          onSubmit={this.handleSubmit}
        >
          <i className="fa fa-map-marker"></i>
          <input
            type="text"
            className="form-control"
            placeholder="San Antonio"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}

export default Search;
