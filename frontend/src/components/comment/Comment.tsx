import { DeleteIcon } from "@chakra-ui/icons";
import { Badge, Stack } from "@chakra-ui/layout";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { ReplySection } from "components/comment/ReplySection";
import { UpvoteSection } from "components/comment/UpvoteSection";
import { useAddCommentMutation, useDeleteCommentMutation } from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { formatDate } from "utils/formatDate";

interface AuthorProp {
  name: string;
  pictureUrl: string;
}

interface CommentProps {
  courseInitials: string;
  id: string;
  score: number;
  content: string;
  isUserAuthor: boolean;
  createdAt: string;
  author: AuthorProp;
  subComments: [CommentProps] | [] | any;
  userVote: number;
  nestingLevel: number;
  handleUpvoteAuthenticationError: any;
}

export const Comment: React.FC<CommentProps> = ({
  courseInitials,
  id,
  score,
  content,
  createdAt,
  isUserAuthor,
  author,
  subComments,
  userVote,
  nestingLevel,
  handleUpvoteAuthenticationError,
}) => {
  const [replying, setReplying] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [authenticationError, setAuthenticationError] = useState(false);

  useEffect(() => {
    setInputError(false);
    setAuthenticationError(false);
  }, [replying]);

  const [, deleteComment] = useDeleteCommentMutation();

  const [cookies, _] = useCookies(["user-vote"]);

  const router = useRouter();
  const [, addComment] = useAddCommentMutation();

  const handleDeleteComment = () => {
    deleteComment({ commentId: id });
    router.reload();
  };

  const handleReplyClick = () => {
    setReplying(true);
  };

  const handleCancelClick = () => {
    setReplying(false);
  };

  const handleFormSubmit = async (event: any, content: string) => {
    event.preventDefault();
    const { error } = await addComment({
      courseInitials: courseInitials,
      content: content,
      parentId: id,
    });
    if (error) {
      switch (error.graphQLErrors[0].extensions!.code) {
        case "BAD_USER_INPUT":
          setInputError(true);
          break;

        case "UNAUTHENTICATED":
          setAuthenticationError(true);
          break;

        default:
          break;
      }

      return;
    }

    router.reload();
  };

  const calculateNestingMargin = () => {
    if (nestingLevel < 6) {
      return ["0px", "25px !important"];
    }
    return "0px";
  };

  return (
    <Stack width="100%" direction="column">
      <Flex>
        <Avatar src={author.pictureUrl} />
        <Box marginLeft="3">
          <Flex>
            <Text fontWeight="semibold">{author.name}</Text>
            {isUserAuthor && <DeleteIcon marginLeft="6px" _hover={{ cursor: "pointer" }} onClick={handleDeleteComment} marginTop="4px" />}
          </Flex>
          <Badge backgroundColor="main" paddingY="2px" paddingX="5px">
            {formatDate(new Date(parseInt(createdAt)))}
          </Badge>
        </Box>
        <Box marginLeft="auto">
          <UpvoteSection commentId={id} score={score} userVote={userVote} handleAuthenticationError={handleUpvoteAuthenticationError} />
        </Box>
      </Flex>
      <Text fontSize="sm" marginTop="8px" paddingLeft="8px">
        {content}
      </Text>
      <Box marginBottom="12px">
        {!replying && (
          <Button
            backgroundColor="white"
            border="2px"
            _hover={{ backgroundColor: "main" }}
            borderColor="main"
            onClick={handleReplyClick}
            width="125px"
            float="right"
          >
            Répondre
          </Button>
        )}
        {replying && (
          <ReplySection
            authenticationError={authenticationError}
            inputError={inputError}
            onCancel={handleCancelClick}
            onFormSubmit={handleFormSubmit}
          />
        )}
      </Box>
      <Stack direction="column">
        {subComments.length != 0 &&
          subComments.map((subComment: CommentProps) => {
            const cookieName = `user-vote-${subComment.id}`;
            return (
              <Stack
                key={subComment.id}
                marginLeft={calculateNestingMargin()}
                direction="row"
                border="1px"
                borderRadius={12}
                padding="1rem"
              >
                <Comment
                  courseInitials={courseInitials}
                  id={subComment.id}
                  score={subComment.score}
                  content={subComment.content}
                  isUserAuthor={subComment.isUserAuthor}
                  createdAt={subComment.createdAt}
                  author={subComment.author}
                  subComments={subComment.subComments}
                  userVote={subComment.userVote}
                  nestingLevel={nestingLevel + 1}
                  handleUpvoteAuthenticationError={handleUpvoteAuthenticationError}
                />
              </Stack>
            );
          })}
      </Stack>
    </Stack>
  );
};
