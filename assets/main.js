const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCSPwNgHHyAtHanVaGN2LLWA&part=snippet%2Cid&order=date&maxResults=12';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fae1e81ad0msha6fc7b5444bb3cdp1abc23jsn950ff43dd3c8',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options)
  const data = await response.json()
  return data
}


(async ()=>{
  try{
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
       <div class="group relative">
          <div class="w-full bg-gray-200 dark:bg-darkmodeligth rounded-md overflow-hidden  duration-700 lg:scale-75 sm:scale-90 aspect-w-16 aspect-h-9">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/${video.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <h3 class="text-xs text-gray-700 text-center ">${video.snippet.title}</h3>
        </div>
      `).slice(0,12).join('')}
    `;
    content.innerHTML = view;
  }catch (error){
    console.log(error);
  }
})();