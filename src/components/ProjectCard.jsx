import PropTypes from "prop-types";

const ProjectCard = ({ name, description, imageUrl }) => {
  return (
    <div className="relative p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ">
      <figure className="img-box rounded-lg mb-1">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="rounded-lg aspect-square"
        />
      </figure>
      <div className="flex-col items-center ">
        <div>
          <h3 className="title-1 mb-3">{name}</h3>
        </div>
        <div className="">
          <p className="text-sm lg:text-md">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
