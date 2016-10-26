function MyViewModel() {
	this.firstName = ko.observable('Planet');
	this.lastName = ko.observable('Earth');

	this.fullName = ko.pureComputed({
		read: function() {
			return this.firstName() + " " + this.lastName();
		},
		write: function(value) {
			var lastSpacePos = value.lastIndexOf(" ");
			if (lastSpacePos > 0) { // Ignore values with no space character
				this.firstName(value.substring(0, lastSpacePos)); // Update "firstName"
				this.lastName(value.substring(lastSpacePos + 1)); // Update "lastName"
			}
		},
		owner: this
	});

	this.produce = ['Apple', 'Banana', 'Celery', 'Corn', 'Orange', 'Spinach'];
	this.selectedProduce = ko.observableArray(['Corn', 'Orange']);
	this.selectedAllProduce = ko.pureComputed({
		read: function() {
			// Comparing length is quick and is accurate if only items from the
			// main array are added to the selected array.
			return this.selectedProduce().length === this.produce.length;
		},
		write: function(value) {
			this.selectedProduce(value ? this.produce.slice(0) : []);
		},
		owner: this
	});

	var self = this;
	self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);

	// The current item will be passed as the first parameter, so we know which place to remove
	self.removePlace = function(place) {
		self.places.remove(place)
	}


}

var o = new MyViewModel();
ko.applyBindings(o);
setTimeout(function() {
	o.firstName('11');
}.bind(o), 3000);