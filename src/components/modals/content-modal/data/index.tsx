import type { Project } from '../../../../types';
import { getTotalSize } from '../../../../lib/getTotalSize';
import PaintModal from '../../paint-modal';
import RecycleBin from '../../recycle-bin';
// import resumePDF from '../../../../assets/Roya_Azemi_Resume.pdf';

const projects: (Project & {
  github: string;
  live?: string;
})[] = [
  {
    id: 0,
    name: 'Retro Portfolio',
    iconSrc: '/project-icons/portfolio.png',
    color: 'bg-violet-400',
    size: '553 KB',
    description: 'A unconventional retro style portfolio with a few personal twists!',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/roya-profile',
  },
  {
    id: 1,
    name: 'Donation App (in progress)',
    iconSrc: '/project-icons/donation.png',
    color: 'bg-pink-300',
    size: '38.2 MB',
    description:
      'A centralized platform for discovering and supporting charitable causes, helping users find donation opportunities easily and make an impact.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/donation-app',
    live: 'https://donation-app-nu.vercel.app/home',
  },
  {
    id: 2,
    name: 'Healthcare Dashboard',
    iconSrc: '/project-icons/healthcare.png',
    color: 'bg-sky-300',
    size: '218 KB',
    description: 'A digital healthcare management platform dashboard.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Roya9022/healthcare-dashboard',
  },
];

export const WINDOW_CONTENT: Record<
  string,
  {
    title: string;
    headerColor?: string;
    content: React.ReactNode;
    footer?: React.ReactNode;
    noPadding?: boolean;
    width?: string;
    height?: string;
  }
