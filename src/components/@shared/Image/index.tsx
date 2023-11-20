type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
};

const Image = ({ src, alt, width = '100%', height = 'auto' }: ImageProps) => {
  return (
    <img src={src} width={width} height={height} alt={alt} draggable={false} />
  );
};

export default Image;
