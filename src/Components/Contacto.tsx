import Foother from "./Footer/Foother";
import Nav from "./Nav/Nav";

export default function Contacto() {
  return (
    <div className="overflow-y-auto">
      <Nav></Nav>
      <div>
        <div className=" flex flex-col  items-center justify-center  text-center  mt-40">
          <h1 className=" text-[#F19209] text-5xl font-semibold animate-pulse  ">
            Contacte-nos
          </h1>
          <div className="drop-shadow-lg  text-gray-500 text-lg">
            {" "}
            <p>Sinta-se a vontade, estamos a sua disposição </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center  items-center flex-col space-x-10 mb-20 ">
        <form
          action="post"
          className="mx-auto h-auto mt-[10%] border-2  mb-40 w-[30%] space-y-5 p-4 flex flex-col shadow-md rounded-xl"
        >
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name=""
            id=""
            className="border  border-gray-200 p-2 rounded-lg"
          />
          <label htmlFor="email">Contacto</label>
          <input
            type="tel"
            name=""
            id=""
            className="border border-gray-200 p-2 rounded-lg"
            placeholder=""
          />
          <label htmlFor="summer">Assunto</label>
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-200 p-2 rounded-lg"
          />
          <label htmlFor="messge">Messagem</label>
          <textarea
            name=""
            id=""
            className="border border-gray-200 p-2 rounded-lg "
          ></textarea>
          <button className="bg-[#F19209] hover:text-white p-2 rounded-lg">
            Enviar Messagem{" "}
          </button>
        </form>
      </div>

      <Foother></Foother>
    </div>
  );
}
