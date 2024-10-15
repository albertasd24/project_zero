import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
	const [dropDown, setDropDown] = useState('')
	const toggleDropDownLinks = (module) => {
		if (dropDown == module) {
			setDropDown('')
			return;
		}
		setDropDown(module)
	}
	return (
		<div className='sidebar'>
			<h2>Estela</h2>
			<div className="sidebar__links">
				<a href="s">Inicio</a>
				<span className='menu__dropdown' style={dropDown == 'module1' ? { color: '#82328c' } : { color: '#838383' }} onClick={() => toggleDropDownLinks('module1')}>Link Module</span>
				<div className="submenu__dropdown" style={dropDown == 'module1' ? { display: 'flex' } : { display: 'none' }}>
					<a href="s">Sublink 1</a>
					<a href="s">Sublink 2</a>
					<a href="s">Sublink 3</a>
					<a href="s">Sublink 4</a>
					<a href="s">Sublink 5</a>
				</div>
				<a href="">Función</a>
				<a href="">Configuración</a>
				<a href="">Cerrar Sesión</a>
			</div>
		</div>
	);
};



export default Sidebar;