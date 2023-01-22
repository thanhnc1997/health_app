import {
	create_element,
	change_currency,
	render_icon
} from '../helper.js';

async function category_page(params = {}) {
	let template = create_element('section'),
			template_inner = create_element('div');
	template.classList.add('product-page');
	template_inner.classList.add('container');
	
	const products = [
		{
			id: 1,
			name: '05.21.Morning',
			image: '/assets/images/1.png'
		},
		{
			id: 2,
			name: '05.21.Lunch',
			image: '/assets/images/2.png'
		},
		{
			id: 3,
			name: '05.21.Dinner',
			image: '/assets/images/3.png'
		},
		{
			id: 4,
			name: '05.21.Snack',
			image: '/assets/images/4.png'
		},
		{
			id: 5,
			name: '05.21.Lunch',
			image: '/assets/images/5.png'
		},
		{
			id: 6,
			name: '05.21.Dinner',
			image: '/assets/images/6.png'
		},
		{
			id: 7,
			name: '05.21.Snack',
			image: '/assets/images/7.png'
		},
	]
	
	async function nav_tab() {
		let div = create_element('section');
		div.innerHTML = `
		<div class="grid-row four-column-md filter">
			<div>
				<p>RECOMMENDED<br>COLUMN</p>
				<span>オススメ</span>
			</div>
			<div>
				<p>RECOMMENDED<br>DIET</p>
				<span>ダイエット</span>
			</div>
			<div>
				<p>RECOMMENDED<br>BEAUTY</p>
				<span>美容</span>
			</div>
			<div>
				<p>RECOMMENDED<br>HEALTH</p>
				<span>健康</span>
			</div>
		</div>
		<div class="tab-content grid-row four-column-md mb-30">
			
		</div>
		<a href="#" class="btn">記録をもっと見る</a>
		`;
		
		return div;
	}
	
	async function load_product(data) {
		data.map(product => {
			let item = create_element('div');
			item.classList.add('product-item');
			item.innerHTML = `
			<div class="image" style="background-image: url(${product.image})">
				<span class="name">${product.name}</span>
			</div>
			`;
			
			template.querySelector('.tab-content').appendChild(item);
		});
	}
	
	template.appendChild(template_inner);
	template_inner.appendChild(await nav_tab());
	await load_product(products);
	return template;
}

export default category_page;