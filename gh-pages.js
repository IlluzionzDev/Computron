import { publish } from 'gh-pages';

// Deploy to Github Pages and
publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/IlluzionzDev/Computron.git', // Update to point to your repository
		user: {
			name: 'IlluzionzDev', // update to use your name
			email: 'jaminstratford@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
