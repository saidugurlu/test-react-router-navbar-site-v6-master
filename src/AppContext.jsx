import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const message = 'from context';

	return (
		<AppContext.Provider	value={{message}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
