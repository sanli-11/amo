import PropTypes from "prop-types";
import SampleImage from "../assets/img/sample/L1020988.png";

const BlogPreview = ({ blogs }) => {
  return (
    <div className="-mt-2">
      {blogs.map((rev) => (
        <div key={rev.id} className="mt-12 grid grid-cols-2 gap-10">
          <img
            className="rounded-3xl"
            src={SampleImage}
            alt="Seiko Prospex SPB451 & SPB453"
            width={700}
            height={500}
          />
          <div className="mt-6 flex flex-col justify-center gap-8">
            <h1 className="text-2xl font-secondary">{rev.title}</h1>
            <p className="text-justify">{rev.description}</p>
            <a
              className="flex items-center justify-end gap-x-1.5 before:content-['—']"
              href={rev.site}
            >
              <h3 className="text-sm text-stone-400">{rev.source}</h3>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

BlogPreview.propTypes = {
  blogs: PropTypes.object,
};

export default BlogPreview;
