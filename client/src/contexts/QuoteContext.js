import React, { useReducer } from 'react';

export const QuoteContext = React.createContext();

// Action creators
export const setQuotes = (quotes) => ({
	type: 'SET_QUOTES',
	quotes
});

export const selectQuote = (quote) => ({
	type: 'SET_SELECTED',
	quote
})

export const addQuote = (quote) => ({
	type: 'ADD_QUOTE',
	quote
});

export const deleteQuote = (index) => ({
	type: 'DELETE_QUOTE',
	index
});


export const QuoteProvider = ({ children }) => {
	const quoteReducer = (state, action) => {
		switch (action.type) {
			case 'SET_QUOTES':
				return {
					...state,
					quotes: action.quotes
				}
			case 'SET_SELECTED':
				return {
					...state,
					selectedQuote: action.quote
				}
			case 'ADD_QUOTE':
				return {
					...state,
					quotes: [...state.quotes, action.quote]
				}
			case 'DELETE_QUOTE':
				return state;
			default:
				return state;
		}
	};

	const initialState = {
		quotes: [],
		selectedQuote: null
	}

	const [quotes, dispatch] = useReducer(quoteReducer, initialState);

	return (
		<QuoteContext.Provider
			value={{
				quotes,
				dispatch
			}}
		>
			{children}
		</QuoteContext.Provider>
	);
};

export default QuoteContext;
