
export const ProjectItem = ({project }: {project: Project}) => {
    return (
        <div className="p-2 border rounded-md">
            <div className="font-bold">{project.name}</div>
            <p className="text-gray-400">{project.description}</p>
        </div>
    )
}