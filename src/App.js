import React from 'react'
import './App.css';
import AppContextProvider from './Context/appContext';
import Appbutton from './Component/button.component';

function App() {

 return(
  <AppContextProvider>
    <div className="container">
        <div className="col-md-3 headings">
          <div className="left-heading-border">
            <div className="">PyTorch Build</div>
          </div>
          <div className="left-heading-border">
            <div className="">Your OS</div>
          </div>
          <div className="left-heading-border">
            <div className="">Package</div>
          </div>
          <div className="left-heading-border">
            <div className="">Language</div>
          </div>
          <div className="left-heading-border">
            <div className="">Compute Platform</div>
          </div>
          <div className="left-heading-border-black">
            <div className=" c">Run this Command:</div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row ptbuild">
            <div className="structure width-33" id="stable">
              <div className=""><Appbutton parent="os" name="Stable (1.11.0)" visible="true" ></Appbutton></div>
            </div>
            <div className="structure width-33" id="preview">
              <div className="">Preview (Nightly)</div>
            </div>
            <div className="structure width-33" id="lts">
              <div className="">LTS (1.8.2)</div>
            </div>
          </div>
          <div className="row os">
            <div className="structure width-33" id="linux">
              <div className="">Linux</div>
            </div>
            <div className="structure width-33" id="macos">
              <div className="">Mac</div>
            </div>
            <div className="structure width-33" id="windows">
              <div className="">Windows</div>
            </div>
          </div>
          <div className="row package">
            <div className="structure width-25" id="conda">
              <div className="">Conda</div>
            </div>
            <div className="structure width-25" id="pip">
              <div className="">Pip</div>
            </div>
            <div className="structure width-25" id="libtorch">
              <div className="">LibTorch</div>
            </div>
            <div className="structure width-25" id="source">
              <div className="">Source</div>
            </div>
          </div>
          <div className="row language">
            <div className="structure width-50"  id="python">
              <div className="">Python</div>
            </div>
            <div className="structure width-50" id="cplusplus">
              <div className="">C++ / Java</div>
            </div>
          </div>
          <div className="row cuda">
            <div className="structure width-25" id="cuda10.2">
              <div className="">CUDA 10.2</div>
            </div>
            <div className="structure width-25" id="cuda11.x">
              <div className="">CUDA 11.3</div>
            </div>
            <div className="structure width-25" id="rocm4.x">
              <div className="">ROCM 4.5.2 (beta)</div>
            </div>
            <div className="structure width-25" id="accnone">
              <div className="">CPU</div>
            </div>
          </div>
          <div className="row">
            <div className="command-container width-100">
              <div className="structure" id="command"><pre>pip3 install torch torchvision torchaudio</pre></div>
            </div>
          </div>
        </div>
    </div>
  </AppContextProvider> 
 );
}

export default App;
