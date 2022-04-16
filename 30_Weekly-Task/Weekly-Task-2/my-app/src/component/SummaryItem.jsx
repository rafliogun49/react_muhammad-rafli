const SummaryItem = ({data}) => {
  const loopingText = data.text.map((element, index) => {
    return <p key={index}>{element}</p>;
  });
  const loopingPicture = data.photos.map((element, index) => {
    return <img key={index} src={element} alt="foto" className="img-fluid rounded py-3" />;
  });
  return (
    <div className="summary-item pb-5">
      <h1>{data.title}</h1>
      {loopingText}
      <h2 className="py-2">Praktikum</h2>
      <button className="btn btn-dark">
        <a href={data.linkGithub} className="text-light" target="_blank" rel="noreferrer">
          Link Github
        </a>
      </button>
      <div className="text-start">{loopingPicture}</div>
    </div>
  );
};

export default SummaryItem;
