import React from 'react';
import renderer from 'react-test-renderer'
import App from './App';

it(`App`,()=>{
  let component = null;


  // Tests cannot be nested. Test `renders correctly` cannot run because it is nested within `App`.
  //시험은 중첩할 수 없다. 올바른 렌더링 테스트는 앱 내에 내포되어 있기 때문에 실행할 수 없다.
  it(`renders correctly`,()=>{
    component = renderer.create(<App/>);
  });

  it(`matches snapshot`,()=>{
    const tree = component.toJSON();
    expect(tree).toMatchSnapShot();
  })
});
/* 
CRA로 만든 리액트 프로젝트는 테스트 환경이 이미 다 준비되어있다.
기본 테스트 파일 : App.test.js


*/