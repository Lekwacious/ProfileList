import React,{useState} from 'react'

function Note () {
   const [state, setstate] = useState({
       addComponent:false,
       searchComponent: false
   })
   const onClickHandler = (display)=>{
       setstate({
           ...state,
           [state]:true
       })
   }
    return (
        <div>
            {/* {state.addComponent == true?<Add/>:null}
            {state.searchComponent ===true?<Search/>:null} */}
            <button onClick={()=>onClickHandler('addComponent')}>addon|off</button>
            <button onClick={()=>onClickHandler('searchComponent')}>addon|off</button>

            <p>note</p>
        </div>
    )
}
export default Note