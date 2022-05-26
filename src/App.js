import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NoMatch from './NoMatch';
import UserProfile from './UserProfile';
import BackButton from './BackButton';
import GoForward from './GoForward';
import GoJump from './GoJump';
import GoHomeButton from './GoHomeButton';
/*-------------------29.2--------------------------*/
// function Home() {
//   return <h2>Home</h2>
// }

// function About() {
//   return <h2>About</h2>
// }

// function App() {
//   return (
//     <Router>
//       <div className="App" style={{textAlign: "center"}}>
//         <Link to="/">Home</Link>
//         <Link to="/About">About</Link>
//         <Switch>
//           {/* by convention `/` is listed first with exact={true} */}
//           <Route exact path="/">
//             <Home />
//           </Route>
          
//           <Route path='/About'>
//             <About />
//           </Route>

//           <Route path='/user/:id'>
//             <UserProfile />
//           </Route>

//           <Route>
//             <NoMatch/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

/*-------------------29.4 + 29.5--------------------------*/

function Home() {
  return <p>Home Page</p>
}

function App() {
  return (
    <Router>
        <div className="App">
            <div>
                <Link to="/">Home</Link>
            </div>
            {Array(10)
              .fill()
              .map((ignoredValue, index) => index + 1)
              .map((id) => (
                <div key={id}>
                  <Link to={`/user/${id}`}>User {id}</Link>
                </div>
              ))}
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/user/:id'>
                <UserProfile />
              </Route>
            </Switch>
            <BackButton />
            <GoForward />
            <GoJump />
            <GoHomeButton />
        </div>
    </Router>
  );
}
export default App;