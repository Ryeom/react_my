import React, {Component} from 'react';
import './index.scss';
//import a from './a.scss'
//import './b.css'
//import b from './b.css'
import className from 'classnames/bind'
import c from './c.scss'
import d from './d.scss'
import item from './item.scss'
import './f.css'
function App() {
  return (
    <div>
      {/* <h2>app.js</h2>
      <Bpp/>
      <Cpp/>
      <Dpp/>
      <Epp/> */}
      {/* <Fpp/>
      <Gpp/>
      <Hpp/> */}
      <Ipp><Gpp/></Ipp>

      <Jpp><Gpp/><Item>히히</Item></Jpp>

      <Kpp hey show={true} me={30} the={''} money={false}>호라이</Kpp>


      <button class="button">Green</button>
<button class="button button2">Blue</button>
<button class="button button3">Red</button>
<button class="button button4">Gray</button>
<button class="button button5">Black</button>
    </div>
  );
}

function Kpp({hey,show,me,the,money,children}) {
  return (
    // console.log(`${hey},${typeof hey},${show},${typeof show}`)
    // console.log(`${me},${typeof me},${the},${typeof the}`);
    // console.log(`${money},${typeof money},${children},${typeof children}`);
    
    <div>
      {children}
    </div>
  )
}
//import './a.scss' 얘랑 짝지
// function Bpp(props) {
//   return (
//     <div className={'Redbox'}>
//       <h3>bpp</h3>
//     </div>
//   );
// }
// //import a from './a.scss'
// //import className from 'classnames/bind'
// function Cpp(props) {
//   const cx = className.bind(a)
//   return (
//     <div className={cx('greenyellowbox')}>
//       <h3>cpp</h3>
//     </div>
//   );
// }

// function Dpp(props) {
//   return (
//     <div className={'bluebox'}>
//      <h3>Dpp</h3>
//     </div>
//   );
// }
// function Epp(props) {
//   const cxx = className.bind(b)
//   return (
//     <div className={cxx('yellowbox')}>
//       <h3>Epp</h3>
//     </div>
//   );
// }

const Fpp = () => {
  const cx = className.bind(c);
  return (
    <div className={cx('page-template')}>
      <h1>일정 관리</h1>
      <div className={cx('content')}>
        하이
      </div>
    </div>
  );
};

const Gpp = ({value, onChange, onInsert}) => {
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      onInsert();
    }
  }
  
  const cx = className.bind(d)
  return (
    <div className={cx('todo-input')}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
      <div className={cx('add-button')} onClick={onInsert}>추가</div>
    </div>
  );
};


const Hpp = () => {
  const cx = className.bind(c);
  return (
    <div className={cx('page-template')}>
      <h1>일정 관리</h1>
      <div className={cx('content')}>
        하이
      </div>
      <Gpp/>
    </div>
  );
};
const Ipp = ({children}) => {
  const cx = className.bind(c);
  return (
    <div className={cx('page-template')}>
      <h1>일정 관리</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
};

class Jpp extends Component {
  render() {
    const cx = className.bind(c);
  return (
    <div className={cx('page-template')}>
      <h1>일정 관리</h1>
      <div className={cx('content')}>
        {this.props.children}
      </div>
    </div>
  )

  }
}

class Item extends Component {
  render() {
    const cx = className.bind(item);
    
    return (
      <div className={cx('todo-item')} onClick={()=>{}}>
        <input className={cx('tick')} type="checkbox" checked={false} readOnly/>
        <div className={cx('text')}>{this.props.children}</div> 
        <div className={cx('delete')} onClick={()=>{}
        }>[지우기]</div>
      </div>
    );
  }

}


export default App;
