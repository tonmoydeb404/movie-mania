import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Media from './pages/Media';
import Search from './pages/Search';
import WithMUI from './WithMUI';

function App() {
    return (
        <WithMUI>
            <BrowserRouter>
                <Switch>
                    <Route path="/movie/:id" exact>
                        <Media media="movie" />
                    </Route>
                    <Route path="/tv/:id" exact>
                        <Media media="tv" />
                    </Route>
                    <Route path="/search/:query" exact component={Search} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        </WithMUI>
    );
}

export default App;
