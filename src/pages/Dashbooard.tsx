import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data.json';
import type { Project } from '../types/project';

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('Todos');

  useEffect(() => {
    setProjects(projectsData as Project[]);
  }, []);

  const filteredProjects =
    filterStatus === 'Todos'
      ? projects
      : projects.filter((project) => project.status === filterStatus);

  return (
    <div style={{ padding: '20px' }}>
      <h1>GreenPoint - Dashboard de Energía Solar</h1>

      <div className="filter-container">
        <select
          className="filter-select"
          value={filterStatus}
          onChange={(event) => setFilterStatus(event.target.value)}
        >
          <option value="Todos">Filtrar por estado: Todos</option>
          <option value="Activo">Filtrar por estado: Activo</option>
          <option value="Mantenimiento">Filtrar por estado: Mantenimiento</option>
          <option value="Pendiente">Filtrar por estado: Pendiente</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <h2>{project.name}</h2>
            <p><strong>Ubicación:</strong> {project.location}</p>
            <p><strong>Capacidad:</strong> {project.capacity} kWh</p>
            <p><strong>Estado:</strong> {project.status}</p>

            <Link to={`/proyecto/${project.id}`}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;