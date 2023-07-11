import { Area, Header, Legend, Map } from "../components";

function App() {

  return (
    <>
      <body className="bg-blue-400 px-14 py-9">
        <Header />
        <div className="flex">
          <div className="w-0 flex-grow m-4">
            <Legend />
            <Area name="田鶴浜" />
            <Area name="鹿島" />
          </div>
          <div className="w-0 flex-grow m-4">
          <Map img="nanao.png" />
          </div>
          <div className="w-0 flex-grow m-4">
            <Area name="能登島" />
            <Area name="石崎" />
            <Area name="大田" />
            <Area name="七尾" />
          </div>
        </div>
      </body>
    </>
  );
}

const plant = () => {
  return (
    <p>hello</p>
  )
}

export default App;
