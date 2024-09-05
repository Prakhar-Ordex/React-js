export const exerciesOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2ebb5871ddmsh66af323dba1d7e2p144f0djsnde7d412932e1',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}