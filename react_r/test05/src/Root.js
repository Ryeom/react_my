import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import qs from 'query-string'

//BrowserRouter, Switch, Route 
class Root extends Component {
  render() {
    return (
      <div>
        <h1>Root.js</h1>
        <BrowserRouter>
        <Route exact path='/app' component={App} />
        <Route path='/bpp' component={Bpp} />
        <Route path='/tiger' component={Cpp} />
        <Route exact path='/sub/:pm' component={Dpp}/> 
        <Route exact path='/epp' component={Epp}/>
        <Route exact path='/fpp' component={Fpp}/>
        
        </BrowserRouter>
      </div>
    );
  }
}
function App(props) {
  const [a,b,c] = ['dog','tiger','cat']

  const s = `/fpp/${a}/?name=ryeom`
  return (
    <div>
      {/* <Route path='/bpp' component={Bpp} /> */}
      <Link to='/'>home</Link><br/>
      <Link to={s} >tiger/name</Link>
      <h2>App.js</h2>
    </div>
  );
}
function Bpp(props) {
  return (
    <div>
      <h2>Bpp.js</h2>
    </div>
  );
}
function Cpp(props) {
  return (
    <div>
      <h2>Cpp.js</h2>
      <Link to='/'><button>bnt</button></Link>
    </div>
  )//버튼을 눌렀을때 그 주소로 이동한다.
}
function Dpp({match}) {
  console.log(match)//params에 있음
  return (
    <div>
      <h2>Dpp.js</h2>
      <h3>{match.params.pm}</h3>
    </div>
  );
}
function Epp({location}) {
  console.log(location);
  console.log(location.search);
  const m = qs.parse(location.search)
  console.log(m);
  return (
    <div>
      <h2>Epp.js</h2>
    </div>
  );
}
function Fpp({match,location}) {
  console.log(match)
  console.log(location);
  console.log(location.search);
  const m = qs.parse(location.search)
  console.log(m);
  return (
    <div>
      <h2>Fpp.js</h2>
      <h3>{match.params.pm}</h3>
    </div>
  );
}
export default Root