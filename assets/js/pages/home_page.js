import {
	create_element,
	render_icon
} from '../helper.js';

async function home_page(params = {}) {
	let template = create_element('div');
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
	
	async function banner() {
		let div = create_element('section');
		div.classList.add('section-banner');
		div.innerHTML = `
		<div class="grid-row banner-row">
			<figure class="left" style="background-image: url(assets/images/main_photo.png)">
				<div><img src="assets/images/main_photo_text.png"></div>	
			</figure>
			<div class="right">
				<canvas id="home_chart"></canvas>
			</div>
		</div>
		`;
		
		return div;
	}
	
	async function nav_tab() {
		let div = create_element('section');
		div.innerHTML = `
		<div class="container">
			<nav class="nav-tab">
				<span class="nav-item">
					${render_icon.knife({width: 56})}
					<span>Morning</span>
				</span>
				<span class="nav-item">
					${render_icon.knife({width: 56})}
					<span>Lunch</span>
				</span>
				<span class="nav-item">
					${render_icon.knife({width: 56})}
					<span>Dinner</span>
				</span>
				<span class="nav-item">
					${render_icon.coffee({width: 38})}
					<span>Snack</span>
				</span>
			</nav>
			<div class="tab-content grid-row four-column-md mb-30">
				
			</div>
			<a href="#" class="btn">記録をもっと見る</a>
		</div>
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
	
	async function load_chart() {

		const labels = [1, 2, 3, 4, 5, 6, 7];
		const data = {
			labels: labels,
			datasets: [
				{
					data: [65, 59, 80, 81, 56, 55, 40],
					borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0',
				},
				{
					data: [25, 49, 180, 41, 26, 55, 60],
					borderColor: '#FFCC21',
          backgroundColor: '#FFCC21',
				}
			]
		};
		const config = {
			type: 'line',
			data: data,
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: false,
					},
					title: {
						display: true,
					}
				}
			},
		};
		new Chart(template.querySelector('#home_chart'), config);
	}
	
	template.appendChild(await banner());
	template.appendChild(await nav_tab());
	await load_product(products);
	await load_chart();
	
	return template;
}

export default home_page;