const ajax = new XMLHttpRequest();
const MOVIE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20210101'
const _movieList = document.querySelector('.movie__list');


/*
    데이터 받아오기
*/
function getData(url) {

    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response)
    
}



/* 
    받아온 데이터 출력 및 화면 생성
*/

window.addEventListener('load', function() {

    
    makeList();



})
function makeList() {

    const movieInfo = getData(MOVIE_URL); // 데이터 출력 값
    const movieList = movieInfo.boxOfficeResult.weeklyBoxOfficeList;

    console.log(movieList);

    for(let i = 0; i < movieList.length; i++) {

        let template = `<li>
            <div class="img_box">
                <img src={{__img__}} alt="영화이미지"/>
            </div>
        </li>`;

        template = template.replace("{{__img__}}", `./resource/img/movie_image_${i+1}.jpeg`);
        _movieList.innerHTML += template;

    }


}






