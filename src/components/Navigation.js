function Navigation({
  currentPage,
  setCurrentPage,
  currentStateButton,
  setCurrenStateButton,
}) {
  const nextPage = () => {
    const newPageNumber = currentPage + 1;
    setCurrentPage(newPageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPageNumber = currentPage - 1;
      setCurrentPage(newPageNumber);
    }
  };

  const showFavourites = () => {
      
    // const currentText = document.getElementById("buttonShowFavourites").innerHTML;
    //   currentText === "Show All"
    //   ? (document.getElementById("buttonShowFavourites").innerHTML =
    //   "Show Favourites")
    //   : (document.getElementById("buttonShowFavourites").innerHTML =
    //   "Show All");
      
    currentStateButton === "ShowAll"
        ? (currentStateButton = "ShowFavourites")
        : (currentStateButton = "ShowAll");
    setCurrenStateButton(currentStateButton);
  };

  return (
    <div className="navigation">
      <div className="navigation__item">
        <button className="navigation__button" onClick={prevPage}>
          Prev Page
        </button>
      </div>
      <div className="navigation__item">
        <button
          className="navigation__button"
          id="buttonShowFavourites"
          onClick={showFavourites}
        >
          {/* Show Favourites */}
        {
        currentStateButton === "ShowFavourites"
          ? "Show All"
          : "Show Favourites"
        }
        </button>
      </div>
      <div className="navigation__item">
        <button className="navigation__button" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Navigation;
