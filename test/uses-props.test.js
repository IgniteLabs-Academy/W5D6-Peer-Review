test('Uses props', () => {
  const code = require('fs').readFileSync('ProfileCard.jsx', 'utf8'); expect(code.includes('props')).toBe(true);
});
