import HotelForm from '@/components/forms/HotelForm/HotelForm';
import OwnersForm from '@/components/forms/OwnersForm/OwnersForm';
import Header from '@/components/Header/Header';
import {InsertRowLeftOutlined, UsergroupAddOutlined} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {useEffect, useState} from 'react';

const {Content, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {key, icon, children, label};
}
const items = [
    getItem('Отели', 'hotels', < InsertRowLeftOutlined />),
    getItem('Партнеры', 'owners', < UsergroupAddOutlined />)
];
const AdminPanel = () => {

    const [collapsed,
        setCollapsed] = useState(false);
    const {token: {
            colorBgContainer
        }} = theme.useToken();
    const [selectedKey,
        setSelectedKey] = useState(['1'])

    const handleMenuSelect = ({selectedKeys}) => {
        setSelectedKey(selectedKeys);
    };
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
                        style={{paddingTop:"40px"}}/>
                </Sider>
                <Layout>
                    <Content
                        style={{
                        margin: '45px 16px'
                    }}>

                        {selectedKey == 'hotels'
                            ? <HotelForm/>
                            : selectedKey == "owners"
                                ? <OwnersForm/>
                                : null}

                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};
export default AdminPanel;