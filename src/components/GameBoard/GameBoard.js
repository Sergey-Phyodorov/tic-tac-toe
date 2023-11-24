import './game-board.css';

import React, { useState, useEffect } from 'react';

import { GameCell } from '../GameCell/GameCell';
import { GameStatus } from '../GameStatus/GameStatus';
import { Button } from '../../ui/Button/Button';

import { store } from '../../redux/store';

export const GameBoard = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const handleCellClick = (index) => {
		const currentState = store.getState();

		if (currentState.winner || currentState.board[index]) {
			return;
		}

		store.dispatch({ type: 'MAKE_MOVE', index });
	};

	const handleResetGame = () => {
		store.dispatch({ type: 'RESET_GAME' });
	};

	return (
		<>
			<GameStatus
				winner={state.winner}
				currentPlayer={state.currentPlayer}
			/>
			<div className={'game-board-cell'}>
				{state.board.map((cell, index) => (
					<GameCell
						key={index}
						value={cell}
						onClick={() => handleCellClick(index)}
						highlight={state.winningLine.includes(index)}
					/>
				))}
			</div>
			<Button onClick={handleResetGame}>Начать игру</Button>
		</>
	);
};
