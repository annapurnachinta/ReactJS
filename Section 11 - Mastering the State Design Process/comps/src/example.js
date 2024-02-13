// App.js
// You shouldn't need to change anything in this file

import React from 'react';
import { ImageList } from './ImageList';

const images = [
  {id: 'a', name: 'Leaf', src: 'https://picsum.photos/seed/abd/200/300' },
  {id: 'b', name: 'House', src: 'https://picsum.photos/seed/gqk/200/300' },
  {id: 'c', name: 'Tree', src: 'https://picsum.photos/seed/ias/200/300' },
];

function App() {
    return <ImageList images={images} />
}

export default App;

// ImageList.js
import React from 'react';
    // Udemy's code editor is a little weird... 
    // We do *not* need an 'import {useState}' line
    
    function ImageList({ images }) {
      const [selectedName, setSelectedName] = useState('');
     
      const handleClick = (name) => {
        setSelectedName(name);
      };
    
      const renderedImages = images.map((image, index) => {
        // The editor might say there is a syntax error with the next line.  
        // There is no error!
        return (
          <img key={image.id} src={image.src} onClick={()=> handleClick(image.name) } />
        );
      });
    
      return (
        <div>
          <h1>Image name: {selectedName}</h1>
          <div>
            {renderedImages}
          </div>
        </div>
      );
    }
    
    const useState = React.useState;
    // Don't change the export
    export { ImageList };