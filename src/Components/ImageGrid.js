// import React from 'react';
// import useFireStore from "../hooks/useStorage";
//
// const ImageGrid = ({setSelectedImage}) => {
//
//     const {docs} = useFireStore('images');
//     console.log(docs);
//
//     return (
//         <div className="img-grid">
//             {docs && docs.map(doc => (
//                 <div
//                     className="img-wrap key={doc.id}"
//                     onClick={() => setSelectedImage(doc.url)}
//                 >
//                     <img src={doc.url} alt="uploaded pic"/>
//                 </div>
//             ))}
//
//         </div>
//     );
// };
//
// export default ImageGrid;

import React from 'react';
import useFirestore from '../hooks/useFireStore';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                     onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="uploaded pic"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
