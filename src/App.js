import { Eventcalendar } from '@mobiscroll/react';

const resources = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'John' },
	{ id: 3, name: 'John' },
	{ id: 4, name: 'John' },
	{ id: 5, name: 'John' },
	{ id: 6, name: 'John' },
	{ id: 7, name: 'John' },
	{ id: 8, name: 'John' },
	{ id: 9, name: 'John' },
	{ id: 10, name: 'John' },
	{ id: 11, name: 'John' },
	{ id: 12, name: 'John' },
	{ id: 13, name: 'John' },
	{ id: 14, name: 'John' },
	{ id: 15, name: 'John' },
	{ id: 16, name: 'John' },
	{ id: 17, name: 'John' },
	{ id: 18, name: 'John' },
	{ id: 19, name: 'John' },
	{ id: 20, name: 'John' },
	{ id: 21, name: 'John' },
	{ id: 22, name: 'John' },
	{ id: 23, name: 'John' },
	{ id: 24, name: 'John' },
	{ id: 25, name: 'John' },
	{ id: 26, name: 'John' },
	{ id: 27, name: 'John' },
	{ id: 28, name: 'John' },
	{ id: 29, name: 'John' },
	{ id: 30, name: 'John' },
	{ id: 31, name: 'John' },
	{ id: 32, name: 'John' },
	{ id: 33, name: 'John' },
	{ id: 34, name: 'John' },
	{ id: 35, name: 'John' },
	{ id: 36, name: 'John' },
	{ id: 37, name: 'John' },
	{ id: 38, name: 'John' },
	{ id: 39, name: 'John' },
	{ id: 40, name: 'John' },
	{ id: 41, name: 'John' },
	{ id: 42, name: 'John' },
	{ id: 43, name: 'John' },
	{ id: 44, name: 'John' },
	{ id: 45, name: 'John' },
	{ id: 46, name: 'John' },
	{ id: 47, name: 'John' },
	{ id: 48, name: 'John' },
	{ id: 49, name: 'John' },
];

function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				maxHeight: '100vh',
			}}
		>
			<Eventcalendar
				cssClass="md-timeline-height"
				view={{
					timeline: {},
				}}
				resources={resources}
			/>
		</div>
	);
}

export default App;
