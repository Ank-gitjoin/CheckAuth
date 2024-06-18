const express = require('express');
const app = express();

const PORT = 3030

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

app.listen(PORT, () => {

	console.log(`Site is running on port http://127.0.0.1:${PORT}`)
})
