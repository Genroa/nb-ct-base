


Template.content_management_template.helpers({
	'getContents' : function() {
		return Content.find({showInContentManagement: true});
	},

	'getContentDataContext' : function(content) {
		let convertedContent = getConvertedContent(content);
		return {content: convertedContent};
	}
});