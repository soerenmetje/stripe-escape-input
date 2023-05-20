const escapeStripeSearchQueryInput = require('../lib');

test('valid input', () => {
    expect(escapeStripeSearchQueryInput('foo')).toBe('foo');
});

test('injection input using single quotes', () => {
    expect(escapeStripeSearchQueryInput("124' OR created>0 OR status:'active")).toBe("124\\' OR created>0 OR status:\\'active");
});
test('injection input using double quotes', () => {
    expect(escapeStripeSearchQueryInput('124" OR created>0 OR status:"active')).toBe('124\\" OR created>0 OR status:\\"active');
});