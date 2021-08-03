import React, { useEffect, useReducer } from 'react';
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
});

const setError = error => ({
	type: 'SET_ERROR',
	error
});

export const QuoteProvider = ({ children }) => {
	const onCreateQuote = async newQuote => {
		dispatch(setLoading(true));

		try {
			const {
				data: { quote, error }
			} = await axios.post('/api/quotes', { quote: newQuote });
			dispatch(setLoading(false));
			if (error) throw new Error(error);

			dispatch(addQuote(quote));
		} catch (error) {
			dispatch(setError(error.message));
		}
	};

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
				};
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
				if (data.quotes) {
					dispatch(setQuotes(data.quotes));
				}
			} catch (error) {
				dispatch(setError(error.message));
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
				setError
			}}
		>
			{children}
		</QuoteContext.Provider>
	);
};

export default QuoteContext;
