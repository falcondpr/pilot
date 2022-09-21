import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Box, Button } from '@chakra-ui/react';
import { Input, Textarea } from '@pilot/admin-ui';

import Layout from '../../../components/admin/Layout';
import UploadImage from '../../../components/UploadImage';
import { getUser, updateUser } from '../../../utils/users';
import { UserProps } from '../../../interfaces/user';
import { useImage } from '../../../hooks/useImage';

const UsuarioAdmin: NextPage = () => {
  const router = useRouter();

  const [user, setUser] = useState<UserProps | null>(null);

  const { data, isSuccess } = useQuery(['user', router?.query.id], () =>
    getUser(router?.query.id as string)
  );

  const [imageExist, setImageExist] = useState(user?.avatar);
  const [image, setImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<string | Blob>(null);
  const inputImgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUser(data?.data);
  }, [isSuccess, data]);

  const handleSubmitInfo = async () => {
    // eslint-disable-next-line
    const responseImage = await useImage(fileImage);
    console.log(responseImage);

    const data = { ...user, avatar: responseImage };
    console.log(data);

    const response = await updateUser(user._id, data);

    if (response.success) {
      console.log('Actualizado correctamente');
    }

    console.log('Hubo un problema al actualizar');
  };

  return (
    <Layout>
      <Box mb="20px">
        <Input
          label="Nombre"
          value={user?.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </Box>

      <Box>
        <Input
          label="Email"
          value={user?.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </Box>

      <Box w="50%" mt="20px">
        {user?.description && (
          <Textarea array={user.description} label="Description" />
        )}
      </Box>

      <UploadImage
        imageExist={imageExist}
        setImageExist={setImageExist}
        image={image}
        setImage={setImage}
        fileImage={fileImage}
        setFileImage={setFileImage}
        inputImgRef={inputImgRef}
        user={user}
      />

      <Button mt="20px" onClick={handleSubmitInfo}>
        Send info
      </Button>
    </Layout>
  );
};

export default UsuarioAdmin;
