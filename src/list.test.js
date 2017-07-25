import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import List from './List';

it('should render a todo item ', () => {
  const tree = toJson(shallow(<List items={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with items', () => {
  const items = ['Learn react', 'rest', 'go out'];
  const tree = renderer.create(
    <List items={items} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
