import {useContext, useState, createContext} from 'react'

export const AppContext = createContext()
export default function AppContextProvider({children}){
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

  const[os, setOs] = useState(OS)
  const[pkg, setPackage] = useState(Package)
  const[language, setLanguage] = useState(Language)
  const[computeplatform, setComputePlatform] = useState(ComputePlatform)

  function pytorchBuild(parent, child) {
    //stable //{'linux': [ 'stable', 'preview', 'lts'
    return Object.keys(parent).filter((key) => parent[key].indexOf(child) > -1);
  }
  return(
    <AppContext.Provider 
      value={{
        os, pkg, language, computeplatform, pytorchBuild, setOs, setPackage, setLanguage, setComputePlatform
      }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext)