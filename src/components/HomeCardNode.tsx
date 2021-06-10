import React, { useState } from 'react';
import DetailedView from './DetailedView';


function HomeCardNode (props: any) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="inlist">
            <img className='listImag' src={props.Artwork} alt='Not Available'/><br/>
            <h2>{props.name}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                Detail
            </button>

            {isVisible&&
            <DetailedView
                name={props.name}
                Artwork={props.Artwork}
                desc={props.Type}
                date={props.Species}
                close={() => setIsVisible(!isVisible)}
            />
            }
            {/*</div>*/}
        </div>
    );

}
export default HomeCardNode;