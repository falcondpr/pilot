import React, { useEffect } from 'react';
import { Box, Button, Image, ImageProps, Input } from '@chakra-ui/react';

import { FileType, UserProps } from '../interfaces/user';

interface UploadImage extends ImageProps {
  user: UserProps;
  imageExist: string;
  setImageExist: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
  fileImage: FileType | string | Blob;
  setFileImage: (value: string | Blob) => void;
  inputImgRef: any;
  cloudinary_string?: string;
}

const UploadImage: React.FC<UploadImage> = ({
  user,
  setImageExist,
  image,
  setImage,
  setFileImage,
  inputImgRef,
}) => {
  useEffect(() => {
    setImage(null);
    setFileImage(null);
    setImageExist(user?.avatar);
    // eslint-disable-next-line
  }, []);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    const file = target.files[0];
    const image = URL.createObjectURL(file);
    setImage(image);
    setImageExist(image);
    setFileImage(file);
  };

  return (
    <Box>
      <Input
        display="none"
        ref={inputImgRef}
        type="file"
        onChange={handleChangeImage}
      />

      <Image
        src={image ? image : user?.avatar}
        alt=""
        w="200px"
        h="200px"
        objectFit="cover"
      />

      <Button
        mt="20px"
        type="button"
        w="auto"
        h="50px"
        p="0 32px"
        color="white"
        bgColor="#333"
        rounded="3px"
        onClick={() => inputImgRef.current.click()}
        _hover={{ bgColor: '#111' }}
        _focus={{ bgColor: '#333' }}
        boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
      >
        {user?.avatar ? 'Cambiar imagen' : 'Agregar imagen'}
      </Button>
    </Box>
  );
};

export default UploadImage;
