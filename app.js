const express = require('express');
const app = express();

// Basic routes
app.get('/', (req, res) => {
	res.status(200).json({
		message: "This is welcome page "
	})

})

app.get('/profile', (req, res) => {
	res.send('This is profile page');
})

// error handel page
app.get('*', (req, res) => {
	res.status(404).json({
		message: " please provide correct path"
	})
})

app.listen(3030)
{
	//	console.log(`Server running on port:${PORT}`);
	console.log(`Server running on port:${3030}`);
}