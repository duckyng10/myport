import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp.jsx';

class MyAppList extends Component{
	render(){
		return(
			<div className="row">
				{
					this.props.myapps.map(app => {
						return <MyApp app={app} key={app.id} {...this.props} />
					})
				}
			</div>
		)
	}
}

export default MyAppList