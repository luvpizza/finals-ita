import {useGetOwnerByIDQuery} from '@/api/mock/adminQuery';
import { EditOutlined } from '@ant-design/icons';
import {Input, List, message, Card, Drawer, Button, Space} from 'antd';
import Link from 'next/link';
const {Search} = Input;
import React, {useEffect, useState} from 'react';

import s from "./OwnersForm.module.scss"
const OwnersForm = () => {
    const [isEditing,
        setIsEditing] = useState(false);
    const [editData,
        setEditData] = useState({})
    const [ownerSearchID,
        setOwnerSearchID] = useState(null);
    const [isQueryEnabled,
        setIsQueryEnabled] = useState(false);
    const {
        data: searchResults,
        isLoading: isSearchResultsLoading,
        isFetching: isSearchResultsFetching,
        isError: isSearchResultsError,
        error,
        refetch
    } = useGetOwnerByIDQuery(ownerSearchID, {
        refetchOnMountOrArgChange: true,
        skip: !isQueryEnabled
    },);
    const [addHotelID, setAddHotelID] = useState(null)

    const handleSearch = (value) => {
        setIsQueryEnabled(true);
        setOwnerSearchID(value);
    };

    useEffect(() => {
        if (isQueryEnabled) {
            refetch({id: ownerSearchID});
        }
    }, [isQueryEnabled, ownerSearchID, refetch]);

    useEffect(() => {
        console.log(searchResults);
        setEditData(searchResults)
    }, [searchResults])
    const [messageApi,
        contextHolder] = message.useMessage();
    return (
        <div className={s.owners__form}>
            {contextHolder}
            {isSearchResultsError && messageApi.open({
                type: 'error',
                content: error.status == 404 && "Не найдено"
            })}

            <Search
                placeholder="Введите ID партнера"
                onSearch={handleSearch}
                style={{
                width: 200
            }}
                loading={isSearchResultsLoading || isSearchResultsFetching}/>
            <div className={s.owner__data}>
            {searchResults && searchResults.id && <div className={s.owner__main}>
                <div className={s.owner__credentials}>
                    <h2 className={s.owner__name}>{`${searchResults.firstName} ${searchResults.lastName} (${searchResults.id})`}</h2>
                    <Button type='link' icon={<EditOutlined/>} onClick={()=>setIsEditing(true)}>Редактировать</Button>
                </div>
                    <p className={s.owner__joindate}>Партнер с {searchResults.dateOfRegister}</p>
                <List
                    className={s.owner__hotels}
                    dataSource={searchResults.hotels}
                    header={<h3>Отели в управлении</h3>}
                    renderItem={(item) => (
                    <List.Item>
                        {item.title} <Link className={s.hotel__link} href={`hotel/${item.id}`} target="_blank">{item.id}</Link>
                    </List.Item>)}/>
                
                <Drawer title="Редактировать информацию о партнере" placement="right" size='large' onClose={()=>{setIsEditing(false); setEditData(searchResults)}} open={isEditing}>
                {editData && editData.id && 
                        <div className={s.edit__form}>
                            <div className={s.edit__item}>
                                    <h3>Имя партнера</h3>
                                <Space.Compact >
                                    <Input style={{marginRight: 5}}  value={editData.firstName} onChange={e=>{setEditData({...editData, firstName :e.target.value})}}/>
                                    <Input value={editData.lastName} onChange={e=>{setEditData({...editData, lastName :e.target.value})}}/>
                                </Space.Compact>
                            </div>
                            <div className={s.edit__item}>
                                <h3>Отели в управлении</h3>
                                <List
                                    className={s.edit__hotels}
                                    dataSource={editData.hotels}
                                    bordered
                                    renderItem={(item) => (
                                    <List.Item>
                                        {`ID: ${item.id} Название: ${item.title}`}
                                    </List.Item>)}/>
                                    <Space.Compact>
                                        <Input type='number' style={{width: 200}} value={addHotelID} onChange={(e)=>{setAddHotelID(e.target.value)}}/>
                                        <Button type='primary' onClick={()=>{setEditData({...editData, hotels: [...editData.hotels, {id: addHotelID, title: "Новый отель"}]}); setAddHotelID('')}}>Добавить отель (ID)</Button>
                                    </Space.Compact>
                            </div>
                            <div className={s.edit__btns}>
                                <Button type='primary' style={{width:120}} onClick={()=>{console.log(editData)}}>Изменить</Button>
                                <Button type='default' danger>Удалить партнера</Button>
                            </div>
                        </div>}
                </Drawer>
                </div>
                
                }
            </div>
        </div>
    );
};

export default OwnersForm;