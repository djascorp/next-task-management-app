import { ProjectItem } from "./components/ProjectItem";

export default function ProjectPage({}){

    const projects: Array<Project> = [
        {name: 'DNA Gestcom', description: 'Sales managment App'},
        {name: 'DNA Compta', description: 'Comptabity app helpers'}
    ];
    return (
        <div className="grid grid-flow-row-dense grid-cols-4">
            {projects.map(p => (
                <div className="">
                <ProjectItem project={p} />
            </div>
            ))}
            
        </div>
    )
} 