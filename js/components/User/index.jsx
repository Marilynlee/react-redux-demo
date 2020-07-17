import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name } = this.props;

        return (
            <div>
                <h3>{id}</h3>
                <p>{name}</p>
            </div>
        );
    }
}

export default User;