var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	emailconfirmation: String,
	password: String,
	birthday: Number,
	birthmonth: Number,
	birthyear: Number,
	city: String,
	lastname: String,
	passwordconfirmation: String,
	phonenumber: String,
	regtime: {type: Date, default: Date.now},
	firstname: String,
	policystatus:String,
	eventorganizer:String,
	gender:String,
	countrycode: String,
	country: String,
	updates: String,
	ref: String

}),
User = mongoose.model('User', userSchema);

module.exports = User;





