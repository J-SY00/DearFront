import { Fragment } from "react";
import { useState } from "react";

function ListGroup() {
  let items = [
    "colorPop   --------o",
    "객체 변경   -------o",
    "이모지 추가  -------o",
    "블러       ------o",
    "이미지 객체 인식  -----o",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const arr = useState(-1);
  arr[0];

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}

      <h1>Dear Massege</h1>
      <h1>단 하나의 명령만으로 이미지 수정</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
