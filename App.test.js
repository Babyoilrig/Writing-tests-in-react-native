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

  let findTextElement = function(tree, element){
    console.warn(tree)
    return true;
}
 
it('Find text element', ()=>{
   let tree = renderer.create(
       <App />
   ).toJSON();
 
   expect(findTextElement(tree, 'Hello World!')).toBeDefined();
})
  
});
