test('Uses state', () => {
  const code = require('fs').readFileSync('ProfileCard.jsx', 'utf8'); expect(code.includes('useState')).toBe(true);
});
