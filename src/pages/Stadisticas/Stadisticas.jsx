
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import './Stadisticas.css';
import 'chart.js/auto'; // Asegúrate de incluir esto para cargar los elementos necesarios de Chart.js
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

const Stadisticas = () => {
	const dataPeoples = [
		{
			name: 'Juan',
			apellido: 'Perez',
			edad: 25
		},
		{
			name: 'Ana',
			apellido: 'Garcia',
			edad: 30
		},
		{
			name: 'Pedro',
			apellido: 'Rodriguez',
			edad: 28
		},
		{
			name: 'Maria',
			apellido: 'Martinez',
			edad: 22
		}
		,
		{
			name: 'Maria',
			apellido: 'Martinez',
			edad: 22
		}
		,
		{
			name: 'Maria',
			apellido: 'Martinez',
			edad: 22
		}
	]

	const dataByYear = {
		2023: [12, 19, 3, 5, 2, 3, 5],
		2024: [10, 15, 7, 6, 8, 10, 12],
		2025: [14, 10, 4, 7, 3, 6, 8]
	};
	const [yearlyAverages, setYearlyAverages] = useState([]);
	useEffect(() => {
		const averages = calculateYearlyAverages(dataByYear);
		setYearlyAverages(averages);
	}, []);

	const labelsAVG = yearlyAverages.map(item => item.year);
	const dataAVG = {
		labels: labelsAVG,
		datasets: [
			{
				label: 'Promedio de Datos por Año',
				data: yearlyAverages.map(item => item.average),
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1
			}
		]
	};


	const calculateYearlyAverages = (dataByYear) => {
		return Object.keys(dataByYear).map(year => {
			const values = dataByYear[year];
			const sum = values.reduce((acc, curr) => acc + curr, 0);
			const average = sum / values.length;
			return {
				year: parseInt(year),
				average: average
			};
		});
	};

	const labels = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'];

	const [year, setYear] = useState(2023);
	const dataYear = {
		labels: labels,
		datasets: [
			{
				label: `Datos del año ${year}`,
				data: dataByYear[year],
				backgroundColor: 'rgba(166, 206, 227, 0.5)',
				borderColor: 'rgba(130, 50, 140, 0.5)',
				borderWidth: 1
			}
		]
	};
	const handleChangeYear = (event) => {
		setYear(parseInt(event.target.value));
	};
	const [searcher, setSearcher] = useState('')
	const [dataFilter, setDataFilter] = useState(dataPeoples)

	const changeValueSearcher = (event) => {
		let filter = event.target.value;
		setSearcher(filter);
		if (filter !== '') {
			let filtersPeople = dataFilter.filter(people =>
				people.name.toLowerCase().includes(filter.toLowerCase()) ||
				people.apellido.toLowerCase().includes(filter.toLowerCase())
			);
			setDataFilter(filtersPeople);
		} else {
			setDataFilter(dataPeoples);
		}
	}
	// Datos para el gráfico Doughnut
	const data = {
		labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'],
		datasets: [
			{
				label: 'My Doughnut Chart',
				data: [12, 19, 3, 5, 2, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(166, 206, 227)',
					'rgba(130, 50, 140)'
				],
				borderColor: [
					'rgba(166, 206, 227)',
					'rgba(130, 50, 140)'
				],
				borderWidth: 1
			}
		]
	};
	const dataLine = {
		labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'],
		datasets: [
			{
				label: 'My Doughnut Chart',
				data: [12, 19, 3, 5, 2, -10, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(186, 90, 199, 0.664)'
				],
				tension: 0.5,
				pointRadius: 5,
				fill: true,
				borderColor: [
					'rgb(130, 50, 140)'
				],
				borderWidth: 2,
				pointBackgroundColor: [
					'rgb(130, 50, 140)'
				]
			},
			{
				label: 'My Doughnut Chart 2',
				data: [12, 19, 4, 5, 9, -20, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(186, 0, 120, 0.664)'
				],
				tension: 0.5,
				pointRadius: 5,
				fill: true,
				borderColor: [
					'rgb(130, 0, 100)'
				],
				borderWidth: 2,
				pointBackgroundColor: [
					'rgb(130, 0, 100)'
				]
			}
		]
	};
	const data2 = {
		labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO'],
		datasets: [
			{
				label: 'My Doughnut Chart',
				data: [12, 19, 3, 5, 2, 3, 5], // Datos para cada segmento del gráfico
				backgroundColor: [
					'rgba(178, 223, 138)',
					'rgba(51, 160, 44)',
					'rgba(251, 154, 153)',
					'rgba(166, 206, 227)',
					'rgba(31, 120, 180)',
				],
				borderColor: [
					'rgba(178, 223, 138)',
					'rgba(51, 160, 44)',
					'rgba(251, 154, 153)',
					'rgba(166, 206, 227)',
					'rgba(31, 120, 180)',
				],
				borderWidth: 1
			}
		]
	};
	const columns = [
		{
			name: 'Nombre',
			selector: row => row.name,
			sortable: true
		},
		{
			name: 'Apellido',
			selector: row => row.apellido
		},
		{
			name: 'Edad',
			selector: row => row.edad
		},
		{
			name: 'Acciones',
			cell: row => (
				<div>
					<button onClick={() => handleEdit(row)}>Editar</button>
					<button onClick={() => handleDelete(row)}>Eliminar</button>
				</div>
			),
		},
	]

	const paginationComponentOptions = {
		rowsPerPageText: 'Filas por página',
		rangeSeparatorText: 'de',
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Todos',
	};

	const handleEdit = row => {
		console.log('Edit', row);
		// Agrega tu lógica de edición aquí
	};

	const handleDelete = row => {
		console.log('Delete', row);
		// Agrega tu lógica de eliminación aquí
	};
	return (
		<div className='stadisticas'>
			<h2>Stadisticas Works!</h2>
			<select onChange={handleChangeYear} value={year}>
				<option value={2023}>2023</option>
				<option value={2024}>2024</option>
				<option value={2025}>2025</option>
			</select>
			<Bar data={dataYear} />
			<hr />
			<Bar data={dataAVG} />
			<hr />

			<Doughnut data={data2} />
			<Line data={dataLine} />
			<form action="">
				<label htmlFor="">Buscador</label>
				<input type="text" value={searcher} onChange={changeValueSearcher} />
			</form>
			<DataTable columns={columns} data={dataFilter} pagination paginationComponentOptions={paginationComponentOptions} selectableRows={true} />
		</div>
	);
};

export default Stadisticas;
