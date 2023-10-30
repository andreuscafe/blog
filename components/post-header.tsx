import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
};

const PostHeader = ({ title, coverImage }: Props) => {
  return (
    <>
      <div
        className="min-h-[100dvh] md:min-h-[75vh] bg-cover bg-center bg-blend-multiply flex items-center justify-center p-8 md:p-32"
        style={{
          background: `url(${coverImage}) no-repeat center center fixed`
        }}
      >
        <PostTitle>{title}</PostTitle>
      </div>
    </>
  );
};

export default PostHeader;
