const ajax = new XMLHttpRequest();
const MOVIE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20210101'
const movieList = document.querySelector('.movie__list');

fetch('./moviePoster.json').then(response => {
    console.log(response.json());
})
let div = document.createElement('div');
// console.log(response);

// div.appendChild(response.)

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

function makeList(url) {

    const movieInfo = getData(url); // 데이터 출력 값
    const movieList = movieInfo.boxOfficeResult.weeklyBoxOfficeList;

    console.log(movieList);

    for(let i = 0; i < movieList.lenght; i++) {

        let template = `
            <li>
                
            </li>
        `

    }

}






makeList(MOVIE_URL);

// console.log(getData(MOVIE_URL));

