import React from 'react';

import Header from '../components/Header'
import CardPhilosophy from '../components/CardPhilosophy'


const Home = () => {
    let data = [
    {
        title : "Judul",
        description: "Description",
        images: "https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        textButton: "TRY",
        position: "left"
    },
    {
        title : "Judul",
        description: "Description",
        images: "https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        textButton: "TRY",
        position: "right"
    }
 ]
    return (
        <>
        <div>
            <Header/>
            
        </div>
        <div className="container">

        <CardPhilosophy
           data = {data}
            />
            </div>
            </>
    );
}

export default Home;