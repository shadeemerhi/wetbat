import { useContext } from 'react';

// Contexts
import { QuoteContext } from '../../../../../contexts/QuoteContext';

// Component libraries
import { Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';

// Styles
import './ConfirmModal.css';
import { Button } from '@material-ui/core';

const ConfirmModal = ({ open, setOpen }) => {
	const {
		quoteState: { selectedQuote, loading },
		onDeleteQuote
	} = useContext(QuoteContext);

	const handleDelete = async () => {
		await onDeleteQuote(selectedQuote);
        setOpen(false);
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className="Modal"
			open={open}
			onClose={() => setOpen(false)}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500
			}}
		>
			<Fade in={open}>
				<div className="ModalContent">
					<p>Are you sure you want to delete the quote?</p>
					<Button className="DeleteButton" onClick={handleDelete} variant="contained" color="secondary">
						{loading ? <CircularProgress size={30} color="default" /> : 'Delete'}
					</Button>
				</div>
			</Fade>
		</Modal>
	);
};

export default ConfirmModal;
