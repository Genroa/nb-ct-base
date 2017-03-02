import { Template } from 'meteor/templating';

if(Meteor.isClient) {
	Template.registerHelper("getContentCreationOptions", function() {
		return Object.values(ContentCreationOptions._options);
	});

	Template.registerHelper("getContentThumbnailTemplate", function(content) {
		let cont = getConvertedContent(content);
		return cont && cont.getThumbnailTemplate();
	});
	
}