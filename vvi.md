React roadmap
-> It is used to build complex frontend.
->It is a Single page application
Framework
->Naming,
Libary
->no naming
freeapi.app->open source

Hooks

1. useState =>state change effect UI
   =>declare state variables in functional components, and it also returns a pair of values:
   the current state and a function that allows you to update that state.
   => used in functional components to add state management to the component.
2. useCallback=> function between re-render,reuse function

3. useEffect => side effect in our components, It use two arguments Such as (function,dependency).
   example=>fetching data,timers,directly updating the DOM ,
4. useRef=> referance ,

5. useId =>generating unique id to passing attributes

   Link=> donot use refrash the page

6. useContext=>way to manage state globally

Redux=> pass the data in organized way,state management

React-redux=>to use like bridge in react,we can't spread previous value because all value are store in Store data
useSelector=select data
useDispatch=send data
First make
store=>configurestore
