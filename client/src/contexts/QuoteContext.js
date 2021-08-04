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

const deleteQuote = quote => ({
	type: 'DELETE_QUOTE',
	quote
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
			return;
		} catch (error) {
			dispatch(setError(error.message));
			return;
		}
	};

	const onDeleteQuote = async quote => {
		dispatch(setLoading(true));

		try {
			const {
				data: { error }
			} = await axios.delete(`/api/quotes/${quote.id}`);
			console.log('AFTER DELETING', error);
			dispatch(setLoading(false));
			if (error) throw new Error(error);
			if (quoteState.error) dispatch(setError(''));
			dispatch(deleteQuote(quote));
			dispatch(selectQuote({}));
			return;
		} catch (error) {
			dispatch(setError(error.message));
			return;
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
				return {
					...state,
					quotes: [...state.quotes.filter(quote => quote.id !== action.quote.id)]
				};
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
				const { data, error } = await axios.get('/api/quotes');
				if (error) throw new Error(error);
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
				onDeleteQuote,
				setError
			}}
		>
			{children}
		</QuoteContext.Provider>
	);
};

export default QuoteContext;
