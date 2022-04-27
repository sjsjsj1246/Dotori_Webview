import { FC } from 'react';

type GalleryItemProps = {
  image: string;
};

const GalleryItem: FC<GalleryItemProps> = ({ image }) => (
  <div
    style={{
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>
);

export default GalleryItem;
