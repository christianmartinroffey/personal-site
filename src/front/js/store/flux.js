import anime from 'animejs/lib/anime.es.js';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			toggle: true,
			darkModeText: "Click below to switch between Light and Dark mode",
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// this section is for the darkmode functionality - just need to add id of dark-page to any page
				
			turnOnDarkMode: () =>{
				const moonPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
				const sunPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
				const store = getStore()
				console.log("button clicked from flux");
				const timeline = anime.timeline({
					duration : 750,
					easing : "easeOutExpo"
				});
				//add
				timeline
				.add({
					targets:".moon",
					d:[{value: store.toggle ?  sunPath: moonPath}] //moonPath ->sunpath
				})
				.add({
					targets:'#dark_mode',
					rotate : store.toggle? 0 : 320
				},"-=350")
				.add({
					targets: "#dark-page",
					backgroundColor: store.toggle ? 'rgba(255,255,255, 0.9)' : 'rgba(22,22,22, 0.9)',
					color: store.toggle ? 'rgba(22,22,22, 0.9)' : 'rgba(255,255,255, 0.9)'
				},"-=700");
				
				if(!store.toggle){
					setStore({toggle: true});
					setStore({darkModeText: "Dark Mode"});
				}else{
					setStore({toggle: false});
					setStore({darkModeText: "Light Mode"});
				}   

			},
			}
		}
	};


export default getState;
