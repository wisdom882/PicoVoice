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
  <div class="row">
  <div class="col-md-3 headings">
    <div class="col-md-12 title-block">
      <div class="option-text">PyTorch Build</div>
    </div>
    <div class="col-md-12 title-block">
      <div class="option-text os-text">Your OS</div>
    </div>
    <div class="col-md-12 title-block">
      <div class="option-text">Package</div>
    </div>
    <div class="col-md-12 title-block">
      <div class="option-text">Language</div>
    </div>
    <div class="col-md-12 title-block">
      <div class="option-text">Compute Platform</div>
    </div>
    <div class="col-md-12 title-block command-block">
      <div class="option-text command-text">Run this Command:</div>
    </div>
  </div>

  <div class="col-md-9">
    <div class="row ptbuild">
      <div class="col-md-12 title-block mobile-heading">
        <div class="option-text">PyTorch Build</div>
      </div>
      <div class="col-md-4 option block version selected" id="stable">
        <div class="option-text">Stable (1.11.0)</div>
      </div>
      <div class="col-md-4 option block version" id="preview">
        <div class="option-text">Preview (Nightly)</div>
      </div>
      <div class="col-md-4 option block version" id="lts">
        <div class="option-text">LTS (1.8.2)</div>
      </div>
    </div>
    <div class="row os">
      <div class="col-md-12 title-block mobile-heading">
        <div class="option-text">Your OS</div>
      </div>
      <div class="col-md-4 option block selected" id="linux">
        <div class="option-text">Linux</div>
      </div>
      <div class="col-md-4 option block" id="macos">
        <div class="option-text">Mac</div>
      </div>
      <div class="col-md-4 option block" id="windows">
        <div class="option-text">Windows</div>
      </div>
    </div>
    <div class="row package">
      <div class="col-md-12 title-block mobile-heading">
        <div class="option-text">Package</div>
      </div>
      <div class="col-md-3 option block" id="conda">
        <div class="option-text">Conda</div>
      </div>
      <div class="col-md-3 option block selected" id="pip">
        <div class="option-text">Pip</div>
      </div>
      <div class="col-md-3 option block" id="libtorch">
        <div class="option-text">LibTorch</div>
      </div>
      <div class="col-md-3 option block" id="source">
        <div class="option-text">Source</div>
      </div>
    </div>
    <div class="row language">
      <div class="col-md-12 title-block mobile-heading">
        <div class="option-text">Language</div>
      </div>
      <div class="col-md-6 option block version selected" id="python">
        <div class="option-text">Python</div>
      </div>
      <div class="col-md-6 option block" id="cplusplus">
        <div class="option-text">C++ / Java</div>
      </div>
    </div>
    <div class="row cuda">
      <div class="col-md-12 title-block mobile-heading">
        <div class="option-text">Compute Platform</div>
      </div>
      <div class="col-md-3 option block version selected" id="cuda10.2" style="">
        <div class="option-text">CUDA 10.2</div>
      </div>
      <div class="col-md-3 option block version" id="cuda11.x" style="">
        <div class="option-text">CUDA 11.3</div>
      </div>
      <div class="col-md-3 option block version" id="rocm4.x" style="">
        <div class="option-text">ROCM 4.5.2 (beta)</div>
      </div>
      <div class="col-md-3 option block version" id="accnone">
        <div class="option-text">CPU</div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 title-block command-mobile-heading">
        <div class="option-text">Run this Command:</div>
      </div>
      <div class="command-container">
        <div class="col-md-12" id="command"><pre>pip3 install torch torchvision torchaudio</pre></div>
      </div>
    </div>
  </div>
</div>
 );
}

export default App;
