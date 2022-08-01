import React from "react";

class BrandForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: this.props.code,
            name: this.props.name,
            description: this.props.description
        };
    }

    handleSumbmit = (event) => {
        event.preventDefault();
        this.props.handleSave(this.state);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.props.handleCancel(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSumbmit}>
                <div>
                    <label htmlFor='name'>Nombre:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={this.handleChange}
                        value={this.state.name}
                    /> <br />
                </div>
                <div>
                    <label htmlFor='description'>Descripcion:</label>
                    <input
                        type='text'
                        id='description'
                        name='description'
                        onChange={this.handleChange}
                        value={this.state.description}
                    /> <br />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button type="button" onClick={this.handleCancel} className="btn btn-primary">
                    Cancel
                </button>
            </form>
        );
    }
}
export default BrandForm;