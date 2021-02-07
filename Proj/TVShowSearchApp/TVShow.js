const display = document.querySelector("#display");
const form = document.querySelector("#searchForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const searchContent = form.elements.query.value;
        const url = `http://api.tvmaze.com/search/shows?q=${searchContent}`;
        let res = await axios.get(url);
        // const config = { params: { q: searchContent } };
        // let res = await axios.get("http://api.tvmaze.com/search/shows", config);
        let imgSrc = res.data[0].show.image.medium;
        let newImg = document.createElement('img');
        newImg.src = imgSrc;
        newImg.style.display = "inline-block";
        newImg.style.marginRight = "5px";
        display.appendChild(newImg);
    } catch (err) {
        console.log("Error: ", err);
    }
});
