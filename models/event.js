var mongoose = require('mongoose');
var Schema = mongoose.Schema;


eventSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	password: String,
	eventtitle: String,
	eventorganizer: String,
	venuetype: String,
	eventaddress: String,
	eventType: String,
	eventcategory: String,
	eventfreq: String,
	eventstartdate: String,
	eventstarttime: String,
	eventenddate: String,
	eventendtime: String,
	eventtimezone: String,
	displayeventendtime: String,
	eventlocale: String,
	additional: String,
	hashtags : String,
	eventstatus: String,
	seatingstatus: String,
	canedit: String,
	shortdescription: String,
	eventrating: Number
	
}),
Cevent = mongoose.model('Cevent', eventSchema);

module.exports = Cevent;