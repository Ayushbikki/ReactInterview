import React ,{memo} from 'react'

function Child({count2,checkChild}) {
    console.log('child component render')  // on button click in parent component every time child component render
    //to prevent this
  return (
    <div>Child</div>
  )
}

export default memo(Child)