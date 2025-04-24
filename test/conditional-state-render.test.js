test('Conditional state render', () => {
  const code = require('fs').readFileSync('ProfileCard.jsx', 'utf8'); expect(code.includes('showDetails')).toBe(true);
});
