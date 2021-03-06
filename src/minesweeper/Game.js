import React, { Component } from 'react';
import Board from './Board';
import MessageDisplay from './MessageDisplay';
import '../assets/css/Game.css'

const gameStates = {
	GAME_STATE_START: "GAME_STATE_START",
	GAME_STATE_PLAY: "GAME_STATE_PLAY",
	GAME_STATE_WIN: "GAME_STATE_WIN",
	GAME_STATE_LOSE: "GAME_STATE_LOSE"
}

class Game extends Component {
	
	_isMounted = false;

	state = {
		flagMode: false,
		gameState: gameStates.GAME_STATE_START,
		numSeconds: 0
	}

	componentDidMount = () => {
		this._isMounted = true;
		setInterval(this.incrementSeconds, 1000);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	toggleFlagMode = () => {
		if(this._isMounted){
			this.setState(st => {
				return { flagMode: !this.state.flagMode };
			});
		}
	}

	setGameState = (gameState) => {
		if (this._isMounted) {
			if (gameState === gameStates.GAME_STATE_START) {
				this.setState(st => {
					return { numSeconds: 0 };
				});
			}

			this.setState(st => {
				return { gameState: gameState };
			});
		}
	}

	incrementSeconds = () => {
		if (this.state.gameState === gameStates.GAME_STATE_PLAY) {
			let numSeconds = this.state.numSeconds;
			numSeconds++;

			if (this._isMounted) {
				this.setState(st => {
					return { numSeconds: numSeconds };
				});
			}
		}
	}

	render = () => {
		return (
			<div className="game">
				<Board 
					gameState = {this.state.gameState} 
					flagMode = {this.state.flagMode}
					toggleFlagMode = {this.toggleFlagMode}
					setGameState = {this.setGameState}
					numSeconds = {this.state.numSeconds}
				/>
				<MessageDisplay gameState = {this.state.gameState}/>
			</div>
		)
	}
}

export default Game;