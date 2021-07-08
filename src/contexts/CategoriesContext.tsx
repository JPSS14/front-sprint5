import React from 'react';

// interface CategoriesItens {

//     categories: {
//         content:
//         [

//             {
//                 all: [{
//                     id: number;
//                     label: string;
//                     link: string;
//                 }]
//             },
//             {
//                 current: [{ id: number, link: string, name: string }]
//             }
//         ]
//     }
// }

interface CategoriesItens {

    categories: {
        all: [{
            id: number;
            label: string;
            link: string;
        }],
        current: [
            {
                id: number, 
                link: string, 
                name: string
            }
        ]
    }
}

// const CategoriesContext = React.createContext<CategoriesItens>({ categories: { content: [{ all: [{ id: 0, label: '', link: '' }] }, { current: [{ id: 0, link: '', name: '' }] }] } });

const CategoriesContext = React.createContext<CategoriesItens>({ categories: {all: [{ id: 0, label: '', link: '' }], current: [{id: 0, link: '', name: ''}] }});


export default CategoriesContext;