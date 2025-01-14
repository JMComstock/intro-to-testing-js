// Unit tests for the helloWorld function
describe('helloWorld Unit Tests', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello Unit Tests', function () {
    it('should be a defined function', function() {
        expect(sayHello).toBeDefined();
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when called with the argument "Jane".', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when called with the argument "Alex".', function () {
        expect(sayHello("Alex")).toBe(("Hello, Alex!"));
    });
    it('should return "Hello, Pat!" when called with an argument "Pat",', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, " + input + "!".', function () {
        expect(sayHello("Jason")).toBe("Hello, Jason!");
    });
});


/*describe('sayHello Unit Tests' ,function() {
    it('should be a defined function', function () {
        expect(sayHello).toBeDefined();
    });
    it('should return a string', function () {
        expect(sayHello()).toBe("string");
    });
    it('should return "Hello!" when no arguments are passed', function () {
        expect(sayHello()).toBe("Hello!");
    });
    it('should return "Hello, Angel" when called with argument "Angel".', function () {
        expect(sayHello("Angel")).toBe("Hello, Angel!");
    });
    it('should return "Hello, Andrew!" when called with argument "Andrew"', function () {
        expect(sayHello()).toBe("Hello!")
    });
    it('Return "That\'s not a name!" when called with argument (number) 21.', function () {
        expect(sayHello(21)).toBe("That's not a name!")
    })
});*/