> = {
  projects: {
    title: 'C:\\My Projects',
    headerColor: 'from-teal-500 to-teal-200',
    content: (
      <div className='space-y-3'>
        {projects.map((project) => (
          <a key={project.id} href={project.github} target='_blank' rel='noopener noreferrer' className='block'>
            <div className='flex items-start gap-3 p-2 hover:bg-blue-100 border border-transparent hover:border-dotted hover:border-blue-400 cursor-pointer group'>
              <div
                className={`w-10 h-10 min-w-10 ${project.color} border-2 border-black flex items-center justify-center shadow-sm`}>
                <img
                  src={project.iconSrc}
                  alt={project.name}
                  className='w-9 h-9 object-contain [image-rendering:pixelated]'
                />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex justify-between items-center mb-1'>
                  <h3 className='font-bold text-sm text-purple-900 group-hover:underline'>{project.name}</h3>
                  <span className='text-[10px] text-gray-600 bg-gray-100 px-2 py-0.5 border border-gray-300'>
                    {project.size}
                  </span>
                </div>
                <p className='text-sm text-gray-700 mb-2'>{project.description}</p>
                <div className='flex flex-wrap gap-2 items-center'>
                  {project.tags.map((tag) => (
                    <span key={tag} className='text-xs bg-blue-100 text-blue-800 px-2 py-0.5 border border-blue-200'>
                      {tag}
                    </span>
                  ))}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      className='text-xs bg-green-100 text-green-800 px-2 py-0.5 border border-green-300 hover:bg-green-200'>
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    ),
    footer: (
      <div className='flex justify-between text-xs text-gray-600 px-2 py-1 bg-gray-200 border-t border-gray-400'>
        <span>{projects.length} object(s)</span>
        <span>{getTotalSize(projects)}</span>
      </div>
    ),
  },

  about: {
    title: 'C:\\About Me',
    headerColor: 'from-purple-700 to-purple-300',
    content: (
      <div className='font-mono text-sm space-y-4 max-h-120 overflow-y-auto pr-2 scrollbar-retro'>
        <h2 className='text-xl font-bold text-purple-500 mb-4'>A Little About Me...</h2>
        <p className='text-gray-700 mb-4'>
          My name is Roya and I'm a front-end software engineer with a passion for creating engaging and functional web
          experiences. I love writing code, solving tricky bugs, exploring design systems, and learning something new
          every day. I enjoy working in teams and sharing knowledge because collaboration brings the best ideas to life.
        </p>
        <p className='text-gray-700 mb-4'>
          As a 90s kid, I spent countless hours on the computer playing games like <em>RollerCoaster Tycoon</em> and
          drawing in Paint. I remember in elementary school, computer class my favorite moments were when we got to use
          Paint and create whatever we wanted, then take our drawings home on a floppy disk. For that reason I knew I
          had to add it! This portfolio is a reflection of what first made me fall in love with computers and serves as
          a small homage to those early days that sparked my passion for technology.
        </p>
        <p className='text-gray-700 mb-4'>
          Outside of coding, I enjoy reading, playing video games, working out (trying :D), listening to all kinds of
          music, taking photos, doing crafts like knitting (only scarves for now), and spending time with my cat Felix.
          I am naturally curious, positive, and always striving to improve both my technical and soft skills.
        </p>
        <p className='text-gray-700 mb-4'>
          Thank you for taking the time to look through my profile. I hope you enjoy exploring my work as much as I
          enjoyed creating it.
        </p>
      </div>
    ),
  },

  contact: {
    title: 'C:\\Contact Me',
    headerColor: 'from-fuchsia-500 to-fuchsia-300',
    content: (
      <div className='space-y-3'>
        <a
          href='mailto:azemiroya@gmail.com'
          className='flex items-center gap-3 p-3 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200'>
          <span className='text-xl'>📧</span>
          <div>
            <div className='font-bold text-xs text-gray-600'>Email</div>
            <div className='text-sm text-gray-800'>azemiroya@gmail.com</div>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/roya-azemi/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-3 p-3 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200'>
          <span className='text-xl'>💼</span>
          <div>
            <div className='font-bold text-xs text-gray-600'>LinkedIn</div>
            <div className='text-sm text-gray-800'>linkedin.com/in/roya9022</div>
          </div>
        </a>
      </div>
    ),
  },

  resume: {
    title: 'C:\\Resume.txt',
    headerColor: 'from-gray-700 to-gray-400',
    content: (
      <div className='font-mono text-sm space-y-4 max-h-105 overflow-y-auto pr-2 scrollbar-retro'>
        <div>
          <h2 className='text-lg font-bold uppercase'>ROYA AZEMI</h2>
          <p className='font-bold'>Front-End Software Engineer</p>
          <p className='text-gray-600'>+1 484-843-3993 | Fruitland, MD</p>
          <p className='text-gray-600'>azemiroya@gmail.com | linkedin.com/in/roya-azemi/</p>
        </div>

        <p className='text-gray-700'>
          Front-End Software Engineer with 4+ years of experience building scalable, high-traffic web applications used
          by millions of users. Specialized in React and TypeScript, with expertise in performance optimization, design
          systems, and building reusable, maintainable architectures.
        </p>
        <div className='border-b-2 border-black pb-1 font-bold'>EXPERIENCE</div>
        <div>
          <div className='flex justify-between font-bold'>
            <span>Front-End Software Engineer — Digikala</span>
            <span>Oct 2024 – Jul 2025</span>
          </div>
          <p className='italic text-gray-600 text-[12px]'>E-commerce platform with 40M+ monthly visitors</p>
          <ul className='list-disc pl-4 space-y-1'>
            <li>
              Architected scalable front-end features for Transportation and Admin Platforms using React and Zustand.
            </li>
            <li>
              Built interactive dashboards with Chart.js and TanStack Table featuring sortable tables and visual
              tracking.
            </li>
            <li>Developed admin tools for station data and geo-location using React Leaflet.</li>
            <li>Developed WCAG 2.1-compliant UI components with Tailwind CSS and Storybook.</li>
            <li>
              Collaborated cross-functionally to translate design concepts into systems supporting millions of users.
            </li>
          </ul>
        </div>
        <div>
          <div className='flex justify-between font-bold'>
            <span>Front-End Developer — Tosan Techno</span>
            <span>Jul 2024 – Oct 2024</span>
          </div>
          <p className='italic text-gray-600 text-[12px]'>Fintech / Virtual Banking provider</p>
          <ul className='list-disc pl-4 space-y-1'>
            <li>
              Refactored and unified two state machines into a single robust system to simplify debugging and reduce
              errors.
            </li>
            <li>Enhanced component reusability and centralized state management to strengthen scalability.</li>
          </ul>
        </div>
        <div>
          <div className='flex justify-between font-bold'>
            <span>Front-End Developer — Ramzinex</span>
            <span>Feb 2021 – Apr 2024</span>
          </div>
          <p className='italic text-gray-600 text-[12px]'>Founding Crypto Exchange with 2M+ active users</p>
          <ul className='list-disc pl-4 space-y-1'>
            <li>
              Redesigned core PWA financial pages (Wallet, Portfolio, etc.), reducing user-reported errors by ~35%.
            </li>
            <li>
              Engineered API Management modules handling authentication and endpoint validation using TypeScript and
              Redux.
            </li>
            <li>Built Next.js onboarding flows, increasing mobile sign-up completion by ~50%.</li>
            <li>Implemented a lightweight in-app feedback system using Google Sheets API.</li>
            <li>Optimized performance via code-splitting and lazy loading, reducing load times by ~20%.</li>
            <li>Improved SEO through dynamic meta tags, structured data, and SSR/SSG implementation.</li>
            <li>Integrated automated testing with Jest and React Testing Library to improve reliability.</li>
          </ul>
        </div>

        <div className='border-b-2 border-black pb-1 font-bold'>PERSONAL PROJECTS</div>
        <div>
          <p className='font-bold'>Charity Finder — Next.js, TypeScript, Material-UI</p>
          <p>Developing a production-ready platform featuring dynamic routing and filtering for 50+ organizations.</p>
          <p>Designed end-to-end for scalability and accessibility, deployed with CI/CD on Vercel.</p>
        </div>

        <div className='border-b-2 border-black pb-1 font-bold'>EDUCATION</div>
        <ul className='space-y-1'>
          <li>
            <strong>M.Sc. Electrical Energy Systems</strong> — Amirkabir University of Technology
          </li>
          <li>
            <strong>B.Sc. Electrical Engineering</strong> — International University of Imam Reza
          </li>
          <li>
            <strong>Certificate in JS/HTML/CSS</strong> — Tehran Institute of Technology
          </li>
        </ul>

        <div className='border-b-2 border-black pb-1 font-bold'>SKILLS</div>
        <div className='space-y-1'>
          <p>
            <strong>Languages/Tech:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, PWA.
          </p>
          <p>
            <strong>UI/State:</strong> Material-UI, Tailwind CSS, Storybook, TanStack Table, Redux, Zustand, React
            Query.
          </p>
          <p>
            <strong>Tools/Other:</strong> Git, Jest, CI/CD, Agile/Scrum, SEO (SSR/SSG), WCAG 2.1 Compliance.
          </p>
          <p>
            <strong>Learning:</strong> AWS, LLMs & AI integration.
          </p>
        </div>

        {/* 
        <div className='bg-gray-100 border-2 border-gray-400 p-3 text-center mt-4'>
          <a
            href={resumePDF}
            download
            // target='_blank'
            className='inline-block px-4 py-2 bg-gray-300 border-2 border-white border-r-gray-600 border-b-gray-600 hover:bg-gray-200 active:border-l-gray-600 active:border-t-gray-600 active:border-r-white active:border-b-white'>
            Download Full Resume (PDF)
          </a>
        </div> */}
      </div>
    ),
  },
  paint: {
    title: 'C:\\Untitled - Paint',
    headerColor: 'from-neutral-700 to-neutral-300',
    content: <PaintModal />,
    noPadding: true,
    width: 'w-[70vw] md:w-[700px]',
    height: 'aspect-[4/3]',
  },

  recycle: {
    title: 'C:\\Recycle Bin',
    headerColor: 'from-amber-300 to-amber-100',
    content: <RecycleBin />,
  },
};
