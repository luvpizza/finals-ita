import {MAPGL_API_KEY} from '@/api/MAPGL_API_KEY';
import {load} from '@2gis/mapgl';
import React, {useEffect, useState} from 'react';
import {MapWrapper} from '../MapWrapper/MapWrapper';

const HotelMap = ({hotel, mapCenter, className}) => {

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: mapCenter,
                zoom: 14,
                key: MAPGL_API_KEY
            });

        
                const marker = new mapglAPI.Marker(map, {
                    coordinates: hotel.location.lon_lat,
                    label: {
                        color: "#FFF",
                        haloColor: "#6495ED",
                        haloRadius: 3,
                        text: hotel.title,
                        fontSize: 14
                    }
                });

        });
        return () => map && map.destroy();
    }, []);

    return (
        <div
            className={className}
            style={{
            width: '100%',
            height: '100%'
        }}>
            <MapWrapper/>
        </div>

    );
};

export default HotelMap;