import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllMeetsUp from './pages/AllMeetsUp';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<AllMeetsUp title={'All Meets Up'} />} />
				<Route path='favorites' element={<Favorites />} />;
				<Route path='newMeetUp' element={<NewMeetUp />} />;
			</Routes>
		</Layout>
	);
}
