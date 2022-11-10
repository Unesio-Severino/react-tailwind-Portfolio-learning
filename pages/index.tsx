import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import Image from "next/image";
import deved from "../public/afro-avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
// import deved from "../public/dev-ed-wave.png";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Unésio Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* PROFILE */}

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Unésio Mucutueliua</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resumo
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Unésio Mucutueliua
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Desenvolvedor web & Desenvolvedor de aplicações.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Sou Desenvolvedor web, desenvolvedor de aplicações, jovem criativo
              e inovador com muita paixão pela tecnologia, desenho. Trabalho com
              desenvolvimento de softwares deste 2020. Entre em contacto comigo
              pelos serviços abaixo.
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>

          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 font-medium dark:text-teal-400 dark:text-white">Meus Serviços</h3>
             <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Desde o inicio da minha jornada como programador web, eu ja
              trabalhei como desenvolvedor freelance e suporte remoto
            e colaborei em pequenos <span className="text-teal-500">projetos. </span>
              Mas a maioria deles sao projetos de ideias próprias. Também ofereço serviços de analise,
              diagnostico e reparação de equipamentos computadores.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-dark text-lg font-medium pt-8 pb-2  ">
                <b>Designs Responsivos</b>
              </h3>
              <p className="py-2">
                Criando Belíssimos designs que deixam tuas paginas super vivas.
              </p>
              <h4 className="py-4 text-teal-700">Ferramentas</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                <b>Desenvolvimento Web e Aplicações dos seus sonhos</b>
              </h3>
              <p className="py-2">
                Criando soluções, e desenvolvendo aplicações para diversos
                clientes.
              </p>
              <h4 className="py-4 text-teal-700">Linguagens</h4>
              <p className="text-gray-800 py-1">React Native</p>
              <p className="text-gray-800 py-1">Android</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">HTML, CSS</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                <b>Treinamentos</b>
              </h3>
              <p className="py-2">
                Treinamento de equipes.
              </p>
              <h4 className="py-4 text-teal-700">Minhas Ferramentas</h4>
              <p className="text-gray-800 py-1">Analisar</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
          </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-700 font-medium dark:text-teal-400dark:text-white">Meu Portfólio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Sao destacados alguns projectos por mim desenvolvidos,
              e muitos deles podes encontrar nos meus repositorios
              <span className="text-teal-500"> Github</span>.
            </p>
          </div>
          <div className="flex flex-col gap-11 py-11 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
