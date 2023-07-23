import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../CSS/digart.css'
import ImageGallery from 'react-image-gallery';
import p1 from '../images/HighresScreenshot00000~4.png';
import p2 from '../images/9DF42761-ABC9-42BD-A692-841D9B1380A0.jpg';
import p3 from '../images/untitled.png';
import p4 from '../images/Series 1.png';
import p5 from '../images/2021-11-03(3).jpg';
import p6 from '../images/2021-11-03(2).jpg';
import p7 from '../images/2021-11-03(1).jpg';
import p8 from '../images/2021-11-03(1).png';
import p9 from '../images/2021-11-03.jpg';
import p10 from '../images/2021-11-03.png';





const images = [
    {
        original: p1,
        thumbnail: p1,
    },
    {
        original: p2,
        thumbnail: p2,
    },
    {
        original: p3,
        thumbnail: p3,
    },
    {
        original: p4,
        thumbnail: p4,
    },
    {
        original: p5,
        thumbnail: p5,
    },
    {
        original: p6,
        thumbnail: p6,
    },
    {
        original: p7,
        thumbnail: p7,
    },
    {
        original: p8,
        thumbnail: p8,
    },
    {
        original: p9,
        thumbnail: p9,
    },
    {
        original: p10,
        thumbnail: p10,
    },

];


function digart() {

    return (
        <div className="digitalArt">
            <main>
                <ImageGallery items={images} />

                <div className="divider"></div>
                <p className="artdesc">
                    Digital art and occassional photography is a long time
                    passion of mine. I am completely self taught, and am well
                    versed in technologies such as Photoshop and Blender. 
                    I hope to one day combine my knack for design with my studies. Above is some of the work I've done, including photos I've taken, and 3d renders.

                    More recently I was named the UMD CS 50th-Anniversary Graphics 
                    and Tagline Design Competition Winner, and will have my logo
                    featured this fall.
                </p>
                
            </main>
        </div>
    );
}

export default digart;
