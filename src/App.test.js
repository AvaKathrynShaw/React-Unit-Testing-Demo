import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should add an item based on the value in the state', () => {
  	const component = shallow(<App />);
    const preventDefault = jest.fn();
    component.setState({
      items
    });
    component.find('form').simulate('submit', { preventDefault });
  	expect(toJson(component)).toMatchSnapshot();
    expect(preventDefault).toBeCalled();
  });

  it('should pass a selected value to the onChange function', () => {
    const tree = renderer.create(
      <App />
    );
    const component = shallow(<App items={items} />);
    component.find('input').simulate('change', { target: {
      value: 'Change function' }
    });

    expect(toJson(component)).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
