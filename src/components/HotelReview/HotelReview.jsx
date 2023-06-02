import React from 'react';
import starSVG from '@/assets/icons/ratingstar.svg'
import profileSVG from '@/assets/icons/review-icon.svg'
import s from './HotelReview.module.scss'
const HotelReview = ({reviewName, reviewText, rating}) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src={starSVG.src} alt="star" className={s.star}/>);
        }
        return stars;
    };
    return (
        <div className={s.user__review}>
            <div className={s.review__info}>
                <div className={s.user__credentials}>
                    <div className={s.user__icon}>
                        <img src={profileSVG.src} alt="" />
                    </div>
                    <h3 className={s.user__name}>{reviewName}</h3>
                </div>
                <div className={s.review__stars}>
                    {rating
                        ? renderStars()
                        : "undefined"}
                </div>
            </div>
            <p className={s.review__text}>{reviewText}</p>
        </div>
    );
};

export default HotelReview;