import React from "react";
import { Image, SwipeCell, Button, Toast } from "react-vant";

import { add, remove, selectBooks } from "@/store/shelfSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Shelf() {
  const dispatch = useDispatch();
  const shelfBooks = useSelector(selectBooks);
  const navigate = useNavigate();
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}
