


Template.content_management_template.helpers({
	'getContents' : function() {
		return Content.find({showInContentManagement: true});
	},

	'getContentDataContext' : function(content) {
		let convertedContent = content && window[content.className].findOne({_id: content._id});
		console.log(convertedContent);
		return {content: convertedContent};
	}
});