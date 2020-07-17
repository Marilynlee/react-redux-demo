import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userAction from '../../actions/user';
import axios from 'axios';
import UserList  from '../../components/UserList';

const mapStateToProps = (state) => {
	return {
		users:state.user.users,
		usersById:state.user.usersById
	};
};

const mapDispatchToProps = (dispatch) => ({
	actions:bindActionCreators(userAction, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class UserListApp extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		console.log(this.props);
		const {actions} =this.props;
		axios.get('mock/users.json').then(function (res){
			if(res.status === 200){
				actions.setUser(res.data);
			}
		});
	}

    render() {
        return (
            <div>
            	<UserList usersById={this.props.usersById} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListApp);

