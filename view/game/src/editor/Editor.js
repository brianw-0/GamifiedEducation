import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userCode: ""
		};
	}

	setUserCode = (event) => {
		this.setState({userCode: event.target.value});

	}

	runCode = (event) => {
		event.preventDefault();
		let args = this.props.args;
		let code = this.state.userCode;
		
		let fun = new Function(args, code);

		console.log(fun(1,2));
	}

	testCode() {

	}


	render() {
		return(
			<div className="editor-container">
				{/*<textarea className="code" ref={this.setUserCode}></textarea>
				<button onClick={this.runCode}>Run</button>*/}

				<form onSubmit={this.runCode}>
					<textarea className="code" value={this.state.userCode} onChange={this.setUserCode} />
					<a className="p-3 game-link" href="#">  <i class="fas fa-sync"></i> </a>
					<input className="btn-main" type="submit" value="Run" />
				</form>
			</div>
		);
	}
}

export default Editor;