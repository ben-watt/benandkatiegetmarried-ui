import css from './keyPeople-styles.css';

let data = {
    info: [
            {   
                title: 'The Parents',
                people: [
                    
                        {
                            name: 'Eric Vallance',
                            title: 'The Parents',
                            col: css.one,
                            picClass: css.ericPic,
                            nameClass: css.ericRow,
                        },
                        {
                            name: 'Janine Watt',
                            title: 'The Parents',
                            
                            col: css.two,
                            picClass: css.janinePic,
                            nameClass: css.janineRow,
                        },
                        {
                            name: 'David Watt',
                            title: 'The Parents',            
                            col: css.three,
                            picClass: css.davidPic,
                            nameClass: css.davidRow,
                        },
                ]
            },
            {
                title: 'The Bridesmads',
                people: [
                    {
                        name: 'Sophie Gillies',
                        col: css.one,
                        picClass: css.sopPic,
                        nameClass: css.sopRow
                    },
                    {
                        name: 'Catriona Middleton',
                        col: css.two,
                        picClass: css.catrionaPic,
                        nameClass: css.catrionaRow
                    },
                    {
                        name: 'Trishna Mistry',
                        col: css.three,
                        picClass: css.trishPic,
                        nameClass: css.trishRow,
                    },
                ]
            },
            {   
                title: 'The Best Men',
                people: [
                    
                        {
                            name: 'Sam Watt',
                            col: css.four,
                            picClass: css.samPic,
                            nameClass: css.samRow,
                        },
                        {
                            name: 'Scott Halls',          
                            col: css.five,
                            picClass: css.scottPic,
                            nameClass: css.scottRow,
                        },
                ]
            },]
};

export default data;