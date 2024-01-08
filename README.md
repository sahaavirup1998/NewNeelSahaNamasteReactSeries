package.json is the configuration of NPM. it keeps the track of package manager

how to make a react-element

// const heading = React.createElement("h1", {id:"heading"}, "Welcome to React by react!");
// reactelement is an object and becomes a html for browser to understand
// const parent = React.createElement(
//     "div", {id:"parent"}, [
//         React.createElement("div", {id:"chid"}, [
//             React.createElement("h1", {}, "I am the new heading"),
//             React.createElement("h2", {}, "I am the new heading2")]
//         ),
//         React.createElement(
//             "div", {id:"chid2"}, [
//                 React.createElement("h1", {}, "I am the new heading3"),
//                 React.createElement("h2", {}, "I am the new heading4")]
//         )]
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// 1st component
// const Title = () => {
//     return <h1>I am Avirup Saha. I am a FED</h1>
// }

// 2nd component
// const Body = () => {
//     return(
//         <div id="body">
//             <Title />
//             <h1>I am learning React</h1>
//         </div>
//     )
// }

# parcel
- Dev building
- Local server
- HMR -> Hot Module Replacement
- File Watching Algorithm
- Catching -> faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code Splitting
- Error handling
- Tree Shaking -> remove unused code

***passing a prop to a component is like passing a argument to a function. prop is an pobject

***config driven UI  

*** we have give key everytime when we use map function in react

*** there are two types of export and import
 - default export / import
 - named export / import 

 ***whenever a state variable changes React rerenders its component

 ***Reconciliation algorithm: React Reconciliation is the process through which React updates the Browser DOM

 ***Diffing algoritm find the difference between the new virtual DOM and Old virtual DOM.

 Better rendering approch: Load -> Render -> API -> Rerender