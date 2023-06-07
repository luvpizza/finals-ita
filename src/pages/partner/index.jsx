import React from 'react';
import Header from '@/components/Header/Header';
import {InsertRowLeftOutlined} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {useEffect, useState} from 'react';
import {useGetHotelByIDQuery, useGetOwnerByIDQuery} from '@/api/mock/adminQuery';
import s from "./partner.module.scss"
const {Content, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {key, icon, children, label};
}

const PartnerPanel = () => {
    const ownerSearchID = 1 // partner pod id 1
    const [items,
        setItems] = useState([getItem('Мои отели', 'ownerhotels', < InsertRowLeftOutlined />)])
    const [collapsed,
        setCollapsed] = useState(false);
    const {token: {
            colorBgContainer
        }} = theme.useToken();
    const [selectedKey,
        setSelectedKey] = useState(['ownerhotels'])

    const handleMenuSelect = ({selectedKeys}) => {
        setSelectedKey(selectedKeys);
        console.log(selectedKeys);
    };
    const [currentHotel,
        setCurrentHotel] = useState(null)
    const [hotelSearchID,
        setHotelSearchID] = useState(null);
    const [isQueryEnabled,
        setIsQueryEnabled] = useState(false);

    const {
        data: searchHotelResults,
        isLoading: isSearchHotelResultsLoading,
        isFetching: isSearchHotelResultsFetching,
        isError: isSearchHotelResultsError,
        error: errorHotel,
        refetch: refetchHotel
    } = useGetHotelByIDQuery(hotelSearchID, {
        refetchOnMountOrArgChange: true,
        skip: !isQueryEnabled
    },);
    const handleHotelSearch = (id) => {
        setIsQueryEnabled(true);
        setHotelSearchID(id);
    };
    useEffect(() => {
        if (isQueryEnabled) {
            refetchHotel({id: hotelSearchID});
        }
    }, [isQueryEnabled, hotelSearchID, refetchHotel]);

    const {
        data: searchResults,
        isLoading: isSearchResultsLoading,
        isFetching: isSearchResultsFetching,
        isError: isSearchResultsError,
        error,
        refetch
    } = useGetOwnerByIDQuery(ownerSearchID, {
        refetchOnMountOrArgChange: true
    },);
    useEffect(() => {
        if (searchHotelResults) {
            setCurrentHotel(searchHotelResults);
        }
    }, [searchHotelResults]);
    useEffect(() => {
        if (searchHotelResults) {
            console.log(searchHotelResults);
        }
    }, [searchHotelResults]);
    return (
        <div>
            <Header/>
            <Layout
                style={{
                minHeight: '100vh',
                background: "#fafafa"
            }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    theme="light">
                    <div className="demo-logo-vertical"/>
                    <Menu
                        onSelect={handleMenuSelect}
                        theme="light"
                        defaultSelectedKeys={selectedKey}
                        mode="inline"
                        items={items}
                        style={{
                        paddingTop: "40px"
                    }}/>
                </Sider>
                <Layout>
                    <Content
                        style={{
                        margin: '45px 16px'
                    }}>
                        {selectedKey == 'ownerhotels' && searchResults && searchResults.hotels && <div className={s.partner__form}>
                            <h2>Выберите ваш отель</h2>
                            <div className={s.hotel__selector}>
                                {searchResults
                                    .hotels
                                    .map((hotel, idx) => <Button
                                        style={{
                                        width: 200,
                                        height: 50
                                    }}
                                        onClick={() => {
                                        handleHotelSearch(hotel.id)
                                    }}
                                        key={idx}>{hotel.title}</Button>)}
                            </div>
                            <div className={s.current__hotel}>
                                {searchHotelResults && searchHotelResults.id && `${searchHotelResults.id} ${searchHotelResults.title}`}
                            </div>
                        </div>
}

                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default PartnerPanel;