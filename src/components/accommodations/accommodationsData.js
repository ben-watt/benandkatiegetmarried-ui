import css from './accommodations-styles.css';

let data = {
    accommodations:
    [
        {
            name: 'The venue',
            distance:  "0 miles",
            link: 'http://www.marriott.com/hotels/travel/mangs-worsley-park-marriott-hotel-and-country-club/',
            class: css.accom0,
            image: css.image0,
        },
        {
            name: 'Hotel Novotel',
            distance:  '0.5 miles',
            link: 'http://www.novotel.com/gb/hotel-0907-novotel-manchester-west/index.shtml',
            class: css.accom1,
            image: css.image1,
            
        },
        {
            name: 'Premier Inn',
            distance:  '4 miles',
            link: 'http://www.premierinn.com/gb/en/hotels/england/greater-manchester/manchester/manchester-trafford-centre-north.html?ARRdd=10&ARRmm=09&ARRyyyy=2017&NIGHTS=1&ROOMS=1&ADULT1=1&CHILD1=0&COT1=0&INTTYP1=DB&SID=4',
            class: css.accom2,
            image: css.image2,
            
        },
        {
            name: 'Travelodge',
            distance:  '4.4 miles',
            link: 'https://www.travelodge.co.uk/hotels/328/Manchester-Trafford-Park-hotel',
            class: css.accom3,
            image: css.image3,
            
        },
    ]

};

export default data;