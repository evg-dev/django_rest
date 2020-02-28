import React, {Component} from "react";
import {BrowserRouter, Link, Route, Switch, withRouter} from "react-router-dom";
import NavBar from "./containers/NavBar/NavBar";


// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/tags'>Tags</Link></li>
//         <li><Link to='/category'>Category</Link></li>
//       </ul>
//     </nav>
//   </header>
// )
//
//
// const App = () => (
//   <div>
//     <Header />
//     {/*<Main />*/}
//     {/*<Footer />*/}
//   </div>
// );


class App extends Component {


//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             loaded: false,
//             placeholder: "Loading"
//         };
//     }
//
//     componentDidMount() {
//         fetch("/api/v0/")
//             .then(response => {
//                 if (response.status > 400) {
//                     return this.setState(() => {
//                         return {placeholder: "Something went wrong!"};
//                     });
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 this.setState(() => {
//                     return {
//                         data,
//                         loaded: true
//                     };
//                 });
//             });
//     }
//
    render() {
        return (
            <BrowserRouter>
                <Route path="/" render={() => (<h1>Test</h1>)}/>
            </BrowserRouter>
//             <ul>
//                 {this.state.data.map(tag => {
//                     return (
//                         <li key={tag.name}>
//                             {tag.name} - {tag.slug}
//                         </li>
//                     );
//                 })}
//             </ul>
//
        );
    }
}

export default App;
