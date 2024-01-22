import React, { useState } from "react";
import './style.css';
import ImgComponent from "../ImgComponent";
import woodSword from '../assets/images/wood-sword.png';
import stoneSword from '../assets/images/stone-sword.png';
import ironSword from '../assets/images/iron-sword.png';
import goldSword from '../assets/images/gold-sword.png';
import diamondSword from '../assets/images/diamond-sword.png';

const Slider = (props) => {
    let [imgIndex, setImgIndex] = useState(0);

    const images = [
        {
            name: 'Wood sword',
            src: woodSword,
            description: 'Начало любого игрока в майнкрафт, существует буквально 2 минуты.',
        },
        {
            name: 'Stone sword',
            src: stoneSword,
            description: 'Этот тип уже покрепче, согласись, получить камнем в лоб и выжить- сложно.',
        },
        {
            name: 'Iron sword',
            src: ironSword,
            description: 'Это уже холодное оружие, с таким ты проходишь большую часть игры.',
        },
        {
            name: 'Gold sword',
            src: goldSword,
            description: 'Поверь, этот кент тебе не нужен...',
        },
        {
            name: 'Diamond sword',
            src: diamondSword,
            description: 'Ну этот друг всем мечам- меч.',
        },
    ];

    const nextImg = () => {
        setImgIndex((imgIndex) => (imgIndex + 1) % images.length);
    };

    const prevImg = () => {
        setImgIndex((imgIndex) => (imgIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <ImgComponent alt={images[imgIndex].name} src={images[imgIndex].src}/>
            <p>{images[imgIndex].description}</p>
            <button className="btn" id="btnOne" onClick={prevImg}>{'<'}</button>
            <button className="btn" id="btnTwo" onClick={nextImg}>{'>'}</button>
        </div>
    );
};

export default Slider;