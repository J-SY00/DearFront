const HomeTutorial = () => {
  return (
    <div className="home-tutorial">
      {items.length === 0 && <p>No item found</p>}

      <div>
        <p>DEAR IMAGE</p>
      </div>
      <div>
        <p>|단 하나의 명령만으로 이미지 수정|</p>
      </div>

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

      <div class="user-text3">
        <p>DEAR IMAGE는 손쉽게 사진을 편집할 수 있는 기능을 제공합니다.</p>
      </div>
      <div class="user-text4">
        <p>
          우측 상단의 사용해보기 버튼을 눌러 바로 시작하거나 스크롤 하여
          사용방법을 알아보세요!
        </p>
      </div>

      <div id="tutorial-colorpop">
        <p>컬러팝</p>
        <p>
          사용자는 원하는 객체의 색을 흑백으로 바꿀 수 있습니다. 명령어를 쓸 때
          키워드 "colorpop"을 꼭 포함해 주세요.
        </p>
      </div>
      <div class="user-wrap3">
        <img class="user-wrap3" alt="" src="img/IMG_1.png" />
      </div>

      <div id="tutorial-replace">
        <p>객체 변경</p>
        <p>
          사용자는 교체를 원하는 객체에 대한 설명으로 손쉽게 교체할 수
          있습니다.\n 명령어를 쓸 때 키워드 “replace”를 꼭 포함해 주세요. .
        </p>
      </div>
      <div class="user-wrap4">
        <img class="user-wrap4" alt="" src="img/IMG_1.png" />
      </div>

      <div id="tutorial-emoji">
        <p>이모지 추가</p>
        <p>
          사용자는 가려지기를 원하는 위치와 추가되기를 원하는 이모지에 대한
          설명으로 해당 자리에 해당 이모지를 추가할 수 있습니다. 잊지마세요,
        </p>
        <p>
          위치와 이모지에 대한 자세한 설명이 더 정확한 결과를 만들어냅니다!
          명령어를 쓸 때 키워드 “emoji”를 꼭 포함해 주세요.
        </p>
      </div>
      <div class="user-wrap5">
        <img class="user-wrap5" alt="" src="img/IMG_1.png" />
      </div>

      <div id="tutorial-blur">
        <p>블러</p>
        <p>
          블러 사용자는 원하는 오브젝트를 제외한 배경에 블러효과를 줄 수
          있습니다. 명령어를 쓸 때 키워드 “blur”를 꼭 포함해 주세요.
        </p>
      </div>
      <div class="user-wrap6">
        <img class="user-wrap6" alt="" src="img/IMG_1.png" />
      </div>

      <div id="tutorial-?">
        <p>이미지 객체 인식</p>
        <p>
          사용자는 이미지 속 오브젝트의 갯수를 종류별로 알 수 있습니다. 명령어를
          쓸 때 마지막에 물음표를 꼭 추가해 주세요.
        </p>
      </div>
      <div class="user-wrap7">
        <img class="user-wrap7" alt="" src="img/IMG_1.png" />
      </div>
    </div>
  );
};

export default HomeTutorial;
