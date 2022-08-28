import Image from 'next/image';
import React from 'react';

function ImageCover(props) {
    return (
        <div className="mt-10">
          <Image src="/event.jpeg" alt="" className='rounded-lg'
            fil='cover'
            width={600}
            height={300}
            />
        </div>
    );
}

export default ImageCover;