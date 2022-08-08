import React from 'react';
import { Tldraw} from "@tldraw/tldraw";

function App() {
  return (
    <>
    <div><h1><center>Text tool for comics</center></h1></div>
    <br/>
    <div> <Tldraw
        autofocus
        disableAssets
        showPages={false}
      />
    </div>
  </>
  )
}

export default App;
