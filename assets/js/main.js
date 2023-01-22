import {
	create_element,
	scroll_to_top
} from './helper.js';
import page_header from './components/page_header.js';
import page_footer from './components/page_footer.js';

let app = create_element('div');
app.setAttribute('id', 'main');
app.appendChild(page_header());
document.body.appendChild(scroll_to_top());

const render = {
	async home() {
		let block = await import('./pages/home_page.js');
		app.appendChild(await block.default());
		document.querySelector('main').appendChild(app);
		app.appendChild(page_footer());
	},
	async product() {
		let block = await import('./pages/product_page.js');
		app.appendChild(await block.default());
		document.querySelector('main').appendChild(app);
		app.appendChild(page_footer());
	},
	async about() {
		let block = await import('./pages/about_page.js');
		app.appendChild(await block.default());
		document.querySelector('main').appendChild(app);
		app.appendChild(page_footer());
	}
}

if (location.pathname == '/') render.home();
if (location.pathname == '/product') render.product();
if (location.pathname == '/my-record') render.about();