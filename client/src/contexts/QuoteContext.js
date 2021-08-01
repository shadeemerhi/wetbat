import React, { useReducer } from 'react';

export const QuoteContext = React.createContext();

// Action creators
export const setQuotes = (quotes) => ({
	type: 'SET_QUOTES',
	quotes
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
				return state;
			case 'ADD_QUOTE':
				return state;
			case 'DELETE_QUOTE':
				return state;
			default:
				return state;
		}
	};

	const [quotes, dispatch] = useReducer(quoteReducer, []);

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
