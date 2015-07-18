Meteor.startup(function() {
	smtp = {
		username: 'zinchen777@gmail.com',
		password: 'YCK4SV1PVDrLsWz0Xw7Hcw',
		server: 'smtp.mandrillapp.com',
		port: 587
	}
	process.env.MAIL_URL = "smtp://" + encodeURIComponent(smtp.username) +
		":" + encodeURIComponent(smtp.password) +
		"@" + encodeURIComponent(smtp.server) +
		":" + smtp.port;
});
