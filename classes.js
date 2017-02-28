import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

Content = Class.create({
	name: 'Content',
	
	collection: new Mongo.Collection('contents'),
	
	fields: {
		humanName:{
			type: String,
			default: function() {return "contenu";}
		},
		className: {
			type: String,
			default: function() {return "Content";}
		},
		showInContentManagement: {
			type: Boolean,
			default: function() {return true;}
		},
		creationFormTemplate: {
			type: String,
			default: function() {return "";}
		}
	},

	helpers: {
		getTemplateName : function(obj) {
			return "";
		}
	}
});


ContentTypes = {};