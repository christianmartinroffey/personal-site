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
			toggle: false,
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

			changeToggleValueToTrue: () =>{
				
				setStore({toggle: true});
				setStore({darkModeText: "Dark Mode"});
				
					
				},

			changeToggleValueToFalse: () =>{
				setStore({toggle: false});
				setStore({darkModeText: "Light Mode"});
				},
				
			turnOnDarkMode: () =>{
				console.log("button clicked");
				const timeline = anime.timeline({
					duration : 750,
					easing : "easeOutExpo"
				});
				//add
				timeline
				.add({
					targets:".moon",
					d:[{value: toggle ? moonPath: sunPath}] //moonPath ->sunpath
				})
				.add({
					targets:'#dark_mode',
					rotate : toggle? 0 : 320
				},"-=350")
				.add({
					targets: "#dark-page",
					backgroundColor: toggle ? 'rgba(255,255,255, 0.9)' : 'rgba(22,22,22, 0.9)',
					color: toggle ? 'rgba(22,22,22, 0.9)' : 'rgba(255,255,255, 0.9)'
				},"-=700");
				
				if(!toggle){
					actions.changeToggleValueToTrue();
				}else{
					actions.changeToggleValueToFalse();
				}   

			},
			}
		}
	};


export default getState;
