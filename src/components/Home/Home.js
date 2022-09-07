import Header from "./Header";
import Main from "./Main/Main";
const Home = ({
  setlangs,
  webTheme,
  handleToggleWebTheme,
  langs,
  projects,
  setprojects
}) => {
  return (
    <div className="Home">
      <Header webTheme={webTheme} handleToggleWebTheme={handleToggleWebTheme} />
      <Main langs={langs} setlangs={setlangs} projects={projects} setprojects={setprojects} />
    </div>
  );
};

export default Home;
