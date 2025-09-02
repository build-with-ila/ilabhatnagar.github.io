
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Award, User, Briefcase, GraduationCap, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">Ila</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
            <User className="w-16 h-16 text-gray-500" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Ila</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dedicated professional with expertise in project management, business analysis, and team leadership. 
            Passionate about driving innovation and delivering exceptional results.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get In Touch
            </a>
            <a href="#experience" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Background</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a strong foundation in business operations and project management, I bring a unique blend 
                of analytical thinking and creative problem-solving to every challenge. My experience spans 
                across multiple industries, allowing me to adapt quickly and deliver results in diverse environments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am passionate about continuous learning and staying current with industry trends and best practices. 
                My approach focuses on building strong relationships, fostering collaboration, and driving 
                sustainable growth through strategic planning and execution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Briefcase className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <User className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600">Team Members Led</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Code className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Skills Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2022 - Present</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Business Analyst</h3>
                  <div className="text-gray-600 mb-4">Tech Solutions Inc.</div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Led cross-functional teams in implementing process improvements that increased efficiency by 35%</li>
                    <li>• Managed stakeholder relationships and facilitated communication between technical and business teams</li>
                    <li>• Developed comprehensive project documentation and requirements specifications</li>
                    <li>• Collaborated with senior leadership to align project outcomes with strategic business objectives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2020 - 2022</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Coordinator</h3>
                  <div className="text-gray-600 mb-4">Innovation Partners LLC</div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Coordinated multiple projects simultaneously while maintaining quality and meeting deadlines</li>
                    <li>• Implemented project tracking systems that improved visibility and accountability</li>
                    <li>• Facilitated client meetings and presentations, resulting in 95% client satisfaction rate</li>
                    <li>• Mentored junior team members and supported their professional development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2018 - 2020</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Operations Associate</h3>
                  <div className="text-gray-600 mb-4">StartUp Solutions</div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Supported daily operations and contributed to process optimization initiatives</li>
                    <li>• Conducted data analysis and prepared reports for management decision-making</li>
                    <li>• Assisted in vendor management and contract negotiations</li>
                    <li>• Participated in cross-training programs to develop diverse skill sets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Agile & Scrum Methodologies</li>
                <li>• Risk Assessment & Mitigation</li>
                <li>• Resource Planning & Allocation</li>
                <li>• Timeline Management</li>
                <li>• Quality Assurance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Data Analysis & Visualization</li>
                <li>• Microsoft Office Suite</li>
                <li>• SQL & Database Management</li>
                <li>• Process Mapping Tools</li>
                <li>• CRM Systems</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Team Leadership & Development</li>
                <li>• Strategic Planning</li>
                <li>• Stakeholder Management</li>
                <li>• Communication & Presentation</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <GraduationCap className="w-8 h-8 text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Business Administration</h3>
              <div className="text-gray-600 mb-2">State University</div>
              <div className="text-gray-500">2014 - 2018</div>
              <p className="text-gray-600 mt-4">
                Focused on Business Management, Operations Research, and Organizational Behavior. 
                Graduated Magna Cum Laude with honors.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Award className="w-8 h-8 text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Certifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Project Management Professional (PMP)</li>
                <li>• Certified Scrum Master (CSM)</li>
                <li>• Business Analysis Certification</li>
                <li>• Six Sigma Green Belt</li>
                <li>• Google Analytics Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and challenging projects. 
              Let's connect and discuss how we can work together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:ila.professional@email.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                ila.professional@email.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 transition-colors">
                +1 (234) 567-8900
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <span className="text-gray-600">New York, NY</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <ExternalLink className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2025 Ila. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;