import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Game from "./Game";
import Home from "./home";
import { Route, Routes } from 'react-router'

const notFound = () => {
    return (
        <div>
            <h2>Sayfa bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfaya ulaşılamıyor. Lütfen daha sonra tekrar deneyiniz.
            </p>
        </div>
    )
}


class App extends React.Component {

    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route exact path='/Game' element={<Game />} />
                    <Route exact path='/' element={<Home />} />
                    <Route path='*' element={notFound()} />
                </Routes>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));