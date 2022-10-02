import { Box, Text } from '@chakra-ui/react';
import { Editor } from 'draft-js';

export interface DescriptionUser {
  _id: string;
  text: string;
}

interface TextareaProps {
  // eslint-disable-next-line
  editorState?: any;
  // eslint-disable-next-line
  setEditorState?: any;
}

export const Textarea: React.FC<TextareaProps> = ({
  editorState,
  setEditorState,
}) => {
  return (
    <>
      <Text fontSize="14px" color="#333" mb="5px">
        Descripcion
      </Text>
      <Box
        css={{
          span: {
            display: 'block',
            backgroundColor: '#f1f1f1',
          },
        }}
        transformOrigin="bottom"
        border="1px solid #bebebe"
        boxShadow="5px 5px 8px 0px rgba(0,0,0,0.08)"
        h="26rem"
        p="10px"
        overflowY="auto"
        className="textarea__description"
      >
        {editorState && (
          <Editor editorState={editorState} onChange={setEditorState} />
        )}
      </Box>
    </>
  );
};

export default Textarea;
