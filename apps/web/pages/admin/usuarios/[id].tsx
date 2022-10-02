import React, { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Box, Button } from '@chakra-ui/react';
import { Input, Textarea } from '@pilot/admin-ui';
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import Layout from '../../../components/admin/Layout';
import UploadImage from '../../../components/UploadImage';
import { getUser, updateUser } from '../../../utils/users';
import { UserProps } from '../../../interfaces/user';
import { useImage } from '../../../hooks/useImage';

const UsuarioAdmin: NextPage = () => {
  const router = useRouter();

  /* User initial state */
  const [user, setUser] = useState<UserProps | null>(null);

  /* Editor initial values */
  // eslint-disable-next-line
  const [editorState, setEditorState] = React.useState<any>();
  const [htmlMarkup, setHtmlMarkup] = useState<string>('');

  const { data, isSuccess } = useQuery(['user', router?.query.id], () =>
    getUser(router?.query.id as string)
  );

  /* Image initial values */
  const [imageExist, setImageExist] = useState(user?.avatar);
  const [image, setImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<string | Blob>(null);
  const inputImgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user?.description) {
      const blocksFromHTML = convertFromHTML(user?.description);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      setEditorState(EditorState.createWithContent(state));
    }
  }, [user?.description]);

  /* Al detectar cambios en el EditorState actualizar el Markup de HTML */
  useEffect(() => {
    if (editorState) {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      const markup = draftToHtml(rawContentState);
      setHtmlMarkup(markup);
    }
  }, [editorState]);

  /* Al obtener la data del usuario se actualiza en el state */
  useEffect(() => {
    setUser(data?.data);
    setHtmlMarkup(data?.data.description);
  }, [isSuccess, data]);

  const handleSubmitInfo = async () => {
    let data = { ...user, description: htmlMarkup };

    if (fileImage) {
      // eslint-disable-next-line
      const responseImage = await useImage(fileImage);
      data = { ...user, description: htmlMarkup, avatar: responseImage };
    }

    const response = await updateUser(user._id, data);

    if (response.success) {
      console.log('Actualizado correctamente');
      return;
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
        <Textarea editorState={editorState} setEditorState={setEditorState} />
      </Box>

      <Box mt="32px">
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
      </Box>
    </Layout>
  );
};

export default UsuarioAdmin;
