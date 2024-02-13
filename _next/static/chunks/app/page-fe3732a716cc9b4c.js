(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3659:function(e,t,r){Promise.resolve().then(r.bind(r,3874))},3874:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var s=r(7437),n=r(6691),l=r.n(n),a=()=>(0,s.jsxs)("header",{className:"flex mx-3.5 text-amaranth-600 font-fraunces",children:[(0,s.jsxs)("div",{className:"shrink-0",children:[(0,s.jsx)("h1",{className:"text-4xl tracking-[-0.07em] font-black hidden",children:"\xc7a Vibre"}),(0,s.jsx)(l(),{src:"/logo.svg",priority:!0,className:" translate-y-1",width:"134",height:"37",alt:"\xc7a Vibre logo"})]}),(0,s.jsx)("div",{className:"bg-wave grow ml-4 my-0.5"})]}),i=r(7334),o=(e,t)=>{if(!e)return[];let r=Object.entries(e),s=[];return r.forEach((e,t,r)=>{let[n,l]=e;if(0===t){s[0]=[l];return}if(r[t-1][1]===l){s[s.length-1].push(l);return}s.push([l])}),s.map(e=>e.length*t)},c=r(2265);let u={totalTimeMs:5e3,iterator:[5e3],speedRatio:1,slots:16},d=(0,c.createContext)(null),f=e=>{let{children:t}=e,[r,n]=(0,c.useState)(u),[l,a]=(0,c.useState)(0),[i,f]=(0,c.useState)(!1),[h,m]=(0,c.useState)({0:!0,1:!0,2:!0,3:!1,4:!0,5:!0,6:!1,7:!1,8:!0,9:!0,10:!0,11:!1,12:!0,13:!0,14:!1,15:!1}),x=(0,c.useMemo)(()=>r.totalTimeMs/r.slots,[r.totalTimeMs,r.slots]);return(0,c.useEffect)(()=>{let e=o(h,x);n(t=>({...t,iterator:e}))},[h,x,r.totalTimeMs]),(0,c.useEffect)(()=>{let e;return i||(clearInterval(e),a(0)),i&&(e=setInterval(()=>{a(e=>e+1)},r.totalTimeMs)),()=>{clearInterval(e),a(0)}},[i,r.totalTimeMs]),(0,s.jsx)(d.Provider,{value:{vibratorConfig:r,setVibratorConfig:n,loopCounter:l,setLoopCounter:a,isRunning:i,setIsRunning:f,selectedSlots:h,setSelectedSlots:m},children:t})},h=()=>{let e=(0,c.useContext)(d);if(!e)throw Error("useVibratorContext must be used within a VibratorContextProvider");return e};var m=r(2744),x=r.n(m),v={Play:()=>(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12.2727 5.23533C12.5929 5.40561 12.8607 5.6598 13.0475 5.97066C13.2342 6.28152 13.3329 6.63734 13.3329 7C13.3329 7.36266 13.2342 7.71848 13.0475 8.02934C12.8607 8.34021 12.5929 8.59439 12.2727 8.76467L3.73133 13.4093C2.356 14.158 0.666664 13.1847 0.666664 11.6453V2.35533C0.666664 0.815335 2.356 -0.157332 3.73133 0.590002L12.2727 5.23533Z",fill:"#FFF1F1"})}),Stop:()=>(0,s.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M2 0H10C11.1 0 12 0.9 12 2V10C12 11.1 11.1 12 10 12H2C0.9 12 0 11.1 0 10V2C0 0.9 0.9 0 2 0Z",fill:"#FFF1F1"})})},j=e=>{let{round:t=!0,icon:r,onClick:n}=e;return t?(0,s.jsx)("button",{onClick:n,className:"rounded-full h-14 w-14 bg-sulu-800 flex items-center justify-center",children:(0,s.jsx)(()=>{let e=r?v[r]:()=>(0,s.jsx)(s.Fragment,{});return(0,s.jsx)(e,{})},{})}):(0,s.jsx)("div",{children:"Button"})},g=()=>{let{isRunning:e,setIsRunning:t}=h();return(0,s.jsx)(j,{round:!0,icon:e?"Stop":"Play",onClick:()=>{t(!e)}})},w=()=>(0,s.jsxs)("div",{className:"player-grid relative z-20 pointer-events-none",children:[(0,s.jsx)("div",{className:"rounded-full bg-amaranth-400 border-2 border-sulu-800 w-3.5 h-3.5 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-2 h-2 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-2 h-2 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-2 h-2 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"}),(0,s.jsx)("div",{className:"rounded-full bg-amaranth-100 w-1 h-1 self-center justify-self-center"})]}),p=()=>{let{vibratorConfig:e,isRunning:t,loopCounter:r}=h(),n=(0,c.useRef)(null),[l,a]=(0,c.useState)(void 0);return(0,c.useEffect)(()=>{let r;let s=(e,t)=>{t&&cancelAnimationFrame(t),(null==e?void 0:e.current)&&(e.current.style.transform="")};if(!t||!(null==n?void 0:n.current)){s(n,r);return}return a(((e,t)=>{let s=performance.now(),n=()=>{let l=Math.min((performance.now()-s)/t,1);e.style.transform="translateX(".concat(-100+100*l,"%)"),l<1&&(r=requestAnimationFrame(n))};return n(),r})(n.current,e.totalTimeMs)),()=>{s(n,r)}},[t,n,e.totalTimeMs,r]),(0,s.jsx)("div",{ref:n,className:"absolute inset-0 select-none rounded-none w-full h-full touch-none pointer-events-none origin-left bg-amaranth-500 -translate-x-full"})},b=()=>{let{setIsRunning:e,vibratorConfig:t,selectedSlots:r,setSelectedSlots:n}=h(),[l,a]=(0,c.useState)(!1),[i,o]=(0,c.useState)(!1),[u,d]=(0,c.useState)(null),f=(e,t)=>{if(0!==e){if("negative"===t){n({...r,[e]:!1});return}if("positive"===t){n({...r,[e]:!0});return}}},m=e=>{a(!1),d(null)};return(0,s.jsx)("div",{className:"player-grid absolute z-10 inset-0 select-none touch-none",onPointerDown:t=>{t.target.releasePointerCapture(t.pointerId),e(!1),a(!0)},onPointerUp:m,onPointerLeave:m,children:[...Array(t.slots)].map((e,t,n)=>(0,s.jsx)("div",{onPointerDown:()=>{if(d(t),0===t){o(!0);return}if(!r[t]){o(!0),f(t,"positive");return}o(!1)},onPointerUp:()=>{l&&!i&&f(t,"negative")},onPointerEnter:()=>{l&&u!==t&&i&&f(t,"positive")},onPointerLeave:()=>{l&&!i&&f(t,"negative")},className:"flex items-center justify-center",children:(0,s.jsx)("div",{className:x()("pt-[100%] w-full relative"),children:(0,s.jsx)("div",{className:x()("safari-rounded-fix absolute -inset-0.5",{"border-amaranth-50":r[t],"border-amaranth-50/0":!r[t],"rounded-full border-2":!r[t-1]&&!r[t+1],"rounded-l-full border-l-2 border-y-2":!r[t-1],"rounded-r-full border-r-2 border-y-2":!r[t+1],"border-y-2":r[t-1]&&r[t+1]})})})},"player_sequencer_selection_grid_item_index_"+t))})},N=()=>(0,s.jsxs)("div",{className:" h-14 w-full bg-sulu-800 relative",children:[(0,s.jsx)(p,{}),(0,s.jsx)(w,{}),(0,s.jsx)(b,{})]}),y=e=>{let{...t}=e;return(0,s.jsx)("input",{type:"range",className:"range-slider",...t})},C=()=>{let{setVibratorConfig:e}=h();return(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(l(),{src:"./turtle.svg",width:"13",height:"19",alt:"turtle",className:"w-[15px] h-[21px]"}),(0,s.jsx)("div",{className:"mx-2.5 flex items-center",children:(0,s.jsx)(y,{onInput:t=>{let r=1e4-+t.target.value;e(e=>({...e,totalTimeMs:r}))},min:1e3,max:9e3,step:2e3})}),(0,s.jsx)(l(),{src:"./rabbit.svg",width:"15",height:"19",alt:"rabbit",className:"mb-1 w-[17px] h-[21px]"})]})},q=()=>{let{isRunning:e,vibratorConfig:t,loopCounter:r}=h(),{iterator:n}=t;return(0,c.useEffect)(()=>{var t,r,s,l;if((null===(t=navigator)||void 0===t?void 0:t.vibrate)&&"function"==typeof(null===(r=navigator)||void 0===r?void 0:r.vibrate)){if(!e){null===(l=navigator)||void 0===l||l.vibrate([]);return}null===(s=navigator)||void 0===s||s.vibrate(n)}},[e,n,r]),(0,s.jsx)(s.Fragment,{})},T=()=>{let{browserHasVibrateSupport:e}=(0,i.useBrowserSupportContext)();return(0,s.jsxs)(f,{children:[(0,s.jsxs)("div",{className:x()("relative rounded-4xl safari-rounded-fix overflow-hidden bg-atomic-tangerine-200 border-2 border-sulu-900",{"grayscale pointer-events-none select-none touch-none":!e}),children:[(0,s.jsx)(N,{}),(0,s.jsxs)("div",{className:"flex p-4 items-center",children:[(0,s.jsx)("div",{className:"grow",children:(0,s.jsx)("div",{className:"mx-2",children:(0,s.jsx)(C,{})})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(g,{})})]})]}),(0,s.jsx)(q,{})]})},S=()=>(0,s.jsx)("div",{className:"rounded-4xl bg-atomic-tangerine-700 text-white py-4 px-5",children:(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:" self-start",children:(0,s.jsx)("svg",{className:" fill-atomic-tangerine-200 inline-block mr-3",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,s.jsx)("path",{d:"M481-83Q347-218 267.5-301t-121-138q-41.5-55-54-94T80-620q0-92 64-156t156-64q45 0 87 16.5t75 47.5l-62 216h120l-34 335 114-375H480l71-212q25-14 52.5-21t56.5-7q92 0 156 64t64 156q0 48-13 88t-55 95.5q-42 55.5-121 138T481-83Zm-71-186 21-211H294l75-263q-16-8-33.5-12.5T300-760q-58 0-99 41t-41 99q0 31 11.5 62t40 70.5q28.5 39.5 77 92T410-269Zm188-48q111-113 156.5-180T800-620q0-58-41-99t-99-41q-11 0-22 1.5t-22 5.5l-24 73h116L598-317Zm110-363ZM294-480Z"})})}),(0,s.jsx)("span",{children:"This browser can't vibrate your device"})]}),(0,s.jsxs)("div",{className:"flex items-center mt-2",children:[(0,s.jsx)("div",{className:"self-start",children:(0,s.jsx)("svg",{className:" fill-amaranth-300 inline-block mr-3",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,s.jsx)("path",{d:"m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"})})}),(0,s.jsx)("span",{children:"Try Google Chrome"})]})]})});function P(){let{browserHasVibrateSupport:e}=(0,i.useBrowserSupportContext)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"grow flex flex-col justify-center",children:(0,s.jsxs)("main",{className:"mb-16",children:[(0,s.jsx)("section",{className:"container my-6",children:(0,s.jsx)(a,{})}),!e&&(0,s.jsx)("section",{className:"container my-4",children:(0,s.jsx)(S,{})}),(0,s.jsx)("section",{className:"container",children:(0,s.jsx)(T,{})})]})})})}},7334:function(e,t,r){"use strict";r.r(t),r.d(t,{BrowserSupportContextProvider:function(){return a},useBrowserSupportContext:function(){return i}});var s=r(7437),n=r(2265);let l=(0,n.createContext)(null),a=e=>{var t,r;let{children:a}=e,[i,o]=(0,n.useState)(!1),[c,u]=(0,n.useState)(!1),d="undefined"!=typeof navigator&&null!==(r=null===(t=navigator)||void 0===t?void 0:t.vibrate)&&void 0!==r?r:"";return(0,n.useEffect)(()=>{if(!d||"function"!=typeof d){o(!1),u(!0);return}return o(!0),u(!0),()=>{o(!1)}},[d]),(0,s.jsx)(l.Provider,{value:{browserHasVibrateSupport:i,browserSupportLoaded:c},children:c?a:(0,s.jsx)("section",{className:"grow flex items-center justify-center",children:(0,s.jsx)("div",{className:"animate-spin",children:(0,s.jsx)("svg",{className:" fill-amaranth-400",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:(0,s.jsx)("path",{d:"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"})})})})})},i=()=>{let e=(0,n.useContext)(l);if(!e)throw Error("useBrowserSupportContext must be used within a BrowserSupportContextProvider");return e}}},function(e){e.O(0,[860,971,938,744],function(){return e(e.s=3659)}),_N_E=e.O()}]);