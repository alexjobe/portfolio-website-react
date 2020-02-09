import React from 'react';
import TutorialImg from '../assets/img/tutorial.jpg';

const gameStates = {
	GAME_STATE_START: "GAME_STATE_START",
	GAME_STATE_PLAY: "GAME_STATE_PLAY",
	GAME_STATE_WIN: "GAME_STATE_WIN",
	GAME_STATE_LOSE: "GAME_STATE_LOSE"
}

class MessageDisplay extends React.Component {

	_isMounted = false;

	state = {
		showTutorial: false
	}

	componentDidMount = () => {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	toggleTutorial = () => {
		if (this._isMounted) {
			this.setState(st => {
				return { showTutorial: !this.state.showTutorial };
			});
		}
	}

	renderMessage = () => {
		let message = '';
		switch (this.props.gameState) 
		{
			case gameStates.GAME_STATE_PLAY:
				message = <span>Find the mines!</span>;
				break;
			case gameStates.GAME_STATE_START:
				message = <span>Click a tile to begin</span>;
				break;
			case gameStates.GAME_STATE_WIN:
				message = <span>You win! Click  <i className="far fa-smile"></i>  to play again</span>;
				break;
			case gameStates.GAME_STATE_LOSE:
				message = <span>You lose! Click  <i className="far fa-smile"></i>  to play again</span>;
				break;
			default:
					// Do nothing
		}
		return <div className='message'>{message} <i className="toggle fas fa-question-circle" 
			onClick={this.toggleTutorial}></i></div>;
	}

	renderMessageDisplay = () => {
		let messageClass =  'message-display';
		if(this.state.showTutorial) { messageClass += ' tutorial'}
		return (
			<div className={messageClass}>
				{	
					this.state.showTutorial ? this.renderTutorial()
					:
					this.renderMessage()
				}
			</div>
		)
	}	

	renderTutorial = () => {
		return (
			<div className="tutorial">
				<h3>How to Play</h3>
				<img src={TutorialImg} alt="Tutorial" />
				<p>
					Your objective is to clear the board of hidden mines ( <i className="fas fa-radiation"></i> ). The 
					number on a tile tells you how many mines are adjacent to it. Click a tile to reveal its contents — if 
					it contains a mine, you lose. The first tile you click will never contain a mine. Mark tiles that you 
					know contain mines by enabling Flag Mode ( <i className="fas fa-flag"></i> ) and clicking them. Once all 
					empty tiles are revealed, you win!
				</p>
				<i className="toggle fas fa-arrow-circle-left" onClick={this.toggleTutorial}></i>
			</div>
		);
	}

	render = () => {
		return this.renderMessageDisplay();
	}
}

export default MessageDisplay;