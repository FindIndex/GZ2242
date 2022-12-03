import React, { useState } from "react";
import { Image, SwipeCell, Button, Toast } from "react-vant";

import {
  add,
  remove,
  selectBooks,
  selectShelfBooksCount,
  selectBooksByKeyword,
} from "@/store/shelfSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Shelf() {
  const dispatch = useDispatch();
  const shelfBooks = useSelector(selectBooks);
  const [text, setText] = useState("");
  
  const count = useSelector(selectShelfBooksCount);
  const booksForKeyword = useSelector((state) =>
    selectBooksByKeyword(state, text)
  );
  
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <ul>
        <h3>count {count}</h3>
        {shelfBooks.map((o) => {
          return (
            <li
              key={o.id}
              onClick={() => navigate(`/detail/${o.id}`)}
            >
              <SwipeCell
                // onOpen={() => Toast.info("打开")}
                // onClose={() => Toast.info("关闭")}
                rightAction={
                  <Button
                    style={{ height: "100%" }}
                    square
                    type="danger"
                    onClick={() => dispatch(remove(o.id))}
                  >
                    删除
                  </Button>
                }
                stopPropagation={true}
              >
                <h3>{o.title}</h3>
                <Image
                  width="690rem"
                  height="340rem"
                  src={o.horizontal_cover}
                />
              </SwipeCell>
            </li>
          );
        })}

        <hr />

        <input type="text" value={text} onChange={changeHandler} />
        {booksForKeyword.map((o) => (
          <p>{o.title}</p>
        ))}
      </ul>
    </div>
  );
}
