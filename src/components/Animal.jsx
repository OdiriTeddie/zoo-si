const Animal = ({ animal, status, imageSources }) => {
  let imageSource = imageSources.regular;
  if (status === "Dead") {
    imageSource = imageSources.dead;
  }

  return (
    <div>
      <div>
        <img src={imageSource} alt={animal.species} className="animal-image" />
      </div>
      <p>{`Species: ${animal.species}`}</p>
      <p>{`Health: ${animal.getHealth()}%`}</p>
      {status && <p style={{ color: "red" }}>Status: {status}</p>}
    </div>
  );
};

export default Animal;
