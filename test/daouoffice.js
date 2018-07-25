describe('BDD style', function() {
  before(function() {
    // excuted before test suite
  });

  after(function() {
    // excuted after test suite
  });

  beforeEach(function() {
    // excuted before every test
  });

  afterEach(function() {
    // excuted after every test
  });
  
  var assert  = require('assert');
  describe('Example', function() {
	  describe('calculation', function() {
		  it('1+1 should be 2', function() {
		    	assert.equal(1+1, 2);
		  });	
	  });
  });
});