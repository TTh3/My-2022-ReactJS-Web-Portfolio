import SectionLanguages from "./SectionOne/SectionLanguages";
import OverviewProjects from "./SectionTwo/OverviewProjects";
const Main = ({ langs, setlangs, projects, setprojects }) => {
  return (
    <>
      <main>
        <SectionLanguages langs={langs} setlangs={setlangs} />
        <OverviewProjects projects={projects} setprojects={setprojects} />
      </main>
    </>
  );
};

export default Main;
