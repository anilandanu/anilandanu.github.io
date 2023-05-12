import './App.css';
import Main from './components/main/Main'
import Date from './components/date/Date'
import Bride from './components/bride/Bride'
import Groom from './components/groom/Groom'
import Story from './components/story/Story'
import Plan from './components/plan/Plan'
import Invite from './components/invite/Invite'
import Credits from './components/credits/Credits';
import Build from './components/Build/Build';

function App() {
  return (
    <div className="app">
      <div className="app_child">
        <Main />
        <Groom />
        <Bride />
        <Story />
        <Date />
        <Plan />
        <Invite />                            
        <Credits />
        <Build />
      </div>
    </div>
  );
}

export default App;
