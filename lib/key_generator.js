var KeyGenerator = function() {
	this.keyspace = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        this.keyspace.onlynumbers = '0123456789';
        this.keyspace.onlycapsletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.keyspace.onlysmallletters = 'abcdefghijklmnopqrstuvwxyz';


};

KeyGenerator.prototype.createKey = function(keyLength) {
	var key = '';
	var index;
	for (var i = 0; i < keyLength; i++) {
		index = Math.floor(Math.random() * this.keyspace.length);
		key += this.keyspace.charAt(index);
	}
	return key;
};

module.exports = KeyGenerator;
