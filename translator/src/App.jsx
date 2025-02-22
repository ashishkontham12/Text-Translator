import { useState } from "react"
import axios from "axios"

function App() {
  const [ textInput, setTextInput ] = useState("")
  const [selectValue, setSelectValue ] = useState("")
  const [ result, setResult ] = useState("")

  const handleTextTranslation = async () => {
    try{
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': '4385b89dbdmshc3270572e778f93p1414d9jsn91e979b0c9fa',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          q: textInput,
          source: 'en',
          target: selectValue,
          format: 'text'
        },
      };

      const response = await axios.request(options);
      console.log(response?.data?.data?.translations?.[Number(0)]?.translatedText)
      setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText)
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  console.log(textInput)
  console.log(selectValue)
   
  return(
    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">

      <div className="flex items-center justify-center flex-col gap-y-10 " >
        <h1 className="text-3xl text-zinc-700 font-bold">
          Text Translator
        </h1>

        <div className="flex items-center justify-center flex-col gap-y-5">
          <textarea name="input text" className="bg-white h-[120px] w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2" onChange={(e)=> setTextInput(e.target.value)}/>
          <textarea name="input text" className="bg-white h-[120px] w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2" value={result} readOnly/>
        </div>
        <div>
          <label htmlFor="options">Converted Intro: </label>
          <select name="value" className="bg-white px-2 py-1 rounded-1g border border-zinc-700 outline-none cursor-pointer " onChange={(e) => setSelectValue(e.target.value)} value={selectValue}>
            <option value="">Select</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>
        </div>

        <button className="bg-slate-700 text-slate-100 mx-auto w-[500px] py-1 rounded-lg cursor-pointer" onClick={handleTextTranslation}>Translate</button>
      </div>
    </div>
  );
}

export default App


