const characters = [
  {
    name: "히나타 쇼요",
    image: "static/images/hinata.png",
    position: "미들 블로커(MB)",
  },
  {
    name: "카게야마 토비오",
    image: "static/images/Tobio.jpg",
    position: "세터(S)",
  },
];

document.getElementById("searchButton").addEventListener("click", function () {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(input)
  );

  const characterList = document.getElementById("characterList");
  characterList.innerHTML = "";

  if (filteredCharacters.length === 0) {
    characterList.innerHTML = "<p>캐릭터를 찾을 수 없습니다.</p>";
  } else {
    filteredCharacters.forEach((character) => {
      const characterDiv = document.createElement("div");
      characterDiv.className = "character";
      characterDiv.innerHTML = `<h3>${character.name}</h3><img src="${character.image}" alt="${character.name}"><p>포지션:${character.position}</p>`;
      characterList.appendChild(characterDiv);
    });
  }
});
