import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import App from './App';


describe("App created", () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

    it('should display Hello World', () => {
      const text = tree.root.findByProps({testID: "myButton"}).props;
      expect(text.children).toEqual('Hello World');
    });
  
});

//Was up to: Watching youtube vid - 4.48 ish 
//Says tree is not defined - in vid it is imported
//Trying to figure out how to define tree in this file - 
//so that we can run the test - cos atm it's failing