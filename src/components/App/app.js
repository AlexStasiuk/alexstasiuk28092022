import React, { useCallback, useEffect, useState } from 'react';
import './app.css';
import i1 from '../../images/cats.jpg';
import i2 from '../../images/chubaka.jpg';
import i3 from '../../images/dogs.jpg';
import i4 from '../../images/dyno.jpg';
import i5 from '../../images/planets.jpg';

const imagesArray = [i1, i2, i3, i4, i5];
const imageColors = ['red', 'blue', 'green', 'yellow'];

function App() {
    const [images, setImages] = useState(imagesArray);
    const [autoClickValue, setAutoClickValue] = useState(false);
    const [mixImagesButtonColor, setmixImagesButtonColor] = useState(
        imageColors[0]
    );

    const mixImages = useCallback(() => {
        let imagesTempCopy = [...images];
        imagesTempCopy = shuffleArray(imagesTempCopy);
        setImages(imagesTempCopy);
        setmixImagesButtonColor(
            imageColors[Math.floor(Math.random() * imageColors.length)]
        );
    }, [images]);

    useEffect(() => {
        if (autoClickValue) {
            setTimeout(() => {
                if (autoClickValue) {
                    mixImages();
                }
            }, 520);
        }
    }, [autoClickValue, mixImages]);

    const shuffleArray = (array) => {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    };
    const autoClick = () => {
        setAutoClickValue((prev) => !prev);
    };
    const autoClickButtonText = autoClickValue
        ? 'AutoClick on'
        : 'AutoClick off';

    return (
        <div className="main-wrapper">
            <div className="header">
                <img src={images[0]} alt={''}></img>
            </div>
            <div className="middle-block">
                <div className="left-pannel">
                    <img src={images[1]} alt={''}></img>
                </div>
                <div className="main-content">
                    <img src={images[2]} alt={''}></img>
                    <button onClick={autoClick} className="auto-click-button">
                        {autoClickButtonText}
                    </button>
                    <button
                        onClick={mixImages}
                        className={mixImagesButtonColor}
                    >
                        Mix images
                    </button>
                </div>
                <div className="right-pannel">
                    <img src={images[3]} alt={''}></img>
                </div>
            </div>
            <div className="footer">
                <img src={images[4]} alt={''}></img>
            </div>
        </div>
    );
}

export default App;
