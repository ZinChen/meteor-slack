Template.footer.events({
	'keypress input': function(event) {
		if (event.charCode == 13) {
			event.stopPropagation();
			Messages.insert({text: $('.input-box_text').val()});
			$(".input-box_text").val("");
			return false;
		}
	}
});
