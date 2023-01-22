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
		</nav>
	</div>
	`;
	/*
	let overlay = create_element('div');
	overlay.classList.add('overlay');
	div.querySelector('.mobile-nav-trigger').addEventListener('click', () => {
		div.querySelector('.main-nav').style.display = 'block';
		div.querySelector('.main-nav').classList.add('slideInLeft');
		div.appendChild(overlay);
		document.body.classList.add('overflow-hidden');
	});
	function hide_mobile_nav() {
		div.querySelector('.main-nav').classList.remove('slideInLeft');
		div.querySelector('.main-nav').classList.add('slideOutLeft');
		document.body.classList.remove('overflow-hidden');
		setTimeout(() => {
			div.querySelector('.main-nav').classList.remove('slideOutLeft');
			div.querySelector('.main-nav').style.display = 'none';
			overlay.remove();
		}, 220);
	}

	div.querySelector('.main-nav button').addEventListener('click', () => {
		hide_mobile_nav();
	});
	if (window.innerWidth < 768) {
		div.querySelectorAll('.main-nav span').forEach(item => {
			item.addEventListener('click', () => {
				hide_mobile_nav();
			})
		});
	}
	*/
	return div;
}

export default page_header