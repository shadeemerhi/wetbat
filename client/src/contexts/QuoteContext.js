import React, { useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';

export const QuoteContext = React.createContext();

// Action creators
const setQuotes = quotes => ({
	type: 'SET_QUOTES',
	quotes
});

const selectQuote = quote => ({
	type: 'SET_SELECTED',
	quote
});

const addQuote = quote => ({
	type: 'ADD_QUOTE',
	quote
});

const deleteQuote = index => ({
	type: 'DELETE_QUOTE',
	index
});

const setLoading = status => ({
	type: 'SET_LOADING',
	status
})

const quoteError = text => ({
	type: 'SET_ERROR',
	text
});

export const QuoteProvider = ({ children }) => {

	const onCreateQuote = useCallback(newQuote => {
		dispatch(setLoading(true));
		console.log('HERE IS THE NEW QUOTE', newQuote);
	}, []);

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
			case 'SET_LOADING':
				return {
					...state,
					loading: action.status
				}
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
		selectedQuote: {},
		loading: false,
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
				dispatch,
				setQuotes,
				selectQuote,
				onCreateQuote,
				deleteQuote,
				quoteError
			}}
		>
			{children}
		</QuoteContext.Provider>
	);
};

export default QuoteContext;
