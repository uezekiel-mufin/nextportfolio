import { useCallback, useContext } from 'react';
import Particles from 'react-tsparticles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import ThemeContext from './ThemeContext';

const ParticlesContainer = () => {
	const theme = useContext(ThemeContext);
	console.log(theme);
	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: 'transparent',
					},
				},
				fpsLimit: 1000,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#000000',
					},
					links: {
						color: '#000000',
						distance: 150,
						enable: true,
						opacity: 0.3,
						width: 1,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 6,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 30,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 3, max: 5 },
					},
					zIndex: {
						value: -10,
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesContainer;
