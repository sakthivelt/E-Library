import React, { useState, useEffect } from "react";
import "./SearchBook.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import BookItems from "../BookItems/BookItems";
import axios from "axios";
import GlassmorphismLoaging from "../../Lottie/GlassmorphismLoaging";

function SearchBook() {
  const [searchValue, setsearchValue] = useState("");
  const [result, setresult] = useState([]);
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);
  const [loading,setLoading]=useState(false)

  const bookimage =
    "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg";
  const [imagevalue, setimage] = useState(
    "https://shadycharacters.co.uk/wp/wp-content/uploads/2016/12/Book_IMG_1754-1-e1481474081467.jpg"
  );

  function inputvalue(e) {
    setsearchValue(e.target.value);
  }

  const submitform = () => {
    setLoading(true)
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchValue +
          "&key=" +
          apiKey +
          "&maxResults=39"
      )
      .then((data) => {
        setLoading(false)
        setresult(data.data.items);
        console.log(data.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="searchBook">
      <div className="overlayer"></div>
      <div className="searchBook__top">
        <div className="search__input">
          <div className="search__Icon">
            <SearchIcon />
          </div>
          <input placeholder="Search Book" onChange={inputvalue} />
          <IconButton onClick={submitform}>
            <SendIcon style={{ color: "white", fontSize: "1.5rem" }} />
          </IconButton>
        </div>
      </div>
      <div className="searchBook__bottom">
        <>
          {!result ? (
            <h1 style={{ color: "white", textAlign: "center" }}>
              Book Not Found
            </h1>
          ) : (
            <>
              {loading?<GlassmorphismLoaging/>:result.map((book, index) => (
                <div id={index} key={index}>
                  <BookItems
                    bookName={book?.volumeInfo.readingModes.title}
                    image={book?.volumeInfo.imageLinks?.thumbnail}
                    author={book?.volumeInfo.authors}
                    link1={book?.volumeInfo.previewLink}
                    link2={book?.saleInfo.buyLink}
                    link3={book?.volumeInfo.infoLink}
                  />
                  {/* {book?.accessInfo?.pdf?.isAvailable&&<a href={book?.accessInfo?.pdf?.acsTokenLink}>download</a>} */}
                </div>
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default SearchBook;
