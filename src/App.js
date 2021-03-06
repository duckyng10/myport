import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './src/MyApp.css';

import MyAppList from './src/MyAppList.jsx'

class App extends Component{
	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}

	render(){
		return(
			<div class="container">
				<div class=""> 
					<p class="solos"> Apps</p>
				</div>
				<MyAppList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
			</div>
		)
	}
	
	constructor(props){
		super(props);
		this.state = {
			myapps:[
			   {
				  id:1,
				  name:"The SOLO Series Controller v2",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ac/b2/ea/acb2eaea-efe8-4aae-0ec9-225b8ca3a219/mzl.dohberin.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:"https://itunes.apple.com/us/app/id1396201889"
			   },
			   {
				  id:70,
				  name:"Brickstone Cafe & Pizzeria",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/46/b4/7d/46b47d5c-9337-186e-5370-3474f7e7a566/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:2,
				  name:"Entice Eats",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/e5/de/3f/e5de3f00-2050-7500-ab99-6cca6bd89b35/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-1.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:3,
				  name:"Breakfast Room",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/1c/5c/4c/1c5c4c67-4bb0-d50d-2684-68e537497791/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:5,
				  name:"Previti Pizza NY",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fd/81/c1/fd81c1fc-8d9e-9321-2475-c0a5f9839623/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:6,
				  name:"Mr. Jerk",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/6c/a9/64/6ca96450-6a41-8da7-27a3-020d8fef1d9c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:7,
				  name:"Shaheen Tikka & Kabab House",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/38/78/77/387877eb-5859-6c18-bd6c-e263101d296a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:8,
				  name:"Pariwar Restaurant",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/91/5c/70/915c70d4-aa87-b520-7f5a-37bdae1ad3e9/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:9,
				  name:"Joy Curry & Tandoor",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/71/eb/bc/71ebbc7c-3857-fa46-36f7-e4557c44216e/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:10,
				  name:"El Rincon Cibaeno",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/2d/2d/cf/2d2dcfa5-f2ce-4da1-995f-3efb30aaf73a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:11,
				  name:"Thai Room",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/94/bc/29/94bc29e4-639d-c327-b1fe-2b2b19d2e05e/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:12,
				  name:"Zam Zam Tikka & Kabab",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/9d/aa/65/9daa6558-2beb-e956-23b6-2c813064abfd/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-1.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:13,
				  name:"thairoomgrand",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/0c/cd/50/0ccd50fd-b01e-e017-6f19-75c2731aafad/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:14,
				  name:"Raw Sushi",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/97/45/da/9745da0f-174c-f974-0fbd-772f88f5ac6a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:15,
				  name:"Heavenly Market & Deli",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/06/76/80/0676801a-d371-15d2-397b-98e34a81fc14/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:16,
				  name:"Solo POS Mobile Access",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/c1/45/84/c145844c-39ad-c369-f6f6-54a4e332be4c/mzl.scjaabit.jpg/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:17,
				  name:"Chick Fiesta",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/cf/15/c1/cf15c144-40aa-1b21-9a0c-626bcb9e2198/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-1.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:18,
				  name:"Dickey's BBQ El Paso",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/a5/9c/2d/a59c2d77-fb83-47db-90bb-0ee537017792/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:19,
				  name:"Wings & Heaven Pizza",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/57/84/7e/57847e01-65d6-1d86-2e53-3bdc25e7391a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:20,
				  name:"Ramen Works",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/57/dd/e1/57dde1a9-0e3a-5615-1ad9-58091eac466d/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:21,
				  name:"Black Bear Pub",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/0b/d3/58/0bd3588b-2a69-8b81-76ae-f58df447a98e/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:22,
				  name:"Avenue Open Kitchen",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/44/fd/84/44fd847e-1c79-8caa-f87c-fade8a167284/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:23,
				  name:"Abruzzo Pizza",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple111/v4/2b/72/b2/2b72b211-493e-2951-4899-081f12ff021e/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-1.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:24,
				  name:"Ben's Pretzels",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/3f/23/ee/3f23ee44-89c2-969a-360f-fb323da0ad48/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:25,
				  name:"The SOLO Series Backoffice",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/08/af/de/08afde22-8ebf-1c66-452f-ca4390c1ffc9/AppIcon-BackOffice-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:26,
				  name:"Golden Lobsters",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/da/a8/38/daa83870-9248-2819-9c55-b8df92b8e534/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:27,
				  name:"GUAC TACOS + TEQUILA",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/74/30/23/7430234f-45dc-9d3c-0125-f0780660d03b/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:28,
				  name:"Chicken Idol",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/81/df/59/81df597f-5aa2-98f3-f4a5-1807ea0e3c25/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-1.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:29,
				  name:"Turano's Pizza Kitchen",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/10/a1/01/10a10166-114d-d0a9-faf5-32822654f4af/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:30,
				  name:"Gabby's Junction",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/f1/2a/21/f12a2163-f58e-d78c-afcd-9737dcd36c35/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:31,
				  name:"California Sandwiches",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/7e/5b/ca/7e5bca38-b026-e01c-9b31-f4c09c13e25a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:32,
				  name:"Bertha's Colombian Cuisine",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/87/a2/c0/87a2c088-c124-cae6-4853-7c8415605102/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ]
			   },
			   {
				  id:33,
				  name:"Valle's Taqueria",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/b4/5d/d2/b45dd291-5dd1-18a6-b392-89e94a39eba7/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:34,
				  name:"Beijing Kitchen",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/27/80/f4/2780f4ab-0c96-c9cb-9531-080820b4046b/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:35,
				  name:"Pita Press",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/be/39/4e/be394e76-150a-caac-070e-f57b47b47388/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:36,
				  name:"BHOGI",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/7f/74/65/7f7465ba-b6ee-f304-6456-184a42466247/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:37,
				  name:"V-Gan Kitchen",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/02/c8/4d/02c84d4c-a79b-a06e-c24d-0ee79367abc3/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:38,
				  name:"EJ Sushi Chicago",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/c5/c2/17/c5c2176d-74b4-6bc1-87d0-7b23f5c4b09a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:39,
				  name:"Dunn River Island Cafe",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/a6/76/fe/a676feab-74ec-54fd-bea4-df8fcc88bc79/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:40,
				  name:"Lula's Latin",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/97/dc/7a/97dc7aa6-3fa7-d880-fbf6-9d50f10eff70/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:41,
				  name:"La Reina Del Sabor",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/11/5f/9f/115f9f18-4965-903b-6667-ceeb9a2de0b9/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:42,
				  name:"Mediterranean To Go",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/6b/91/e3/6b91e3aa-f630-6d19-f811-bda7e8124d6f/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:43,
				  name:"Tivoli Cafe",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/d1/83/1b/d1831bbf-a007-59c2-ad65-d710f0464dd3/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:44,
				  name:"Wilson Dogs",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/d8/17/fe/d817fe86-e061-cfa9-895d-eee656e48d73/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:45,
				  name:"Ritz Caribbean Foods",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/68/54/65/68546587-8b19-a633-e45e-06b2c4be9b29/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:46,
				  name:"Rob's Deli",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/5c/22/cd/5c22cd62-5d8a-fc18-7f0d-195b187af737/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-1.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:47,
				  name:"POP Juice Bar",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/05/1e/fe/051efeae-027a-819f-2316-461ebbcc4ae7/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:48,
				  name:"The SOLO Series Controller",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/ce/46/bf/ce46bf1b-8c39-2ed6-e20a-f3f890be272c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:49,
				  name:"Mercedes House Market",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/a3/bf/d0/a3bfd097-38c4-5278-b02b-8594256a393b/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:50,
				  name:"11 B Express",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/d1/86/d6/d186d62e-f43c-ed5e-9f23-966e6b26d46a/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:51,
				  name:"El Rinkoncito Peruano",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/96/c5/8e/96c58ef2-fd5c-c083-853a-c92f6e836243/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:52,
				  name:"La Lagartija Taqueria",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/e9/23/f7/e923f789-cb01-7774-37de-691aee507da7/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:53,
				  name:"Pamier Kabob",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/d5/d6/c0/d5d6c02f-1978-f6d0-0f0e-20416327b41d/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:54,
				  name:"Sand Dust Coffee",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/fe/28/fa/fe28fa41-3af5-0898-8e93-cb8a594baa30/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:56,
				  name:"Flaming Wok & Grill",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/79/4c/11/794c1168-616a-5d0b-ef6f-0ccf965e657d/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:57,
				  name:"Kaybee’s Indian Flavor",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/68/db/91/68db91fd-9367-4294-a2b4-41e4c544bb01/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:58,
				  name:"Gemini Diner",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/f7/aa/a7/f7aaa75a-eb20-84dc-a020-b269c6b87905/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:59,
				  name:"Thai Time",
				  icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/45/ed/3d/45ed3d20-92a8-3681-1554-595dbf3ff7e4/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:60,
				  name:"Fashion Food",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/4d/c7/5c/4dc75c90-be2e-aacf-a02d-588f67a7d084/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:61,
				  name:"Victory Cafe",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/1f/7b/12/1f7b1229-1ce6-1e8e-5ad2-8fc16727e3ec/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:62,
				  name:"Firehouse Burgers & Burritos",
				  icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/3e/ab/ba/3eabba24-d222-88d4-d163-8a605513c724/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:63,
				  name:"Nugget Halal Pizza & Wings",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/28/47/09/28470992-6c55-fdd9-a89f-a712068abbf1/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:64,
				  name:"Factory Donuts",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/bd/86/5e/bd865e75-33d9-4d1b-90dd-d81c5b8dd0a2/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:65,
				  name:"Masala King",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/f3/2c/f3/f32cf3c4-447d-b758-cb68-b080a787d19e/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:66,
				  name:"Green Apple Delight",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/ad/79/78/ad797838-e91b-96fe-28a1-df12ab751f17/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:67,
				  name:"B&W Deli Pizza",
				  icon:"https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/2d/2b/d0/2d2bd096-fead-b86f-0246-a143e72b32e0/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:68,
				  name:"Philly Pretzel Factory",
				  icon:"https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/8c/a7/17/8ca717de-1c49-cbe8-026f-2115a64f1abd/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   },
			   {
				  id:69,
				  name:"Spice is Rite",
				  icon:"https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/19/55/b8/1955b8c6-b354-709b-0709-658b48c6cbc8/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-2.png/340x340bb-80.png",
				  tags:[
					 "RT7", "Swift", "UIKit", "AutoLayout", "Storyboard", "MapKit", "Restful API", "JSON", "MVC", "Fastlane", "XCTest"
				  ],
				  url:""
			   }
			]
		 }
	}
}

export default App
