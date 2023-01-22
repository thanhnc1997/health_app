import {
	create_element
} from '../helper.js';

async function about_page(params = {}) {
	let template = create_element('section'),
			template_inner = create_element('div');
	template.classList.add('about-page', 'page');
	template_inner.classList.add('container');
	
	async function nav_tab() {
		let div = create_element('div');
		div.classList.add('grid-row', 'three-column-md', 'filter');
		div.innerHTML = `
		<div class="item" style="background-image: url(assets/images/body_record.png)">
			<div class="text">
				<span>BODY RECORD</span>
				<button>自分のカラダの記録</button>
			</div>
		</div>
		<div class="item" style="background-image: url(assets/images/my_exercise.png)">
			<div class="text">
				<span>MY EXERCISE</span>
				<button>自分の運動の記録</button>
			</div>
		</div>
		<div class="item" style="background-image: url(assets/images/my_diary.png)">
			<div class="text">
				<span>MY DIARY</span>
				<button>自分の日記</button>
			</div>
		</div>
		`;
		
		return div;
	}
	
	async function body_record() {
		let div = create_element('section');
		div.classList.add('body-record');
		div.innerHTML = `
		<h3 class="section-title"><span>BODY<br> RECORD</span> 2021.05.21</h3>
		<canvas id="home_chart" height="100px"></canvas>
		`;
		
		return div;
	}
	
	async function exercise() {
		let data = '';
		for (let i = 0; i < 15; i ++) {
			data += `
			<p class="item">
				<span class="grid-row two-column-md">
					<span class="name">家事全般（立位・軽い）</span>
					<time class="text-right">10 min</time>
				</span>
				<span class="burn">26kcal</span>
			</p>
			`;
		}
		let div = create_element('section');
		div.classList.add('exercise');
		div.innerHTML = `
		<h3 class="section-title"><span>MY<br> EXERCISE</span> 2021.05.21</h3>
		<div class="list">
			<div class="grid-row two-column-md">
				${data}
			</div>
		</div>
		`;
		
		return div;
	}
	
	async function diary() {
		let data = '';
		for (let i = 0; i < 8; i ++) {
			data += `
			<div class="item">
				<h4>2021.05.21<br>23:25</h4>
				<p>
					私の日記の記録が一部表示されます。<br>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
				</p>
			</div>
			`;
		}
		let div = create_element('section');
		div.classList.add('diary');
		div.innerHTML = `
		<h3 class="section-title">MY DIARY</h3>
		<div class="grid-row four-column-md mb-30">
			${data}
		</div>
		<a href="#" class="btn" style="margin-bottom: 0;">記録をもっと見る</a>
		`;
		
		return div;
	}
	
	async function load_chart() {
		const labels = [1, 2, 3, 4, 5, 6, 7];
		const data = {
			labels: labels,
			datasets: [
				{
					data: [65, 59, 77, 19, 56, 55, 40],
					borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0',
				},
				{
					data: [25, 49, 60, 41, 26, 55, 60],
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
	
	template.appendChild(template_inner);
	template_inner.appendChild(await nav_tab());
	template_inner.appendChild(await body_record());
	template_inner.appendChild(await exercise());
	template_inner.appendChild(await diary());
	await load_chart();
	return template;
}

export default about_page;