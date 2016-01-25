describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the full name to a contact", function(){
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Location', function() {
  it("creates a new location with the given properties", function() {
    var testLocation = new Location("123 Anyplace Street", "Anywhere", "OR");
    expect(testLocation.street).to.equal("123 Anyplace Street");
    expect(testLocation.city).to.equal("Anywhere");
    expect(testLocation.state).to.equal("OR");
    expect(testLocation.addresses).to.eql([]);
  });
});
