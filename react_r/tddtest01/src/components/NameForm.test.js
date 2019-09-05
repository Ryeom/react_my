import React from 'react'
//import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import NameForm from './NameForm'
describe('NameForm',()=>{
    let component = null

    let changed = null
    const onInsert = (name) =>{
        changed = name
    }


    it(`renders corectly`,()=>{ //이러 랜더 잘되냐
        //component = renderer.create(<NameForm/>);
        component = shallow(<NameForm onInsert={onInsert}/>);       //enzyme 의 기본 스냅샷은 가독성이 좋지않음
        /*
        Enzyme airbnb에서 만든 리액트 컴포넌트 테스팅 도구. 
         */
    })

    it(`mathes snapshor`,()=>{
        //const tree = component.toJSON();
        //expect(tree).toMatchSnapshot();
        expect(component).toMatchSnapshot();
    })

    describe('insert new text',()=>{
        it('has a form',()=>{
            expect(component.find('form').exists()).toBe(true);
        })
        it('has an input', ()=>{
            expect(component.find('input').exists()).toBe(true)
        })
        it(`simulates input change`,()=>{
            const mockedEvent = {
                target:{
                    value : 'hello'
                }
            };
            //새 이벤트를 시뮬레이트 함 드번째 파람은 객체이다
            component.find('input').simulate('change',mockedEvent);
            expect(component.state().name).toBe('hello');
        })
        it(`시뮬레이트 폼 서부미트 갸르르`,()=>{
            const mockedEvent = {
                preventDefault : ()=>null
            };
            component.find('form').simulate('submit',mockedEvent);
            expect(component.state().name).toBe('');
            expect(changed).toBe('hello');
        })
    })


})