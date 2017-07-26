const styles = {

    container: {
        display: 'grid',
        gridTemplateColumns: '1fr '.repeat(12),
        gridTemplateRows: '30vh 60vh 60vh 30vh',
        backgroundColor: '#f7f7f7',
        '@media (max-width: 600px)': {
            gridTemplateRows: '30vh 60vh 60vh 30vh',
        },
    },

    header: {
        backgroundColor: '#E0EAE8 ',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1.5em',
        gridColumn: '1 / 13',
    },

    section100: {
        backgroundColor: '#EDECE8',
        color: '#D4C4AF',
        fontWeight: 'bold',
        fontSize: '1.5em',
        gridColumn: '1 / 13',
        height: '100%',
    },

    section70: {
        backgroundColor: '#EDECE8 ',
        color: '#D4C4AF',
        fontWeight: 'bold',
        fontSize: '1.5em',
        gridColumn: '3 / 10',
        height: '70%',
        alignSelf: 'center',
    },

    footer: {
        backgroundColor: '#EEEEEE ',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1em',
        gridColumn: '1 / 13',
      
        '@media (max-width: 600px)': {
            gridTemplateRows: '25% auto 5%',
            fontSize: '1em',
        },

    },
    onShade: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.30,
        zIndex: '1',
        display: 'none',
    },
    
    nav: {
        position: 'fixed',
        backgroundColor: '#f7f7f7 ',
        width: '30%',
        minHeight: '100%',
        boxShadow: '0px 0px 20px #000000',
        zIndex: '1',
        display: 'none',
    },
}

export default styles;