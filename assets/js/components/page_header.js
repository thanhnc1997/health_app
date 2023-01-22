import {
	create_element,
	render_icon
} from '../helper.js';

function page_header() {
	let div = create_element('header');
	div.classList.add('header');
	div.innerHTML = `
	<div class="container">
		<a href="/" class="logo">
			<img src="assets/images/logo.svg" alt="">
		</a>
		<nav class="main-nav">
			<a href="/my-record">
				${render_icon.memo({width: 26})}<span>自分の記録</span>
			</a>
			<a href="#">
				${render_icon.challenge({width: 26})}<span>チャレンジ</span>
			</a>
			<a href="/product">
				${render_icon.info({width: 26})}<span>お知らせ</span>
			</a>
			<button type="button">${render_icon.hamburger({width: 26})}</button>

			<ul class="sub-menu">
				<li><a href="#">自分の記録</a></li>
				<li><a href="#">体重グラフ</a></li>
				<li><a href="#">目標</a></li>
				<li><a href="#">選択中のコース</a></li>
				<li><a href="#">コラム一覧</a></li>
				<li><a href="#">設定</a></li>
			</ul>
		</nav>
	</div>
	`;
	div.querySelector('button').addEventListener('click', (e) => {
		div.querySelector('.sub-menu').classList.toggle('active');
		if (div.querySelector('.sub-menu').classList.contains('active')) {
			div.querySelector('button').innerHTML = render_icon.close({width: 26});
		}
		else {
			div.querySelector('button').innerHTML = render_icon.hamburger({width: 26});
		}
	});
	
	return div;
}

export default page_header