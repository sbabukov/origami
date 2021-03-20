
// useHistory e хуук
import { Redirect, useHistory, Switch, Route } from 'react-router-dom';

const About = ({
    //    тези трите ги получаваме от раута
    match,
}) => {

    // const history = useHistory();

    // редиректване с някаква рандом логика
    // if (Math.random() > 0.5) {
        //     return <Redirect to="/"/>

        // history.push('/')
        // задължително е да се върне нещо, примерно нул, защото този компонент рендерира, винаги трябва да връща нещо, виждаш го за малко и примигва
        // return null;
    // }

    // console.log(match);
    return (<main className="main-container">
        {/* мача е деструктуриран */}
        <h1>About {match.params.name} Page</h1>

        {/* използване на нестнат раут */}
        <Switch>
            <Route path="/about/pesho">
                <h2>Pesho is the Best!</h2>
            </Route>
        </Switch>

    </main>)
}
export default About;