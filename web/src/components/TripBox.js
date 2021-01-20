import React from 'react';

const TripBox = (props) => {
    return (
        <>
             <div className="trip-box">
                {/* Image */}
                <div className="trip-box-profile">
                    <img src = {props.trip.photos[0]} alt="trip" className="trip-box-profile-image"></img>
                </div>

                {/* Detail */}
                <div className="trip-box-detail">
                    <div className="trip-box-detail-title"><a  href={props.trip.url} className="trip-box-detail-title">{props.trip.title}</a></div>
                    <p className="trip-box-detail-body-text">{props.trip.description}</p>
                    <p>.....<a className="trip-box-detail-body-readmore" href={props.trip.url}>อ่านต่อ</a></p>
                    <div className="trip-box-detail-tag">
                        <p className="trip-box-detail-tag-title">หมวด  -  </p>
                        {props.trip.tags.map( (tag, index) => (
                            <div className="trip-box-detail-tag-body" onClick={ () => props.setSearchValue(tag)}>{tag}</div>
                        ))}
                    </div>
                    <div className="trip-box-detail-images">
                        {/* (!! don't forget) switch to use function instead of this method. Because there will be an error if there are less than 4 images.*/}
                        <img src={props.trip.photos[1]} className="trip-box-detail-image"></img>
                        <img src={props.trip.photos[2]} className="trip-box-detail-image"></img>
                        <img src={props.trip.photos[3]} className="trip-box-detail-image"></img>
                    </div>
                </div>
            </div>
         </>
    );
}

export default TripBox;