const ajax = new XMLHttpRequest();
const MOVIE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20210101'
const _movieList = document.querySelector('.movie__list');
const _prevBtn = document.querySelector('.btn.btn_prev');
const _nextBtn = document.querySelector('.btn.btn_next');


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
function makeList() {

    const movieInfo = getData(MOVIE_URL); // 데이터 출력 값
    const movieList = movieInfo.boxOfficeResult.weeklyBoxOfficeList;

    console.log(movieList);

    for(let i = 0; i < movieList.length; i++) {

        let template = `
        <li>
            <div class="img_box">
                <img src={{__img__}} alt="영화이미지"/>
            </div>
            <div class="desc_box">
                <div class="desc">
                    <dl>
                        <dt>제목: ${movieList[i].movieNm}</dt>
                        <dd>
                            개봉일: ${movieList[i].openDt}
                        </dd>
                        <dd>
                            순위: ${movieList[i].rank}
                        </dd>
                        <dd>
                            누적관객수: ${movieList[i].audiAcc}
                        </dd>
                    </dl>
                </div>
            </div>
        </li>`;

        template = template.replace("{{__img__}}", `./resource/img/movie_image_${i+1}.jpeg`);
        _movieList.innerHTML += template;

    }

    setTotalWidth();
}

makeList();

function setTotalWidth() {

    const _list = _movieList.querySelectorAll('li');
    let totalW = 0;
    

    for(let i = 0; i < _list.length; i++) {
        totalW += (_list[i].offsetWidth + 40);
    }

    totalW = totalW + 250;

    _movieList.style.width = totalW + 'px';

}



/*
    첫번째 목록 활성화
*/
function activatedLi() {

    let _list = document.querySelectorAll('.movie__list > li');

    _movieList.firstElementChild.classList.add('active');

}

activatedLi();


/*
    다음 버튼 클릭
*/
function nextBtn() {
    
    let _this = this;
    let activeLi = document.querySelector('.movie__list li.active');

    // console.log(activeLi);
    activeLi.classList.remove('active');
    activeLi.remove();
    let _clone = activeLi.cloneNode(true);

    _movieList.appendChild(_clone);
    _movieList.firstElementChild.classList.add('active');

}

function prevBtn() {

    let _this = this;
    let activeLi = document.querySelector('.movie__list li.active');
    let _lastLi = document.querySelector('.movie__list li:last-child');

    // console.log(_lastLi);
    activeLi.classList.remove('active');
    let _clone = _lastLi.cloneNode(true);
    _lastLi.remove();

    _movieList.prepend(_clone);
    _movieList.firstElementChild.classList.add('active');

}



/*
    이전 버튼 클릭
*/









_prevBtn.addEventListener('click', prevBtn)
_nextBtn.addEventListener('click', nextBtn)


