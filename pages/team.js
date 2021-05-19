
//for the team page for fetching the videos
const getData = async () => {
  const response = await fetch("https://www.scorebat.com/video-api/v1/");
  const data = await response.json();
    console.log(data); 

  return data;
};


const createOption = (data) => {
    let array = [];
    data.forEach((element) => {
      element.title;
        console.log(element.title)
      array.push(element.title);
  
      let selected = document.querySelector("#video");
  
      let option = document.createElement("option");
      option.value = element.title;
      option.innerHTML = element.title;
      selected.appendChild(option);
    });
    return array;
  };
  



const setEventListener = (arr) => {
  const dropDown = document
    .querySelector("#video")
    .addEventListener("change", (event) => {

      const currentVideo = event.target.value;
    
      const filterVedio = arr.filter((item) => {
       
        return item.title === currentVideo;
      });
      const iframe = document.querySelector("#iframe");

     /*  iframe.innerHTML = filterVedio[0].embed */
     console.log(filterVedio[0].videos);

     const videos = filterVedio[0].videos;

      videos.forEach(
          (video) => (iframe.innerHTML = filterVedio[0].videos[0].embed)
      )

      console.log(filterVedio[0].videos[0].embed);

    });
    
};


const controller = async () => {
  const video = await getData();
  console.log(video);

  createOption(video);
  setEventListener(video);
};

controller();
