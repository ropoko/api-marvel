const routes = (name: string) => ({
	characters: `characters?name=${name}&apikey=${process.env.REACT_APP_API_KEY}`
});

export default routes;
