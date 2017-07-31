import imageUrl from './images/img7.png';

const headerStyles = {
    header: {
            backgroundImage: ' url('+imageUrl+')',
            backgroundSize: 'cover',
            backgroundPosition: '60% 50%',
            gridColumn: '1 / 13',   
           
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '16px',
            position: 'relative',
        },

    title: {
        fontFamily: 'Great Vibes, cursive',
        fontSize: '3em',
        color: 'black ', 
        opacity: '0.7',
        marginBottom: '0px',
        marginTop: '90px',

           '@media (min-width: 768px)': {
            fontSize: '4em',
        },
    },

    date: {
        fontFamily: 'Zilla Slab, serif',
        fontSize: '1.5em',
        color: 'black ', 
        opacity: '0.7',
         margin: '0px',

        '@media (min-width: 768px)': {
            fontSize: '2.4em',
        },
    },

    enterDiv: {
        fontFamily: 'Zilla Slab, serif',
        fontSize: '1em',
        color: 'black ', 
        opacity: '0.7',
        position: 'absolute',
        bottom: '40px',
        textAlign: 'center',
        left: '0',
        right: '0',

        '@media (min-width: 768px)': {
            fontSize: '1.5em',
        },

       ':hover': {
           cursor: 'pointer',
       }, 
    },

    enter: {
        marginBottom: '0px',
    },
}
export default headerStyles;