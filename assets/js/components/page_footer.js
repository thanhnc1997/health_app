import {
	create_element,
	render_icon
} from '../helper.js';

function page_footer() {
	let div = create_element('footer');
	div.classList.add('footer');
	div.innerHTML = `
	<div class="container text-center">
		<a href="#">会員登録</a>
		<a href="#">会員登録</a>
		<a href="#">会員登録</a>
		<a href="#">会員登録</a>
		<a href="#">会員登録</a>
		<a href="#">会員登録</a>
	</div>
	`;
	
	return div;
}

export default page_footer