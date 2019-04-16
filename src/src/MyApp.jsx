import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './MyApp.css';

class MyApp extends Component{
	onChange(e){
		e.preventDefault();
	}

	render(){
		const {app} = this.props;
		return(
			<div class="col s12 m6 l6 xl4">
			<div class="card">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator" src={this.props.app.icon}/>
				</div>
				<div class="card-content">
					<span class="card-title activator grey-text text-darken-4">{this.props.app.name}<i class="material-icons right">more_vert</i></span>
				</div>
				<div class="card-reveal">
					<span class="card-title grey-text text-darken-4">{this.props.app.name}<i class="material-icons right">close</i></span>
					{this.props.app.tags.map(tag => {
						return(<p>{tag}</p>)
					})}
				</div>
			</div>
			<p><a class="appitem" href="http://google.com" target="_blank">{this.props.app.name}</a></p>
			</div>
		)
	}
}

export default MyApp