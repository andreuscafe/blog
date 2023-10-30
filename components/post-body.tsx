import Author from "../interfaces/author";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  date: string;
  author: Author;
  excerpt: string;
};

const PostBody = ({ content, date, author, excerpt }: Props) => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-8 md:px-0 py-24">
      <div className="mb-8">
        <div className="block mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg opacity-40">
          <DateFormatter dateString={date} />
        </div>
        <p className="border-b border-neutral-900 pb-8">{excerpt}</p>
      </div>

      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
