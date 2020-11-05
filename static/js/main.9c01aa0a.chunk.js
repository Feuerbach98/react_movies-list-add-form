(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),m=a.n(r),l=(a(15),a(9)),o=a(1),s=a(2),c=a(4),d=a(3),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var h=a(5),g=(a(19),a(20),function(e){var t=e.inputName,a=e.inputTitle,i=e.onChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"form__label",htmlFor:t},"Movie: ".concat(t)),n.a.createElement("input",{className:"form__input",type:"text",name:t,id:t,value:a,onChange:i}))}),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",submitDisabled:!0},e.onInputChange=function(t){var a=t.target,i=a.value,n=a.name;e.setState((function(e){var t;return t={},Object(h.a)(t,n,i),Object(h.a)(t,"submitDisabled",!(""!==e.title&&""!==e.imgUrl&&""!==e.imdbUrl&&""!==e.imdbId)),t}))},e}return Object(s.a)(a,[{key:"clearForm",value:function(){this.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",submitDisabled:!0})}},{key:"render",value:function(){var e=this,t=this.props.onAdd,a=this.state,i=a.title,r=a.description,m=a.imgUrl,l=a.imdbUrl,o=a.imdbId,s=a.submitDisabled;return n.a.createElement("form",{name:"newMovie",className:"form",onSubmit:function(a){a.preventDefault(),t(i,r,m,l,o),e.clearForm()}},n.a.createElement(g,{inputName:"title",inputTitle:i,onChange:this.onInputChange}),n.a.createElement(g,{inputName:"description",inputTitle:r,onChange:this.onInputChange}),n.a.createElement(g,{inputName:"imgUrl",inputTitle:m,onChange:this.onInputChange}),n.a.createElement(g,{inputName:"imdbUrl",inputTitle:l,onChange:this.onInputChange}),n.a.createElement(g,{inputName:"imdbId",inputTitle:o,onChange:this.onInputChange}),n.a.createElement("button",{type:"submit",className:"form__button",disabled:s},"Add"))}}]),a}(i.Component),v=a(8),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t,a,i,n,r){e.setState((function(e){return{movies:[].concat(Object(l.a)(e.movies),[{title:t,description:a,imgUrl:i,imdbUrl:n,imdbId:r}])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{onAdd:this.addMovie})))}}]),a}(i.Component);m.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9c01aa0a.chunk.js.map