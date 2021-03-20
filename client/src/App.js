
import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import * as postService from './services/postService';

import style from './App.module.css';
import Header from './components/Header';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Menu from './components/Menu';
import Main from './components/Main';


class App extends Component {

  constructor(props) {
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
        this.setState({ posts });
      });
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });
  }

  getPosts() {
    // ако няма селектет пост, върни всички постове
    if (!this.state.selectedPost) {
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
          <Menu onMenuItemClick={this.onMenuItemClick} />

          {/* Switch е за да си избере първия срещнат раут и само него да използва */}
          <Switch>
            {/* пропъртито exact означава само ако пътя е точно този, раута се подава с чилдрени */}
            <Route path="/" exact>
              <Main posts={this.getPosts()} />
            </Route>

            {/* раута се подава с компонент */}
            <Route path="/about/:name" component={About} />

            {/* три начина за подаване на раута, долния е с рендер - рендера е предназначен директно да се подаде експрешън */}
            <Route path="/contact-us" render={(props) => <ContactUs />} />

            {/* ако не си намери правилен раут, долния е дефолтен (винаги ще мачне към него) */}
            <Route render={() => <h1>Error Page</h1>}/>
          </Switch>


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


