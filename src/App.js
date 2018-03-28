import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		films: [],
  		swiperData: []
  	}
  }
  componentDidMount() {
  	var that = this;
  	// fetch是H5的原生ajax API
  	fetch("/v4/api/film/now-playing?__t=1511098321437&page=1&count=5")
  	.then(function(res){
  		return res.json();
  	})
  	.then(function(json){
  		console.log(json);
  		that.setState({
  			films: json.data.films
  		})
  	})

  	fetch("/v4/api/billboard/home?__t=1511098321431")
  	.then(function(res){
  		return res.json();
  	})
  	.then(function(json){
  		console.log(json);
  		that.setState({
  			swiperData: json.data.billboards
  		})
		new window.Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
			loop: true
		})
  	})
  }
  render() {
    return (
      <div className="App">
			<div className="swiper-container">
		  <div className="swiper-wrapper">
	      	{
	      		this.state.swiperData.map((item, index)=>{
	      			return <div key={item.id} className="swiper-slide">
	      				<img alt="轮播图" src={item.imageUrl} />
	      			</div>
	      		})
	      	}
		  </div>
		</div>
      	<hr/>
					{ 
						this.state.films.map((item, index)=>{
							return (
								<div key={item.id}>
									<h3>{item.name}</h3>
									<img src={item.cover.origin} alt="封面"/>
									<span>评分：{item.grade}</span>
								</div>
							)
						}) 
					}
      </div>
    );
  }
}

export default App;

// this.state.films.map((item, index)=>{
// 	return (
// 		<div key={item.id}>
// 			<h3>{item.name}</h3>
// 			<img alt="封面" src={item.cover.origin} />
// 			<span>评分:{item.grade}</span>
// 		</div>
// 	)
// })