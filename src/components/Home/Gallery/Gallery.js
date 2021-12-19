import React from 'react';
import galleryOne from '../../../Images/Gallery/gallery-1.jpg'
import galleryTwo from '../../../Images/Gallery/gallery-2.jpg'
import galleryThree from '../../../Images/Gallery/gallery-3.jpg'
import './Gallery.css'


// homepage gallery section
const Gallery = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="mt-2 ">
                            <img className="w-100 a" src={galleryOne} alt="" />
                        </div>
                        <div className="mt-4 ">
                            <img className="w-100 a" src={galleryTwo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="m-3">
                            <img className="w-100" src={galleryThree} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;