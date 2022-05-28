const routes = (name: string) => ({
	characters: name !== ''
		? `characters?name=${name}&apikey=${process.env.REACT_APP_API_KEY}`
		: `characters?apikey=${process.env.REACT_APP_API_KEY}`
});

export default routes;
