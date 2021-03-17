
import { Component } from 'react';

import * as postService from './services/postService';

import style from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';


class App extends Component {

  constructor(props){
      super(props);

      this.state = {
        posts: [],
        selectedPost: null,
      }

      this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  // компонента се зарежда в ДОМ и тогава се прави заявка
  componentDidMount() {
      postService.getAll() 
        .then(posts => {
          this.setState({posts});
        });
      }

  onMenuItemClick(id) {
    this.setState({selectedPost: id});
  }

  getPosts() {
    // ако няма селектет пост, върни всички постове
    if(!this.state.selectedPost){
        return this.state.posts;
    } else {
      // ако има селект пост, тогава намери пост с id, което е същото като на селектет пост
      return [this.state.posts.find(x => x.id == this.state.selectedPost)];
    }
  }
  

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick}/>

          {/* подаваме постовете на мейна (подават се през пропс на мейна) */}
          <Main 
          // за постове дай резултата от функцията getPosts
          posts={this.getPosts()}
           />

        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Menu />
//         <Main />
//       </div>
//     </div>
//   );
// }

export default App;


