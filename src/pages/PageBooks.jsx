import { AppContext } from '../AppContext';
import { useContext } from 'react';

export const PageBooks = () => {
	const { message } = useContext(AppContext);
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>This is the book page.</p>
			<p>{message}</p>
		</div>
	);
};
