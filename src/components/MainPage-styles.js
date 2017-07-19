const styles = {
    container: {
        marginBottom: '-18px',
        display: 'grid',
        gridTemplateColumns: '1fr '.repeat(12),
        backgroundColor: '#e0f2f1',
        gridGap: '4px'
    },
    onShade: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.30,
        display: 'none',
    },
    nav: {
        position: 'fixed',           
        display: 'none',
        backgroundColor: 'white',
        width: '280px',
        minHeight: '100%',
        boxShadow: '0px 0px 20px #000000'
    },
    header: {
        backgroundColor: '#e0f2f1',
        gridColumn: '1 / 13',
        height: '550px'
    },
    section: {
        backgroundColor: 'purple',
        gridColumn: '1 / 13',
        minHeight: '400px'
    },
    footer: {
        backgroundColor: 'blue',
        gridColumn: '1 / 13',
        height: '400px'
    }
}

export default styles;