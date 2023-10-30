import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="mr-5 md:w-[360px] lg:w-[480px] flex-shrink-0 mb-2 md:mb-0">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div>
          <h3 className="text-2xl mb-1 leading-snug">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-base mb-2 opacity-40">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-md lg:text-lg leading-relaxed mb-4 max-w-2xl">
            {excerpt}
          </p>
        </div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
};

export default PostPreview;
