import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  const badgeHeight = 22;
  const badgeWidths: Record<string, number> = {
    html: 70,
    css: 40,
    js: 95,      
    ts: 90,      
    react: 65,
    reactQuery: 100, 
    reactRouter: 105, 
    redux: 60,
    next: 60,
    vite: 50,

    node: 75,       
    express: 90,  
    mongoose: 100, 
    ejs: 50,
    python: 75,
    flask: 60,
    php: 50,

    mongodb: 95,   
    mysql: 70,

    git: 50,
    github: 70,
    postman: 80,

    c: 40,
    cpp: 60,
  };

  return (
    <div className='home flex flex-col items-start justify-start p-4 md:p-8'>

      <div className="intro text-4xl md:text-5xl font-bold mb-4">
        Hi, I am Kartik!
      </div>

      <div className="text-me text-lg md:text-xl max-w-2xl leading-relaxed mt-6 md:mt-10">
        <p className="mb-4">
          A <b>Programming Enthusiast</b> passionate about web development since school, I am on track to be a <b>Full-Stack developer</b>.
        </p>
        <p>
          My current focus is on <b>Backend</b> with <b>Next.js</b> and <b>DSA in C++</b>. Though new to the professional scene, I am highly motivated and ready to contribute to innovative web solutions.
        </p>
      </div>

      <div className="skills mt-12 md:mt-20 w-full">
        <h2 className="text-3xl font-semibold mb-6">My Skills:</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="skill-category">
            <h3 className="text-xl font-medium mb-2">Frontend</h3>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white"
                    alt="HTML5"
                    width={badgeWidths.html}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white"
                    alt="CSS3"
                    width={badgeWidths.css}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E"
                    alt="JavaScript"
                    width={badgeWidths.js}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&amp;logo=typescript&amp;logoColor=white"
                    alt="TypeScript"
                    width={badgeWidths.ts}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"
                    alt="React"
                    width={badgeWidths.react}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://tanstack.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white"
                    alt="React Query"
                    width={badgeWidths.reactQuery}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white"
                    alt="React Router"
                    width={badgeWidths.reactRouter}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://redux.js.org" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"
                    alt="Redux"
                    width={badgeWidths.redux}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white"
                    alt="Next.js"
                    width={badgeWidths.next}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white"
                    alt="Vite"
                    width={badgeWidths.vite}
                    height={badgeHeight}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="text-xl font-medium mb-2">Backend</h3>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white"
                    alt="Node.js"
                    width={badgeWidths.node}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=%2361DAFB"
                    alt="Express.js"
                    width={badgeWidths.express}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href='https://mongoosejs.com' target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    alt='mongoose'
                    src='https://img.shields.io/badge/Mongoose-100000?style=flat&logo=mongoose&logoColor=880000&labelColor=FFFFFF&color=880000'
                    width={badgeWidths.mongoose}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://ejs.co/" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/ejs-%23B4CA65.svg?style=flat&logo=ejs&logoColor=black"
                    alt="EJS"
                    width={badgeWidths.ejs}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://docs.python.org" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54"
                    alt="Python"
                    width={badgeWidths.python}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://flask.palletsprojects.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/flask-%23000.svg?style=flat&logo=flask&logoColor=white"
                    alt="Flask"
                    width={badgeWidths.flask}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.php.net" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/php-%23777BB4.svg?style=flat&logo=php&logoColor=white"
                    alt="PHP"
                    width={badgeWidths.php}
                    height={badgeHeight}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="text-xl font-medium mb-2">Databases</h3>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white"
                    alt="MongoDB"
                    width={badgeWidths.mongodb}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://dev.mysql.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white"
                    alt="MySQL"
                    width={badgeWidths.mysql}
                    height={badgeHeight}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="text-xl font-medium mb-2">Tools & VCS</h3>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white"
                    alt="Git"
                    width={badgeWidths.git}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://docs.github.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white"
                    alt="GitHub"
                    width={badgeWidths.github}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://learning.postman.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white"
                    alt="Postman"
                    width={badgeWidths.postman}
                    height={badgeHeight}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="text-xl font-medium mb-2">Other Languages</h3>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/c-%2300599C.svg?style=flat&logo=c&logoColor=white"
                    alt="C"
                    width={badgeWidths.c}
                    height={badgeHeight}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="cursor-pointer"
                    src="https://img.shields.io/badge/c++-%2300599C.svg?style=flat&logo=c%2B%2B&logoColor=white"
                    alt="C++"
                    width={badgeWidths.cpp}
                    height={badgeHeight}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </div> 
    </div> 
  );
};

export default Home;