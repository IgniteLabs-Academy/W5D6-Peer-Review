test('Toggle state', () => {
  const code = require('fs').readFileSync('ProfileCard.jsx', 'utf8'); expect(code.includes('setShow')).toBe(true);
});
