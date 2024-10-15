import { Outlet } from 'react-router-dom';
import './LayoutDashboard.css';
import Sidebar from '../../../components/Sidebar/Sidebar';

const LayoutDashboard = ({ }) => {
	return (
		<div className='layout__dashboard'>
			<Sidebar />
			<div className="">
				<Outlet />
			</div>
		</div>
	);
};


export default LayoutDashboard;