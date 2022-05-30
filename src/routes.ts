const routes = (name: string, id?: string) => ({
	characters: name !== ''
		? `characters?name=${name}&apikey=${process.env.REACT_APP_API_KEY}`
		: `characters?apikey=${process.env.REACT_APP_API_KEY}`,
	charactersId: `characters/${id}?apikey=${process.env.REACT_APP_API_KEY}`
});

export default routes;
