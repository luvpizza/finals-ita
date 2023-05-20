import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import s from "./ResultsBanner.module.scss"
const ResultsBanner = ({city}) => {
    return (
        <AnimatePresence>
            <section className={s.results__banner}>
                <motion.div
                    className={s.banner__content}
                    transition={{type: "tween", stiffness: 100}}
                    initial={{
                    y: 50,
                    opacity: 0.2
                }}
                    animate={{
                    y: 0,
                    opacity: 1
                }}>
                    <h1 className={s.banner__city}>{city}</h1>
                    <p className={s.banner__subtext}>Результаты поиска в городе</p>
                </motion.div>
            </section>
        </AnimatePresence>
    );
};

export default ResultsBanner;