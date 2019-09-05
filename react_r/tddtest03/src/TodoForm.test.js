import React from 'react'
import { render,fireEvent } from '@testing-library/react'
import TodoForm from './main/TodoForm'

describe('<TodoForm/>', () => {
    // DOM check ################################################################
    it('1. input하고 button이 있다', () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm/>);
        getByText('submitbutton');
        getByPlaceholderText('inputarea');
    });

    // Input Event ###############################################################
    it('2. input의 값이 잘 변화한다', () => {
        const { getByPlaceholderText } = render(<TodoForm />);
        const input = getByPlaceholderText('inputarea');

        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    }); 

    // Button Event #############################################################
    it('3. onInsert를 부르고 input을 clear한다', () => {
        const onInsert = jest.fn();
        const { getByText, getByPlaceholderText } = render(<TodoForm/>);
        const input = getByPlaceholderText('inputarea');
        const button = getByText('submitbutton')
        fireEvent.change(input, {
            target: {
                value: 'gg'
            }
        });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('gg');
        expect(input).toHaveAttribute('value', '');
    });
});