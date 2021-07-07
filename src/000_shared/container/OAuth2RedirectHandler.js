import React, { Component } from 'react';
// import { ACCESS_TOKEN } from '../../constants';
import { Redirect } from 'react-router-dom'

export default class extends Component {

	getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(this.props.location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

	render() {

		const token = this.getUrlParameter('token');
		const status = this.getUrlParameter('status');
		const error = this.getUrlParameter('error');

		console.log(token, status, error, this.props);
		if(token && status) {
			localStorage.setItem('accessToken', token);
			localStorage.setItem('status', status);
			return <Redirect to={{
				pathname: status === "N" ? "/signUp" : "/",
				state: { from: this.props.location }
			}}/>; 
		} else {
			return <Redirect to={{
				pathname: "/login",
				state: { 
					from: this.props.location,
					error: error 
				}
			}}/>; 
		}
	}
}