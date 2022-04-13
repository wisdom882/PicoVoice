import logo from './logo.svg';
import './App.css';


let OS = {
  linux: ["stable", "preview", "lts"],
  mac: ["stable","preview", "lts"],
  windows: ["stable", "preview", "lts"],
};

let Package = {
    conda: ["linux", "mac", "window" ],
    pip: ["linux", "mac", "window" ],
    libTorch: ["linux", "mac", "window" ],
    source: ["linux", "mac", "window" ],

}

let Language = {
  python: ["conda", "pip", "source"],
  cppJava:["libTorch"],
}

let ComputePlatform = {
  cuda10:["python","cppJava"],
  cuda11:["python","cppJava"],
  rocmbeta:["python","cppJava"],
  cpu:["python","cppJava"],
}

function pytorchBuild(parent, build) {
  //stable //{'linux': [ 'stable', 'preview', 'lts'
  return Object.keys(parent).filter((key) => parent[key].indexOf(build) > -1);
}

function App() {
 return(
<div className="row">
    <div className="col-md-3 headings">
      <div className="col-md-12 title-block">
        <div className="option-text">PyTorch Build</div>
      </div>
      <div className="col-md-12 title-block">
        <div className="option-text os-text">Your OS</div>
      </div>
      <div className="col-md-12 title-block">
        <div className="option-text">Package</div>
      </div>
      <div className="col-md-12 title-block">
        <div className="option-text">Language</div>
      </div>
      <div className="col-md-12 title-block">
        <div className="option-text">Compute Platform</div>
      </div>
      <div className="col-md-12 title-block command-block">
        <div className="option-text command-text">Run this Command:</div>
      </div>
    </div>

    <div className="col-md-9">
      <div className="row ptbuild">
        <div className="col-md-12 title-block mobile-heading">
          <div className="option-text">PyTorch Build</div>
        </div>
        <div className="col-md-4 option block version selected" id="stable">
          <div className="option-text">Stable (1.11.0)</div>
        </div>
        <div className="col-md-4 option block version" id="preview">
          <div className="option-text">Preview (Nightly)</div>
        </div>
        <div className="col-md-4 option block version" id="lts">
          <div className="option-text">LTS (1.8.2)</div>
        </div>
      </div>
      <div className="row os">
        <div className="col-md-12 title-block mobile-heading">
          <div className="option-text">Your OS</div>
        </div>
        <div className="col-md-4 option block selected" id="linux">
          <div className="option-text">Linux</div>
        </div>
        <div className="col-md-4 option block" id="macos">
          <div className="option-text">Mac</div>
        </div>
        <div className="col-md-4 option block" id="windows">
          <div className="option-text">Windows</div>
        </div>
      </div>
      <div className="row package">
        <div className="col-md-12 title-block mobile-heading">
          <div className="option-text">Package</div>
        </div>
        <div className="col-md-3 option block" id="conda">
          <div className="option-text">Conda</div>
        </div>
        <div className="col-md-3 option block selected" id="pip">
          <div className="option-text">Pip</div>
        </div>
        <div className="col-md-3 option block" id="libtorch">
          <div className="option-text">LibTorch</div>
        </div>
        <div className="col-md-3 option block" id="source">
          <div className="option-text">Source</div>
        </div>
      </div>
      <div className="row language">
        <div className="col-md-12 title-block mobile-heading">
          <div className="option-text">Language</div>
        </div>
        <div className="col-md-6 option block version selected" id="python">
          <div className="option-text">Python</div>
        </div>
        <div className="col-md-6 option block" id="cplusplus">
          <div className="option-text">C++ / Java</div>
        </div>
      </div>
      <div className="row cuda">
        <div className="col-md-12 title-block mobile-heading">
          <div className="option-text">Compute Platform</div>
        </div>
        <div className="col-md-3 option block version selected" id="cuda10.2">
          <div className="option-text">CUDA 10.2</div>
        </div>
        <div className="col-md-3 option block version" id="cuda11.x">
          <div className="option-text">CUDA 11.3</div>
        </div>
        <div className="col-md-3 option block version" id="rocm4.x">
          <div className="option-text">ROCM 4.5.2 (beta)</div>
        </div>
        <div className="col-md-3 option block version" id="accnone">
          <div className="option-text">CPU</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 title-block command-mobile-heading">
          <div className="option-text">Run this Command:</div>
        </div>
        <div className="command-container">
          <div className="col-md-12" id="command"><pre>pip3 install torch torchvision torchaudio</pre></div>
        </div>
      </div>
    </div>
</div>
 );
}

export default App;
