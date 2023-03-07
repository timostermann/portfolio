module.exports = {
	'*.{json,md,yml}': ['npx prettier --write'],
	'*.{ts,tsx,svelte}': ['npx prettier --write', 'npm run lint'],
	'*': ['npm run test:related -- --run']
};
