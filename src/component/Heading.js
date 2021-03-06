import React from 'react';
import Carousel from 'react-material-ui-carousel';

import CVB1 from '../images/CVB1.jpeg';
import CVB2 from '../images/CVB2.jpeg';
import CVB3 from '../images/CVB3.jpeg';

import "../styles/styles.css";

function Heading(props){
    return(
        <div>
            <Carousel
                indicatorContainerProps={{
                    style: {
                        marginTop: '-50px',    // 1
                        padding: '10px',
                        color: 'red'       // 3
                    }
                }}
            >
                <img className="photo" src={CVB1} />
                <img className="photo" src={CVB2} />
                <img className="photo" src={CVB3} width='250px' height='250px'/>
            </Carousel>
        </div>
            
    );
}

export default Heading;