import React from 'react';
import Link from 'next/link';
import {Dropdown, Space} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import s from "./ProfileDropdown.module.scss"
const ProfileDropdown = ({logout}) => {
    const items = [
        {
            label: <Link href="/profile">Мой профиль</Link>,
            key: '0'
        }, {
            type: 'divider'
        }, {
            onClick: logout,
            label: 'Выйти',
            key: '1'
        }
    ];
    return (
        <Dropdown
            className={s.dropdown}
            menu={{
            items
        }}
            trigger={['hover']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <UserOutlined
                        style={{
                        fontSize: "30px",
                        color: "#3f6ca7"
                    }}/>
                </Space>
            </a>
        </Dropdown>
    );
};

export default ProfileDropdown;