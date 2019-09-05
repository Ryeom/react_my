import React from 'react'
import renderer from 'react-test-renderer'
import Counter from './Counter'

describe('Counter', () => {
    let component = null

    it('renders correctly', () => {
        component = renderer.create( < Counter /> );
    })

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    /*
    코드 테스팅 로직을 쪼개고 쪼갤 때 일단 가장 작은 단위는 it이다.App
    it 내부에서는 expect를 통하여 특정값이 우리가 예상한 값이 나왔는지 확인가능!
    여러개의 it을 describe안에 넣을 수 있다.
    ```
        describe('...', () => {
            describe('...', () => {
                it('...', () => { });
                it('...', () => { });
            });
            describe('...', () => {
                it('...', () => { });
                it('...', () => { });
            });
        });
    ```
    discribe('Counter',()=>{
        let component = null

        it('초기 랜더링이 문제없이 되어야 한다',()=>{
            component = renderer.create(<Counter/>)
        })
          it('초기 렌더링 스냅샷 일치함', () => {
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        })
    })
    ```
    it부분에서 무엇을 검사해야하는지에 대해 설명을 넣으면되는데 주로 영어를 넣는다.
    영어를 넣는게 힘들면 한글로 넣어도 된다.
    
    --------------
    테스트코드를 저장하면 자동으로 test가 다시 작동 한다(yarn test를 껏다면 다시 실행 시켜야함)
    스냅샷이 생성된다.(src/components/__snapshots__/Counter.test.snap)



    */

    //increase 확인
    // it(`increases correctly`, ()=>{
    //     component.getInstance().onIncrease()
    //     expect(component.getInstance().state.value).toBe(2) //value값이 2인지 확인
    //     const tree = component.toJSON()//re-render
    //     expect(tree).toMatchSnapshot()//스냅샷 비교해줘
    // })

    // //dicrease 확인 onDecrease
    // it(`decreases correctly`,()=>{
    //     component.getInstance().onDecrease()
    //     expect(component.getInstance().state.value).toBe(1)//1인지 확인
    //     const tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })


    // increase 잘 되는지 확인
    it('increases correctly', () => {
        component.getInstance().onIncrease();
        expect(component.getInstance().state.value).toBe(2); // value가 2인지 확인
        const tree = component.toJSON(); //re-render
        expect(tree).toMatchSnapshot(); //비교
    });

    // decrease 잘 되는지 확인
    it('decreases correctly', () => {
        component.getInstance().onDecrease();
        expect(component.getInstance().state.value).toBe(1); // value가 1인지 확인
        const tree = component.toJSON(); //re-render
        expect(tree).toMatchSnapshot(); //비교
    });






});


