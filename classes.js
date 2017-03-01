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
		}
	},

	helpers: {
		getTemplateName : function(obj) {
			return "";
		}
	}
});


ContentTypes = {};
ContentCreationOptions = {};

// Insert content from the content management
ContentCreationOptions["insert_existing_content"] = {
	name: "Insérer un contenu pré-existant",
	description: "Insère un bloc de contenu pré-existant et éditable depuis le panneau d'administration. L'insertion peut éventuellement être une copie d'un contenu pré-existant.",
	formTemplate: "inserting_existing_content_template",
	action: function(parameters) {
	
	}
};