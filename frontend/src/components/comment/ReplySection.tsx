import {
  Stack,
  Textarea,
  Flex,
  Text,
  Button,
  HTMLChakraProps,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface ReplySectionProps extends HTMLChakraProps<"div"> {
  inputError: boolean;
  authenticationError: boolean;
  onFormSubmit(event: any, newComment: string): void;
  onCancel?: any;
}

export const ReplySection: React.FC<ReplySectionProps> = ({
  inputError,
  authenticationError,
  onFormSubmit,
  onCancel,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentInputChange = (event: any) =>
    setNewComment(event.target.value);

  const handleFormSubmit = (event: any) => {
    onFormSubmit(event, newComment);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack>
        <Textarea
          value={newComment}
          backgroundColor="gray.100"
          placeholder="Ajouter un commentaire"
          maxWidth="70vw"
          marginLeft="1"
          onChange={handleCommentInputChange}
          isInvalid={inputError || authenticationError}
        ></Textarea>
        {inputError && (
          <Text marginLeft="1" color="red">
            Le contenu du commentaire ne peut pas être vide.
          </Text>
        )}
        {authenticationError && (
          <Text marginLeft="1" color="red">
            Vous devez être authentifié pour ajouter un commentaire.
          </Text>
        )}
        <Flex>
          {onCancel && (
            <Button
              backgroundColor="white"
              border="1px"
              borderColor="black"
              onClick={onCancel}
            >
              Annuler
            </Button>
          )}
          <Button
            type="submit"
            backgroundColor="main"
            maxWidth="8rem"
            marginLeft="1"
            _hover={{
              backgroundColor: "white",
              border: "1px",
              borderColor: "main",
            }}
          >
            Soumettre
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};