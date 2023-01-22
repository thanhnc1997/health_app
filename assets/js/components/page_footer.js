import {
	create_element,
	render_icon
} from '../helper.js';

function page_footer() {
	let div = create_element('footer');
	div.classList.add('footer');
	div.innerHTML = `
	<div class="container">
		<a href="#">会員登録</a>
		<a href="#">運営会社</a>
		<a href="#">利用規約</a>
		<a href="#">個人情報の取扱について</a>
		<a href="#">特定商取引法に基づく表記</a>
		<a href="#">お問い合わせ</a>
	</div>
	`;
	
	return div;
}

export default page_footer