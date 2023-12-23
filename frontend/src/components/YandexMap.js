import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function ContactMap() {
  return (
    <div>
      <YMaps>
        <Map
          defaultState={{ center: [59.914674, 30.289574], zoom: 13 }}
          width={'100%'}
          height={'400px'}
        >
            
          <Placemark
            geometry={[59.914674, 30.289574]}
            properties={{
              hintContent: 'UberShop',
              balloonContent: 'Супер маркетинг!',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default ContactMap;
