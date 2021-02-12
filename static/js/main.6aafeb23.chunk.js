(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{17:function(e,t,i){},18:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(11),r=i.n(c),s=(i(17),i(6)),l=(i(18),i(26)),m=i(27),d=i(28),p=i(3),u=function(e){var t=e.city,i=e.setCity,n=e.fetchCityWeather,c=(e.click,e.setClick),r=a.a.useState(""),u=Object(s.a)(r,2),j=u[0],h=u[1];return Object(p.jsx)(l.a,{children:Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(m.a.Label,{children:"City"}),Object(p.jsx)(m.a.Control,{value:t,type:"text",placeholder:"Enter city",onChange:function(e){i(e.target.value)}}),Object(p.jsx)("p",{className:"text-danger",children:j})]}),Object(p.jsx)(d.a,{variant:"primary",onClick:function(e){c(!0),t?(h(""),n()):h("City field is empty")},children:"Submit"})]})})},j=function(e){var t=e.cityWeather,i=e.click,n=a.a.useState({city:"",humidity:"",temperature:"",feelsLike:"",minTemperature:"",maxTemperature:"",visibility:"",windSpeed:""}),c=Object(s.a)(n,2),r=c[0],m=c[1],d=a.a.useState(""),u=Object(s.a)(d,2),j=u[0],h=u[1];return a.a.useEffect((function(){i&&(t.hasOwnProperty("message")?(m({city:"",humidity:"",temperature:"",feelsLike:"",minTemperature:"",maxTemperature:"",visibility:"",windSpeed:""}),h("City not found")):t.hasOwnProperty("weather")&&(m({city:t.name,humidity:t.main.humidity+" %",temperature:(t.main.temp-273.15).toFixed(2)+" \xb0C",feelsLike:(t.main.feels_like-273.15).toFixed(2)+" \xb0C",minTemperature:(t.main.temp_min-273.15).toFixed(2)+" \xb0C",maxTemperature:(t.main.temp_max-273.15).toFixed(2)+" \xb0C",visibility:(parseInt(t.visibility)/1e3).toFixed(2)+" km",windSpeed:t.wind.speed+" km/h"}),h("")))}),[t]),Object(p.jsx)(l.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"text-danger text-center",children:j}),Object(p.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(p.jsxs)("p",{className:"d-inline p-4",children:["City Name: ",r.city]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Humidity: ",r.humidity]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Temperature: ",r.feelsLike]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Feels Like: ",r.temperature]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Minimum Temperature: ",r.minTemperature]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Maximum Temperature: ",r.maxTemperature]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Visibility: ",r.visibility]}),Object(p.jsxs)("p",{className:"d-inline p-4",children:["Wind Speed: ",r.windSpeed]})]})]})})};var h=function(){var e=a.a.useState(""),t=Object(s.a)(e,2),i=t[0],n=t[1],c=a.a.useState({}),r=Object(s.a)(c,2),l=r[0],m=r[1],d=a.a.useState(!1),h=Object(s.a)(d,2),o=h[0],x=h[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"text-center text-info",children:"Weather App"}),Object(p.jsx)(u,{city:i,setCity:n,fetchCityWeather:function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=963424f43671e87392a23f7c94544f2c")).then((function(e){return e.json()})).then((function(e){m(e)})).catch((function(e){console.log("Error is ",e)}))},click:o,setClick:x}),Object(p.jsx)(j,{cityWeather:l,click:o})]})},o=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),c(e),r(e)}))};i(23);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),o()}},[[24,1,2]]]);
//# sourceMappingURL=main.6aafeb23.chunk.js.map