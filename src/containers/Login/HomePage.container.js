import React from 'react';
import SideBarMenuComponent from "./../../../src/components/common/SideBarMenu";
import _ from 'lodash';
// import '../../App.css';
import HomePage from './Home.container';
class HomePageContainer extends React.Component {

	render() {
		let user = JSON.parse(sessionStorage.getItem('user'))
		let childrentContent = !_.isEmpty(this.props.children) ? this.props.children : '';
		if (user === null) {
			return (
				<HomePage />
			)
		}
		else {
			return (
				<div>
					<SideBarMenuComponent
						children={childrentContent}
					/>
				</div>
			)
		}

	}
}

export default HomePageContainer;
