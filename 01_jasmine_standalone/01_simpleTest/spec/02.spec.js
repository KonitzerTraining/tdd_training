// Testvorbereitung

var a;

// Wird nur ein Mal ausgeführt
beforeAll(function () {
    console.log('beforeAll', a);
});

// vor jeder Ausführung von it(), ausführen
beforeEach(function () {
    a = 1;
    console.log(a);
});

afterAll(function () {});
afterEach(function () {});

// Spec
it('should be 2', function () {
    a++;
    // Expectation
    // assertion === matcher
    expect(a).toEqual(2);
});

// Spec
it('should be 3', function () {
    a++;
    a++;
    // Expectation
    // assertion === matcher
    expect(a).toEqual(3);
});
