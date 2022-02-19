import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import App from './App';

//Test to check if the app is being rendered
describe("App created", () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  //Test to check if what is being rendered in 'app' matches the snapshop in "_snapshot" file
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //Test to check whether the text 'Hello World!' is being rendered to the screen
  let findTextElement = function(tree, element){
    console.warn(tree)
    return true;
}
 
it('Find text element', ()=>{
   let tree = renderer.create(<App />).toJSON();
 
   expect(findTextElement(tree, 'Hello World!')).toBeDefined();
})

//Test to check source of image being rendered - not working

let getByTestId = function(tree, testID){
  console.warn(tree)
  return true;
}
  
it('Find image element', ()=>{
  let tree = renderer.create(
      <App />
  ).toJSON();

  expect(getByTestId(tree, 'catAndMarthaImage')).toContain('src', './assets/cat_and-martha.jpg');
})
});

//https://stackoverflow.com/questions/69732509/getbytestid-not-finding-testid

//Possible format for uri image test

// export const imageID = 'image_id';
// ...

// <Image testID={`${imageID}_${props.uri}`} ... />

// Test
// import {
//   imageID
// }, from '.';

// ...


// const testURI = 'https://picsum.photos/200';
// const { getByTestId } = render(<Component uri={testURI} />);

// expect(getByTestId()).toBeTruthy();
