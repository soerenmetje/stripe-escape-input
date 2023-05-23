const escapeInput = require('../lib');

test('valid input', () => {
    expect(escapeInput('foo')).toBe('foo');
});

test('injection input using single quotes', () => {
    expect(escapeInput("124' OR created>0 OR status:'active")).toBe("124\\' OR created>0 OR status:\\'active");
});
test('injection input using double quotes', () => {
    expect(escapeInput('124" OR created>0 OR status:"active')).toBe('124\\" OR created>0 OR status:\\"active');
});

test('injection input using single quotes with 1 backslash in front', () => {
    expect(escapeInput("124\\' OR created>0 OR status:\\'active")).toBe("124\\\\\\' OR created>0 OR status:\\\\\\'active");
});
test('injection input using double quotes with 1 backslash in front', () => {
    expect(escapeInput('124\\" OR created>0 OR status:\\"active')).toBe('124\\\\\\" OR created>0 OR status:\\\\\\"active');
});

test('injection input using single quotes with 2 backslashes in front', () => {
    expect(escapeInput("124\\\\' OR created>0 OR status:\\\\'active")).toBe("124\\\\\\\\\\' OR created>0 OR status:\\\\\\\\\\'active");
});
test('injection input using double quotes with 2 backslashes in front', () => {
    expect(escapeInput('124\\\\" OR created>0 OR status:\\\\"active')).toBe('124\\\\\\\\\\" OR created>0 OR status:\\\\\\\\\\"active');
});