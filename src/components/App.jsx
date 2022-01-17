import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';
//snippets: imr, slr
const App = () => {
    return (
        <Layout>
            <Login/>
        </Layout>
    );
}

export default App;
