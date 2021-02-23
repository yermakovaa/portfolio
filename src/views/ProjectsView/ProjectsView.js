import Projects from '../../components/Projects';
import { ownProjects, commandProjects } from './myProjects';
import s from './ProjectsView.module.css';

function ProjectsView() {
  return (
    <>
      <h1 className={s.title}>Pet projects</h1>
      <h2 className={s.subTitle}>
        <span className={s.typeProject}>Command</span> projects
      </h2>
      <ul className={s.list}>
        {commandProjects.map(
          ({ id, label, link, preview, info, tech, repo }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              preview={preview}
              info={info}
              tech={tech}
              repo={repo}
            />
          ),
        )}
      </ul>
      <h2 className={s.subTitle}>
        <span className={s.typeProject}>Own</span> projects
      </h2>
      <ul className={s.list}>
        {ownProjects.map(({ id, label, link, preview, info, tech, repo }) => (
          <Projects
            key={id}
            label={label}
            link={link}
            preview={preview}
            info={info}
            tech={tech}
            repo={repo}
          />
        ))}
      </ul>
    </>
  );
}

export default ProjectsView;
