(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{320:function(e,t,a){e.exports=a(568)},325:function(e,t,a){},335:function(e,t,a){},426:function(e,t,a){},432:function(e,t,a){},487:function(e,t,a){},516:function(e,t,a){},518:function(e,t,a){},564:function(e,t,a){},566:function(e,t,a){},568:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(88),c=a.n(l),i=(a(325),a(327),a(19)),o=a(28),s=a(29),u=a(31),d=a(30),m=a(32),h=a(577),p=Object(i.b)(function(e){return{location:e.routing.location}})(h.a),E=a(89),f=a(587),g=a(586),b=a(595),v=a(569),y=a(598),C=a(597),O=a(178),k=(a(335),{width:25,height:25}),j=Object(i.b)(function(e){return{profile:e.firebaseReducer.profile}},function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGN_OUT_SUCCESS"})})})}}})(function(e){return r.a.createElement(b.a,{className:"main-header"},r.a.createElement(b.a.Item,{name:"home",className:"main-header__logo"},r.a.createElement(v.a,{src:"".concat("/carcard","/images/logo/logo.png")})),r.a.createElement(b.a.Menu,{position:"right"},r.a.createElement(b.a.Item,{name:"user",className:"main-header__user"},r.a.createElement(y.a,{className:"user-circle",circular:!0,style:k,color:"teal",inverted:!0},r.a.createElement(C.a,{className:"user-circle__title"},e.profile.initials))),r.a.createElement(b.a.Item,{name:"signup",className:"main-header__sign-out"},r.a.createElement(O.a,{name:"log out",className:"icon",color:"grey",onClick:e.signOut}))))}),w=a(310),S=a(425),_=a(570),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.component,n=Object(w.a)(t,["component"]);return r.a.createElement(S.a,Object.assign({},n,{render:function(t){return e.props.auth.uid?r.a.createElement(a,t):r.a.createElement(_.a,{to:{pathname:"/",state:{from:t.location}}})}}))}}]),t}(n.Component),D=Object(i.b)(function(e){return{auth:e.firebaseReducer.auth}})(N),R=a(46),A=a(584),I=a(585),x=a(590),F=a(591),U=function(e){var t=e.bodyType,a=e.fuel,n=e.engine,l=e.color,c=e.transmission;return r.a.createElement(F.a,{horizontal:!0},r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Content,null,r.a.createElement(F.a.Header,null,"Body type:"),r.a.createElement(F.a.Description,null,t||r.a.createElement(r.a.Fragment,null,"\u2014")))),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Content,null,r.a.createElement(F.a.Header,null,"Engine:"),r.a.createElement(F.a.Description,null,n&&n+" L"||r.a.createElement(r.a.Fragment,null,"\u2014")))),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Content,null,r.a.createElement(F.a.Header,null,"Transmission:"),r.a.createElement(F.a.Description,null,c||r.a.createElement(r.a.Fragment,null,"\u2014")))),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Content,null,r.a.createElement(F.a.Header,null,"Fuel:"),r.a.createElement(F.a.Description,null,a||r.a.createElement(r.a.Fragment,null,"\u2014")))),r.a.createElement(F.a.Item,null,r.a.createElement(F.a.Content,null,r.a.createElement(F.a.Header,null,"Color:"),r.a.createElement(F.a.Description,null,l||r.a.createElement(r.a.Fragment,null,"\u2014")))))},P=a(596),G=a(287),T=a(579),L=(a(426),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.car,a=e.match;return r.a.createElement(x.a,null,r.a.createElement(x.a.Image,{src:t.img||"".concat("/carcard","/images/default/def-image.png")}),r.a.createElement(x.a.Content,null,r.a.createElement(x.a.Header,{as:"a"},t.brand," ",t.model),r.a.createElement(x.a.Meta,null,r.a.createElement("span",{className:"year"},t.year)),r.a.createElement(x.a.Description,null,r.a.createElement(U,t)),r.a.createElement(x.a.Extra,null,r.a.createElement(T.a,{to:a.url+t.id+"/car/"},r.a.createElement(P.a,{content:"Service history",icon:"right chevron",labelPosition:"right",floated:"right"})),t.color&&r.a.createElement(G.a,{color:"white"!==t.color?t.color:null,horizontal:!0},t.color),t.bodyType&&r.a.createElement(G.a,{className:"body-type",image:!0},r.a.createElement("img",{className:"body-type__image",src:"".concat("/carcard","/images/body/").concat(t.bodyType,".svg")}),r.a.createElement("span",{className:"body-type__desc"},t.bodyType)))))}}]),t}(n.Component)),z=a(33),B=Object(i.b)(function(e){return{location:e.routing.location}},function(e){return{editCar:function(t){return e(function(e){return function(t,a,n){n.getFirebase,n.getFirestore,t({type:"EDIT_CAR",payload:e})}}(t))}}})(L),M=a(65),H=a(24),W=a(589),V=a(588),K=a(582),q=a(594),Y=a(583),J=a(581),X=[{key:"s",text:"Sedan",value:"sedan"},{key:"h",text:"Hatchback",value:"hatchback"},{key:"co",text:"Crossover",value:"crossover"},{key:"c",text:"Coupe",value:"coupe"},{key:"ca",text:"Cabriolet",value:"cabriolet"},{key:"w",text:"Wagon",value:"wagon"},{key:"suv",text:"Suv",value:"suv"},{key:"p",text:"Pickup",value:"pickup"},{key:"v",text:"Van",value:"van"},{key:"mv",text:"Minivan",value:"minivan"}],$=[{key:"f",text:"Front-wheel-drive",value:"front"},{key:"r",text:"Rear-wheel-drive",value:"rear"},{key:"a",text:"Four-wheel-drive",value:"four"}],Q=[{key:"m",text:"Manual",value:"manual"},{key:"a",text:"Automatic",value:"automatic"},{key:"cvt",text:"CVT",value:"cvt"},{key:"sadc",text:"Semi-automatic and dual-clutch",value:"sadc"}],Z=[{key:"p",text:"Petrol",value:"petrol"},{key:"d",text:"Diesel",value:"diesel"},{key:"l",text:"LPG",value:"lpg"},{key:"c",text:"CNG",value:"cng"},{key:"f",text:"FCEV",value:"fcev"},{key:"e",text:"Electric",value:"electric"}],ee=function(){for(var e=(new Date).getFullYear(),t=[],a=1900;a<=e;a++)t.push({key:a,text:a,value:a});return t}(),te=[{key:"white",text:"White",value:"white"},{key:"black",text:"Black",value:"black"},{key:"brown",text:"Brown",value:"brown"},{key:"grey",text:"Grey",value:"grey"},{key:"red",text:"Red",value:"red"},{key:"orange",text:"Orange",value:"orange"},{key:"yellow",text:"Yellow",value:"yellow"},{key:"green",text:"Green",value:"green"},{key:"blue",text:"Blue",value:"blue"},{key:"indigo",text:"Indigo",value:"indigo"},{key:"violet",text:"Violet",value:"violet"}],ae=(a(432),{car:{fuel:null,year:null,brand:null,model:null,color:null,engine:null,bodyType:null,transmission:null},errors:{brand:"",model:""}}),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e,t){var n=t.value,r=t.inputname;a.state.car.brand!==n&&a.setState(function(e){return{car:Object(z.a)({},e.car,Object(M.a)({},r,n))}})},a.show=a.show.bind(Object(H.a)(Object(H.a)(a))),a.close=a.close.bind(Object(H.a)(Object(H.a)(a))),a.validate=a.validate.bind(Object(H.a)(Object(H.a)(a))),a.handleAddCar=a.handleAddCar.bind(Object(H.a)(Object(H.a)(a))),a.state=ae,a.state.open=!1,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"show",value:function(e){this.props.openModal(),this.setState({size:e})}},{key:"close",value:function(){this.props.closeModal(),this.setState(Object(z.a)({},ae))}},{key:"validate",value:function(){var e="",t="";return this.state.car.brand?this.state.car.brand.length>120&&(e="max length 120"):e="this field is required",this.state.car.model?this.state.car.model.length>120&&(t="max length 120"):t="this field is required",!e&&!t||(this.setState({errors:{brand:e,model:t}}),!1)}},{key:"handleAddCar",value:function(){if(this.validate()){var e=Object.assign({},this.state.car);this.props.addCar(this.props.uid,e)}}},{key:"render",value:function(){var e=this,t=this.state.size,a=this.props.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{color:"teal",content:"Add car",icon:"add",labelPosition:"left",onClick:function(){return e.show("small")}}),r.a.createElement(W.a,{size:t,open:a,onClose:this.close,className:"add-car-modal"},r.a.createElement(W.a.Header,{className:"add-car-modal__header"},"Vehicle identification"),r.a.createElement(W.a.Content,{className:"add-car-modal__content"},r.a.createElement(V.a,null,r.a.createElement(V.a.Group,{widths:"equal"},r.a.createElement(V.a.Field,{control:K.a,label:"Brand",placeholder:"Brand",inputname:"brand",onChange:this.handleChange}),r.a.createElement(q.a,{hidden:!this.state.errors.brand,size:"small",content:this.state.errors.brand,negative:!0}),r.a.createElement(V.a.Field,{control:K.a,label:"Model",placeholder:"Model",inputname:"model",onChange:this.handleChange}),r.a.createElement(q.a,{hidden:!this.state.errors.model,size:"small",content:this.state.errors.model,negative:!0})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Field,{control:Y.a,clearable:!0,label:"Body Type",options:X,inputname:"bodyType",onChange:this.handleChange,placeholder:"Choose"}),r.a.createElement(V.a.Field,{control:Y.a,clearable:!0,label:"Year",options:ee,inputname:"year",onChange:this.handleChange,placeholder:"Choose"}),r.a.createElement(V.a.Field,{control:Y.a,clearable:!0,label:"Layout",options:$,inputname:"layout",onChange:this.handleChange,placeholder:"Choose"})),r.a.createElement(V.a.Group,{inline:!0},r.a.createElement(V.a.Field,{control:K.a,type:"number",max:"12",min:"1",step:"0.1",label:"Engine",inputname:"engine",onChange:this.handleChange,placeholder:"Choose"}),r.a.createElement(V.a.Field,{control:Y.a,clearable:!0,label:"Color",options:te,inputname:"color",onChange:this.handleChange,placeholder:"Choose"})),r.a.createElement(V.a.Group,{inline:!0},r.a.createElement("label",null,"Transmission"),Q.map(function(t){return r.a.createElement(V.a.Field,{key:t.key,control:J.a,label:t.text,value:t.value,inputname:"transmission",checked:e.state.car.transmission===t.value,onChange:e.handleChange})})),r.a.createElement(V.a.Group,{inline:!0},r.a.createElement("label",null,"Fuel"),Z.map(function(t){return r.a.createElement(V.a.Field,{key:t.key,control:J.a,label:t.text,value:t.value,inputname:"fuel",checked:e.state.car.fuel===t.value,onChange:e.handleChange})})))),r.a.createElement(W.a.Actions,null,r.a.createElement(P.a,{onClick:this.close,content:"Cancel",negative:!0}),r.a.createElement(P.a,{positive:!0,icon:"checkmark",labelPosition:"right",content:"Yes",onClick:this.handleAddCar}))))}}]),t}(n.Component),re=Object(i.b)(function(e){return{open:e.carsReducer.open}},function(e){return{addCar:function(t,a){return e(function(e,t){return function(a,n,r){(0,r.getFirestore)().collection(e).add(Object(z.a)({},t)).then(function(){a({type:"ADD_CAR"})}).catch(function(e){a({type:"ADD_CAR_ERROR",err:e})})}}(t,a))},openModal:function(t){return e(function(e){e({type:"OPEN_ADD_CAR",payload:!0})})},closeModal:function(t){return e(function(e){e({type:"CLOSE_ADD_CAR",payload:!1})})}}})(ne),le=(a(487),function(e){var t=e.text;return r.a.createElement(y.a,{className:"empty-list-container",placeholder:!0},r.a.createElement(C.a,{icon:!0},r.a.createElement(O.a,{name:"search"}),t," is empty"))}),ce=le,ie=a(35),oe=(a(516),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderCars",value:function(e){var t=this;return Object.keys(e).map(function(a){return r.a.createElement(B,{key:a,car:Object.assign({id:a},e[a]),match:t.props.match})})}},{key:"render",value:function(){var e=this.props,t=e.cars,a=e.uid,n=Object(ie.isLoaded)(t)?Object(ie.isEmpty)(t)?r.a.createElement(ce,{text:"Cars list"}):this.renderCars(t):r.a.createElement(A.a,{active:!0});return r.a.createElement(I.a,{className:"card-list-wrapper"},r.a.createElement(y.a,{className:"add-car-container"},r.a.createElement(re,{uid:a})),r.a.createElement(x.a.Group,{divided:!0,className:"card-list-container"},n))}}]),t}(n.Component)),se=Object(R.d)(Object(ie.firestoreConnect)(function(e){return[{collection:e.match.params.id,storeAs:"userCars"}]}),Object(i.b)(function(e,t){return{uid:t.match.params.id,cars:e.firestoreReducer.data.userCars}},null))(oe),ue=a(599),de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",password:""},a.handleChange=function(e,t){var n=t.id,r=t.value;a.setState(Object(M.a)({},n,r))},a.handleSubmit=function(){a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(g.a,{to:"User/"+t.uid+"/Cars/"}):r.a.createElement("div",{className:"login-form"},r.a.createElement(ue.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},r.a.createElement(ue.a.Column,{className:"login-form__container"},r.a.createElement(C.a,{as:"h2",color:"teal",textAlign:"center",className:"login-form__title"},r.a.createElement(v.a,{src:"".concat("/carcard","/images/logo/logo.png")})," Registration"),r.a.createElement(V.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(y.a,{stacked:!0},r.a.createElement(V.a.Input,{id:"firstName",fluid:!0,icon:"user",iconPosition:"left",placeholder:"First name",onChange:this.handleChange}),r.a.createElement(V.a.Input,{id:"lastName",fluid:!0,icon:"user",iconPosition:"left",placeholder:"Last name",onChange:this.handleChange}),r.a.createElement(V.a.Input,{id:"email",fluid:!0,icon:"mail",iconPosition:"left",placeholder:"E-mail address",onChange:this.handleChange}),r.a.createElement(V.a.Input,{id:"password",fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handleChange}),a&&r.a.createElement(q.a,{negative:!0},r.a.createElement("p",null,a)),r.a.createElement(P.a,{color:"teal",fluid:!0,size:"large",type:"submit"},"Sign up"))),r.a.createElement(q.a,null,r.a.createElement(T.a,{to:"/SignIn"},"Sign In")))))}}]),t}(n.Component),me=Object(i.b)(function(e){return{auth:e.firebaseReducer.auth,authError:e.authReducer.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,email:e.email,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGN_UP_SUCCESS"})}).catch(function(e){t({type:"SIGN_UP_ERROR",err:e})})}}(t))}}})(de),he=(a(518),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e,t){var n=t.id,r=t.value;a.setState(Object(M.a)({},n,r))},a.handleSubmit=function(){a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(g.a,{to:"User/"+t.uid+"/Cars/"}):r.a.createElement("div",{className:"login-form"},r.a.createElement(ue.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},r.a.createElement(ue.a.Column,{className:"login-form__container"},r.a.createElement(C.a,{as:"h2",color:"teal",textAlign:"center",className:"login-form__title"},r.a.createElement(v.a,{src:"".concat("/carcard","/images/logo/logo.png")})," Log-in to your account"),r.a.createElement(V.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(y.a,{stacked:!0},r.a.createElement(V.a.Input,{id:"email",fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",onChange:this.handleChange}),r.a.createElement(V.a.Input,{id:"password",fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handleChange}),a&&r.a.createElement(q.a,{negative:!0},r.a.createElement("p",null,a)),r.a.createElement(P.a,{color:"teal",fluid:!0,size:"large",type:"submit"},"Login"))),r.a.createElement(q.a,null,"New to us? ",r.a.createElement(T.a,{to:"/SignUp"},"Sign Up")))))}}]),t}(n.Component)),pe=Object(i.b)(function(e){return{authError:e.authReducer.authError,auth:e.firebaseReducer.auth}},function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"SIGN_IN_SUCCESS"})}).catch(function(e){t({type:"SIGN_IN_ERROR",err:e})})}}(t))}}})(he),Ee=a(307),fe=a.n(Ee),ge=a(106),be={authError:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_SUCCESS":return Object(z.a)({},e,{authError:null});case"SIGN_IN_ERROR":return Object(z.a)({},e,{authError:t.err.message});case"SIGN_OUT_SUCCESS":return e;case"SIGN_UP_SUCCESS":return Object(z.a)({},e,{authError:null});case"SIGN_UP_ERROR":return Object(z.a)({},e,{authError:t.err.message});default:return e}},ye={open:!1,addDetailsError:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAR":return Object(z.a)({},e,{open:!1});case"ADD_DETAILS_SUCCESS":return Object(z.a)({},e,{addDetailsError:null});case"ADD_DETAILS_ERROR":return Object(z.a)({},e,{addDetailsError:t.err.message});case"OPEN_ADD_CAR":case"CLOSE_ADD_CAR":return Object(z.a)({},e,{open:t.payload});default:return e}},Oe=Object(R.c)({authReducer:ve,carsReducer:Ce,firestoreReducer:ge.firestoreReducer,firebaseReducer:ie.firebaseReducer,routing:E.c}),ke=a(308),je=a(141),we=a.n(je);a(557),a(562);we.a.initializeApp({apiKey:"AIzaSyDDuV36bwM8nDHIu2vfzIP3qUnRbyxnKxw",authDomain:"car-card-dudar.firebaseapp.com",databaseURL:"https://car-card-dudar.firebaseio.com",projectId:"car-card-dudar",storageBucket:"car-card-dudar.appspot.com",messagingSenderId:"828879465775"}),we.a.firestore().settings({timestampsInSnapshots:!0});var Se=we.a,_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,Ne=fe()({basename:"/carcard"}),De=[];De.push(Object(E.b)(Ne),ke.a.withExtraArgument({getFirebase:ie.getFirebase,getFirestore:ge.getFirestore}));var Re=_e(R.a.apply(void 0,De),Object(ge.reduxFirestore)(Se),Object(ie.reactReduxFirebase)(Se,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0,firebaseStateName:"firebaseReducer"})),Ae=Object(R.e)(Oe,Re),Ie=a(309),xe=a(593),Fe=(a(564),{km:"",description:[""],errorKm:"",errorEmpty:"",errorDescription:[]}),Ue=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e,t){var n=t.value;a.state.km!==n&&a.setState({km:n})},a.state=Fe,a.validate=a.validate.bind(Object(H.a)(Object(H.a)(a))),a.validateArray=a.validateArray.bind(Object(H.a)(Object(H.a)(a))),a.handleSubmitNewDetail=a.handleSubmitNewDetail.bind(Object(H.a)(Object(H.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderDetails",value:function(e){return r.a.createElement(xe.a,{compact:!0,inverted:!0,color:"teal",celled:!0,className:"details-table"},r.a.createElement(xe.a.Header,{className:"details-table__header"},r.a.createElement(xe.a.Row,{className:"details-table__header__row"},r.a.createElement(xe.a.HeaderCell,{width:"4",className:"cell"},"kilometrage/mileage"),r.a.createElement(xe.a.HeaderCell,{width:"12",className:"cell"},"Description"))),r.a.createElement(xe.a.Body,null,Object.keys(e).map(function(t,a){return r.a.createElement(xe.a.Row,{key:a},r.a.createElement(xe.a.Cell,null,t),r.a.createElement(xe.a.Cell,null,e[t].map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(O.a,{name:"setting"})," ",e)})))})))}},{key:"handleAddNewInput",value:function(e){e.preventDefault(),this.setState({description:Object(Ie.a)(this.state.description).concat([""])})}},{key:"handleRemoveNewInput",value:function(e,t){e.preventDefault(),this.state.description.splice(t,1),this.setState({description:this.state.description})}},{key:"handleChangeDetail",value:function(e,t){this.state.description[t]=e.target.value,this.setState({description:this.state.description})}},{key:"isNormalInteger",value:function(e){return new RegExp("^[0-9]+$").test(e)}},{key:"validateArray",value:function(e){return!!e.filter(function(e){return""!==e}).length}},{key:"validate",value:function(){var e="",t=[],a="";return this.isNormalInteger(this.state.km)||(e="invalid number"),this.state.description.forEach(function(e){e.length<3||e.length>=120?t.push("Min length 3 and max 120"):t.push("")}),0===this.state.description.length&&(a="Add at least one description"),!(e||this.validateArray(t)||a)||(this.setState({errorKm:e,errorEmpty:a,errorDescription:t.concat()}),!1)}},{key:"handleSubmitNewDetail",value:function(){if(this.validate()){var e={};e[this.state.km]=this.state.description,this.props.addDetails(this.props.match.params.id,this.props.match.params.carId,e),this.setState(Fe)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.details,n=t.addDetailsError,l=Object(ie.isLoaded)(a)?Object(ie.isEmpty)(a)?r.a.createElement(le,{text:"Service history"}):this.renderDetails(a):r.a.createElement(A.a,{active:!0});return r.a.createElement(I.a,null,r.a.createElement(y.a,null,r.a.createElement(V.a,{onSubmit:this.handleSubmitNewDetail},r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Group,{className:"kilometrage-wrapper",grouped:!0},r.a.createElement(V.a.Group,{className:"kilometrage-container",inline:!0},r.a.createElement(V.a.Input,{className:"kilometrage-container__input",fluid:!0,label:"kilometrage/mileage",placeholder:"km/mi",value:this.state.km,onChange:this.handleChange}),r.a.createElement(V.a.Button,{className:"kilometrage-container__btn",content:"Add description",icon:"add",labelPosition:"left",onClick:function(t){return e.handleAddNewInput(t)}})),r.a.createElement(q.a,{className:"error-container",hidden:!this.state.errorKm,size:"small",content:this.state.errorKm,negative:!0}),r.a.createElement(q.a,{className:"error-container",hidden:!this.state.errorEmpty,size:"small",content:this.state.errorEmpty,negative:!0})),r.a.createElement(V.a.Group,{className:"description-container",grouped:!0},this.state.description.map(function(t,a){return r.a.createElement(V.a.Group,{key:a,grouped:!0},r.a.createElement(V.a.Group,{className:"description-item",inline:!0},r.a.createElement(V.a.Input,{value:t,onChange:function(t){return e.handleChangeDetail(t,a)}}),r.a.createElement(P.a,{icon:"remove",onClick:function(t){return e.handleRemoveNewInput(t,a)}})),r.a.createElement(q.a,{hidden:!e.state.errorDescription[a],size:"small",content:e.state.errorDescription[a],negative:!0}))}))),r.a.createElement(V.a.Button,{type:"submit",color:"teal"},"Add service record"))),n&&r.a.createElement(q.a,{negative:!0},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"details-table-wrapper"},l))}}]),t}(n.Component),Pe=Object(R.d)(Object(ie.firestoreConnect)(function(e){return[{collection:e.match.params.id,doc:e.match.params.carId,storeAs:"carDetails"}]}),Object(i.b)(function(e){return{details:e.firestoreReducer.data.carDetails&&e.firestoreReducer.data.carDetails.details||{},auth:e.firebaseReducer.auth,location:e.routing.location,addDetailsError:e.carsReducer.addDetailsError}},function(e){return{addDetails:function(t,a,n){return e(function(e,t,a){return function(n,r,l){var c=(0,l.getFirestore)();c.collection(e).doc(t).get().then(function(r){if(r.exists){var l=r.data();l.details?c.collection(e).doc(t).update({details:Object.assign(l.details,a)}).then(function(){n({type:"ADD_DETAILS_SUCCESS"})}).catch(function(e){n({type:"ADD_DETAILS_ERROR",err:e})}):c.collection(e).doc(t).update({details:a})}else n({type:"ADD_DETAILS_ERROR",err:{message:"No such document!"}})}).catch(function(e){n({type:"ADD_DETAILS_ERROR",err:e})})}}(t,a,n))}}}))(Ue),Ge=(a(566),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.store;return r.a.createElement(i.a,{store:a},r.a.createElement(E.a,{history:Ne},r.a.createElement(n.Fragment,null,t.uid&&r.a.createElement(j,null),r.a.createElement("div",{className:"app-container"},r.a.createElement(p,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g.a,{to:"/SignIn"})}}),r.a.createElement(f.a,{path:"/SignIn",component:pe}),r.a.createElement(f.a,{path:"/SignUp",component:me}),r.a.createElement(D,{exact:!0,path:"/User/:id/Cars",component:se}),r.a.createElement(D,{exact:!0,path:"/User/:id/Cars/:carId/car",component:Pe}))))))}}]),t}(n.Component)),Te=Object(i.b)(function(e){return{auth:e.firebaseReducer.auth}})(Ge),Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ze(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(Te,{store:Ae}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/carcard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/carcard","/service-worker.js");Le?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ze(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ze(t,e)})}}()}},[[320,2,1]]]);
//# sourceMappingURL=main.ed754dea.chunk.js.map