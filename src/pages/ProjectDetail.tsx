import { useParams, Link } from 'react-router-dom';
import projectsData from '../data.json';
import type { Project } from '../types/project';

function ProjectDetail() {
  const { id } = useParams();

  const projects = projectsData as Project[];

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Proyecto no encontrado</h1>
        <Link to="/">Volver al Dashboard</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{project.name}</h1>

      <p><strong>ID:</strong> {project.id}</p>
      <p><strong>Ubicación:</strong> {project.location}</p>
      <p><strong>Capacidad:</strong> {project.capacity} kWh</p>
      <p><strong>Estado:</strong> {project.status}</p>
      <p><strong>Descripción:</strong> {project.description}</p>

      <Link to="/">Volver al Dashboard</Link>
    </div>
  );
}

export default ProjectDetail;