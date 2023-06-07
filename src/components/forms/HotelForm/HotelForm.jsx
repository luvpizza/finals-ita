import React, {useState, useEffect} from 'react';
import {
    Input,
    List,
    message,
    Card,
    Drawer,
    Button,
    Space
} from 'antd';
import {useGetHotelByIDQuery} from '@/api/mock/adminQuery';
import {EditOutlined} from '@ant-design/icons';
const {Search} = Input;
const {Meta} = Card;
import s from './HotelForm.module.scss';

const HotelForm = () => {
    const [isEditing,
        setIsEditing] = useState(false);
    const [editData,
        setEditData] = useState({})
    const [hotelSearchID,
        setHotelSearchID] = useState(null);
    const [isQueryEnabled,
        setIsQueryEnabled] = useState(false);
    const [newPhotoURL,
        setNewPhotoURL] = useState('')
    const [newFeature,
        setNewFeature] = useState('')
    const {
        data: searchResults,
        isLoading: isSearchResultsLoading,
        isFetching: isSearchResultsFetching,
        isError: isSearchResultsError,
        error,
        refetch
    } = useGetHotelByIDQuery(hotelSearchID, {
        refetchOnMountOrArgChange: true,
        skip: !isQueryEnabled
    },);
    const [messageApi,
        contextHolder] = message.useMessage();

    const handleSearch = (value) => {
        setIsQueryEnabled(true);
        setHotelSearchID(value);
    };

    useEffect(() => {
        if (isQueryEnabled) {
            refetch({id: hotelSearchID});
        }
    }, [isQueryEnabled, hotelSearchID, refetch]);

    useEffect(() => {
        console.log(searchResults);
        setEditData(searchResults)
    }, [searchResults])

    return (
        <div className={s.hotel__form}>
            {contextHolder}
            {isSearchResultsError && messageApi.open({
                type: 'error',
                content: error.status == 404 && "Не найдено"
            })}

            <Search
                placeholder="Введите ID отеля"
                onSearch={handleSearch}
                style={{
                width: 200
            }}
                loading={isSearchResultsLoading || isSearchResultsFetching}/>
            <div className={s.hotel__data}>
                {searchResults && searchResults.id && <div className={s.hotel__main}>
                    <div className={s.title__edit}>
                        <h2 className={s.hotel__title}>{searchResults.title} {`(${searchResults.id})`}</h2>
                        <Button
                            type="link"
                            onClick={() => {
                            setIsEditing(true)
                        }}
                            icon={< EditOutlined />}>
                            Редактировать
                        </Button>
                    </div>
                    <div className={s.hotel__location}>
                        <h2>Местоположение</h2>
                        <p className={s.location__city}>{searchResults.location.city}</p>
                        <p className={s.location__address}>{searchResults.location.full}</p>
                        <p className={s.location__lon_lat}>
                            <b>Долгота и широта:</b>
                            {searchResults.location.lon_lat[0]}, {searchResults.location.lon_lat[1]}
                        </p>
                    </div>
                    <div className={s.hotel__photos}>
                        <h2>Фотографии</h2>
                        <div className={s.photos__cards}>
                            {searchResults
                                .photos_url
                                .map((url, idx) => {
                                    return <Card
                                        key={idx}
                                        style={{
                                        width: 220,
                                        minHeight: 220
                                    }}
                                        cover={< img alt = "hotel photo" src = {
                                        url
                                    } />}>
                                        <Meta description={`${url.slice(0, 25)}...`}/>
                                    </Card>
                                })}
                        </div>
                    </div>
                    <div className={s.hotel__rooms}>
                        <h2>Комнаты</h2>
                        <div className={s.rooms__list}>

                            {searchResults
                                .rooms
                                .map((room, idx) => <Card
                                    key={idx}
                                    style={{
                                    width: 200
                                }}
                                    cover={< img alt = "example" src = {
                                    room.photo_url
                                } />}>
                                    <h4>{room.type}</h4>
                                    <span>Вместимость: {room.maxPeople}</span><br/>
                                    <span>Цена за ночь: {room.price}</span>
                                    {room.availability ? <h4 className={s.availability__green}>Доступно</h4> :  <h4 className={s.availability__red}>Занято</h4>}
                                </Card>)}
                        </div>
                    </div>
                    <List
                        className={s.hotel__features}
                        size="small"
                        header={< p > <strong>Услуги</strong> </p>}
                        dataSource={searchResults.features}
                        renderItem={(item) => <List.Item>{item}</List.Item>}/>
                    <Drawer
                        title="Редактировать информацию об отеле"
                        placement="right"
                        size='large'
                        onClose={() => {
                        setIsEditing(false);
                        setEditData(searchResults)
                    }}
                        open={isEditing}>
                        {editData && editData.id && <div className={s.edit__form}>
                            <div className={s.edit__item}>
                                <h3>Имя отеля</h3>
                                <Input
                                    value={editData.title}
                                    onChange={e => {
                                    setEditData({
                                        ...editData,
                                        title: e.target.value
                                    })
                                }}/>
                            </div>

                            <div className={s.edit__item}>
                                <h3>Местоположение</h3>
                                <Input
                                    value={editData.location.city}
                                    onChange={e => {
                                    setEditData({
                                        ...editData,
                                        location: {
                                            ...editData.location,
                                            city: e.target.value
                                        }
                                    })
                                }}/>
                                <Input
                                    value={editData.location.full}
                                    onChange={e => {
                                    setEditData({
                                        ...editData,
                                        location: {
                                            ...editData.location,
                                            full: e.target.value
                                        }
                                    })
                                }}/>
                            </div>
                            <div className={s.edit__item}>
                                <h3>Фотографии</h3>
                                <List
                                    className={s.edit__photos}
                                    size="small"
                                    bordered
                                    header={< p > <strong>URL</strong> </p>}
                                    dataSource={editData.photos_url}
                                    renderItem={(item, itemidx) => <List.Item
                                    onClick={() => setEditData({
                                    ...editData,
                                    photos_url: editData
                                        .photos_url
                                        .filter((el, idx) => idx != itemidx)
                                })}>{item}</List.Item>}/>
                                <Space.Compact>
                                    <Input
                                        value={newPhotoURL}
                                        onChange={(e) => {
                                        setNewPhotoURL(e.target.value)
                                    }}/>
                                    <Button
                                        type='primary'
                                        onClick={() => {
                                        setEditData({
                                            ...editData,
                                            photos_url: [
                                                ...editData.photos_url,
                                                newPhotoURL
                                            ]
                                        });
                                        setNewPhotoURL('')
                                    }}>Добавить URL</Button>
                                </Space.Compact>
                            </div>
                            <div className={s.edit__item}>
                                <h3>Услуги</h3>
                                <List
                                    className={s.edit__photos}
                                    size="small"
                                    bordered
                                    header={< p > <strong>Наименование услуги</strong> </p>}
                                    dataSource={editData.features}
                                    renderItem={(item, itemidx) => <List.Item
                                    onClick={() => {
                                    setEditData({
                                        ...editData,
                                        features: editData
                                            .features
                                            .filter((el, idx) => idx != itemidx)
                                    })
                                }}>{item}</List.Item>}/>
                                <Space.Compact>
                                    <Input
                                        value={newFeature}
                                        onChange={(e) => {
                                        setNewFeature(e.target.value)
                                    }}/>
                                    <Button
                                        type='primary'
                                        onClick={() => {
                                        setEditData({
                                            ...editData,
                                            features: [
                                                ...editData.features,
                                                newFeature
                                            ]
                                        });
                                        setNewFeature('')
                                    }}>Добавить услугу</Button>
                                </Space.Compact>
                            </div>
                            <div className={s.edit__btns}>
                                <Button
                                    type='primary'
                                    style={{
                                    width: 120
                                }}
                                    onClick={() => {
                                    console.log(editData)
                                }}>Изменить</Button>
                                <Button type='default' danger>Удалить отель</Button>
                            </div>
                        </div>}
                    </Drawer>
                </div>}
            </div>
        </div>
    );
};

export default HotelForm;
