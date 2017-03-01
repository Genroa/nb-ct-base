import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';
import { AdminPanels } from 'meteor/genroa:nb-admin';

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
ContentCreationOptions = {
	_options: {},
	addCreationOption : function(obj) {
		ContentCreationOptions._options[obj.id] = obj;
	}
};

// Insert content from the content management
ContentCreationOptions.addCreationOption({
	id: "insert_existing_content",
	name: "Insérer un contenu pré-existant",
	description: "Insère un bloc de contenu pré-existant et éditable depuis le panneau d'administration. L'insertion peut éventuellement être une copie d'un contenu pré-existant.",
	formTemplate: "inserting_existing_content_template",
	action: function(parameters) {
	
	}
});


AdminPanels.addPanel({
	id: "contents",
	name: "Contenus",
	template: "content_management_template"
});