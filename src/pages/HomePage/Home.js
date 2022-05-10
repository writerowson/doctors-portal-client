import React from 'react';
import Banner from './Banner';

import Info from './Info/Info';

const Home = () => {
    return (
        <div>
            {/* <div
                className="bg-{Banner}"
            // style={{
            //     backgroundImage: '',
            //     height: '50vh'
            // }}

            ></div> */}
            <Banner></Banner>
            <Info></Info>

        </div >
    );
};

export default Home;