import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

import s from "./BookmarkContainer.module.scss"

const BookmarkContainer = ({bookmarks}) => {
    return (
        <div className={s.bookmark__container}>
            <h1 className={s.bookmarks__title} style={{textAlign:"center"}}>Избранное</h1>
            {bookmarks && bookmarks.length ?   
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} photo={bookmark.mainImageURL} title={bookmark.title} url={bookmark.id} price={bookmark.price}/>)
            : "Не найдено"}
        </div>
    );
};

export default BookmarkContainer;