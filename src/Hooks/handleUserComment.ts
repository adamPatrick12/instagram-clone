export const handleUserComment = (userComment: any) => {
  const commentLength = userComment.length;
  let comment = userComment;

  if (commentLength > 50) {
    comment = comment.slice(0, 50);
    comment = comment.concat("...");
  }
  return comment;
};
