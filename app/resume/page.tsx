import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 md:px-8 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold">Hîncu Ștefan</h1>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-6 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </div>

          <div className="mb-8">
            <p className="text-gray-600">
              hincustefan02@gmail.com | (+40) 756 239 643 | Cluj-Napoca, Romania |
              <Link href="https://github.com/" className="text-black hover:underline ml-1" target="_blank">
                Github
              </Link>
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">EDUCATION</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">Technical University of Cluj-Napoca</h3>
                <span>October 2022 – July 2026</span>
              </div>
              <p className="italic">Undergraduate, Computer Science and Information Technology</p>
              <ul className="list-disc list-inside mt-3 text-gray-600">
                <li>
                  Relevant Courses: Data Structures and Algorithms, Object-Oriented Programming, Fundamental Algorithms,
                  Databases, Fundamental Programming Techniques, Operating Systems
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">HACKATHONS</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">DevHacks – 1st Place</h3>
                <span>Nov 2022</span>
              </div>
              <ul className="list-disc list-inside mt-3 text-gray-600">
                <li>
                  Developed Office Room, a team management app, within 24 hours, using HTML, CSS and Django for fast
                  development.
                </li>
                <li>Users can create activities and earn points for attending in-person, encouraging on-site work.</li>
                <li>Learned Git and strengthened teamwork skills through collaborative project development.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">PROJECTS</h2>
            <div className="mb-8">
              <div className="flex justify-between">
                <h3 className="font-semibold">Habit Tracker (Cross-Platform Mobile Application)</h3>
                <span className="text-gray-600">Node.js, Express.js, MongoDB, Firebase, Git</span>
              </div>
              <p className="mt-2">
                Developed the REST API of a mobile application to help users track and improve their daily habits.
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-600">
                <li>Built habit creation, update and delete features, simplifying habit tracking for users.</li>
                <li>
                  Used Moment.js to automate daily stats and streaks, giving users instant feedback and motivation.
                </li>
                <li>Integrated JWT for secure logins, ensuring smooth and protected multi-device access for users.</li>
                <li>
                  Deployed the REST API on Firebase for scalable performance, providing user data protection and smooth
                  operation as the app grows.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">Find Your Lost Pet (Web Application)</h3>
                <span className="text-gray-600">Node.js, Express.js, MongoDB</span>
              </div>
              <p className="mt-2">
                Developed the REST API of a web application to help users find their lost pets by creating posts and
                messaging other users.
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-600">
                <li>Developed CRUD operations for posts and comments, enabling users to share information quickly.</li>
                <li>Implemented a messaging system, allowing users to easily communicate about lost pets.</li>
                <li>
                  Integrated email-based password recovery with token validation, giving users a secure and efficient
                  way to reset passwords.
                </li>
                <li>
                  Learned to implement JWT for secure login and used npm packages like Helmet, express-rate-limit and
                  xss-clean to protect users and enhance app security.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-6 border-b pb-2">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Programming Languages:</span> JavaScript, Python, Java
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Backend Development:</span> Node.js, Express.js, RESTful APIs
                </p>
                <p>
                  <span className="font-semibold">Databases:</span> MySQL, MongoDB
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Tools:</span> Git, Github, VS Code, Postman, Firebase
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Operating Systems:</span> Unix/Linux
                </p>
                <p>
                  <span className="font-semibold">Soft Skills:</span> Skilled in clear communication, teamwork and
                  quickly learning new programming languages to solve complex problems in dynamic environments.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

