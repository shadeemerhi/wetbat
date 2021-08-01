import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

export const QuoteContext = React.createContext();

// Action creators
export const setQuotes = quotes => ({
	type: 'SET_QUOTES',
	quotes
});

export const selectQuote = quote => ({
	type: 'SET_SELECTED',
	quote
});

export const addQuote = quote => ({
	type: 'ADD_QUOTE',
	quote
});

export const deleteQuote = index => ({
	type: 'DELETE_QUOTE',
	index
});

export const quoteError = text => ({
	type: 'SET_ERROR',
	text
});

export const QuoteProvider = ({ children }) => {
	const quoteReducer = (state, action) => {
		switch (action.type) {
			case 'SET_QUOTES':
				return {
					...state,
					quotes: action.quotes
				};
			case 'SET_SELECTED':
				return {
					...state,
					selectedQuote: action.quote
				};
			case 'ADD_QUOTE':
				return {
					...state,
					quotes: [...state.quotes, action.quote]
				};
			case 'DELETE_QUOTE':
				return state;
			case 'SET_ERROR':
				return {
					...state,
					error: action.error
				};
			default:
				return state;
		}
	};

	const initialState = {
		quotes: [],
		selectedQuote: null,
		error: ''
	};

	const [quoteState, dispatch] = useReducer(quoteReducer, initialState);

	useEffect(() => {
		const getInitialQuotes = async () => {
			try {
				const { data } = await axios.get('/api/quotes');
				console.log('AFTER THE API', data);

				if (data.quotes) {
					dispatch(setQuotes(data.quotes));
				}
			} catch (error) {
				dispatch(quoteError(error.message));
			}
		};
		getInitialQuotes();
	}, []);

	return (
		<QuoteContext.Provider
			value={{
				quoteState,
				dispatch
			}}
		>
			{children}
		</QuoteContext.Provider>
	);
};

export default QuoteContext;
