import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import s from "./ProsCard.module.scss"
const ProsCard = ({title, children, iconURL}) => {
    return (
        <div className={s.pros__card}>
            <div className={s.pros__text}>
                <h1 className={s.pros__title}>{title}</h1>
                <p className={s.pros__description}>{children}</p>
            </div>
            <motion.div
                className={s.pros__icon}
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{
                scale: 1.2,
            }}
                whileTap={{
                scale: 0.9
            }}>
                <motion.img src={iconURL.src} alt=""/>
            </motion.div>
        </div>
    );
};

export default ProsCard;