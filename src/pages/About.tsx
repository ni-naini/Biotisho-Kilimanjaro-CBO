import React from 'react';
import { Target, Eye, Users, Heart, Shield, HandHeart, Globe, Award } from 'lucide-react';

const About = () => {
  const objectives = [
    "To enhance hygiene education and awareness to help fight diseases like dysentery, Cholera, Diarrhea, Typhoid and others which claims lives every year.",
    "To promote proper waste management practices.",
    "To improve sanitation infrastructure in schools and in public places.",
    "To influence policy making with rightful stakeholders to safe guard water sources to prevent water pollution upstream.",
    "To promote conservation of the environment by participating in community initiatives like tree planting, garbage collection to create a health risk free environment.",
    "To increase access to clean and safe water to drink.",
    "To support water conservation efforts.",
    "To improve management of hypertension and diabetes.",
    "To increase awareness and education on NCDs prevention and control.",
    "To strengthen health systems to address WASH and NCDs.",
    "To improve community engagements and participation in WASH and NCDs initiative."
  ];

  const goals = [
    "Universal access to clean water and safe sanitation",
    "Improved sanitation facilities",
    "Promoting good hygiene practices",
    "Influence policy making to safe guard water sources",
    "Prevention and awareness on NCDs",
    "Early detection and diagnosis of NCDs",
    "Effective Management and treatment of NCDs through referrals and linkages",
    "Mobilize for resources",
    "Foster partnerships with organizations, individuals, Governments locally and internationally"
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Community Centered Approach",
      description: "Prioritizing the needs and well-being of the community in all our initiatives."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Respect and Dignity",
      description: "Treating all community members with respect and dignity regardless of their background."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Inclusivity and Equity",
      description: "Ensuring that all community members have equal access to resources and opportunities."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Transparency and Accountability",
      description: "Being honest and open in decision making and actions with clear accountability."
    },
    {
      icon: <HandHeart className="w-8 h-8 text-purple-600" />,
      title: "Sustainability",
      description: "Focusing on long-term solutions and environmental stewardship for future generations."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Empowerment",
      description: "Building capacity and empowering community members to take ownership of their health and well-being."
    }
  ];

  const coreValues = [
    {
      title: "Compassion",
      description: "Showing empathy and care for the community in all our interactions and programs."
    },
    {
      title: "Integrity",
      description: "Acting with honesty, transparency and ethics in all our operations and relationships."
    },
    {
      title: "Accountability",
      description: "Taking responsibility for our actions and outcomes, ensuring measurable impact."
    },
    {
      title: "Respect",
      description: "Valuing diversity, dignity and human rights in every aspect of our work."
    }
  ];

  const timeline = [
    {
      year: "2017",
      title: "Foundation",
      description: "Biotisho Kilimanjaro CBO was founded by trained community health promoters from Isinet health unit.",
      image: "/foundation.jpg"
    },
    {
      year: "2019",
      title: "First Programs",
      description: "Launched initial WASH education programs and began NCDs awareness campaigns in local communities.",
      image: "/1stProgram.png"
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Extended operations to cover both Imbirikani/Eselenkei and Entonet/Lenkisim wards.",
      image: "/expansion.jpg"
    },
    {
      year: "2023",
      title: "Infrastructure",
      description: "Completed first water points and sanitation facilities in partnership with local government.",
      image: "/waterpoint.png"
    },
    {
      year: "2025",
      title: "Today",
      description: "Serving over 20,000 community members with comprehensive WASH and NCDs programs.",
      image: "/today.jpg"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/6995104/pexels-photo-6995104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">About Biotisho</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Building healthier communities through local action, education, and sustainable solutions in Kajiado County.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 p-3 rounded-xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Improving lives through sustainable WASH solutions that promote health, dignity and quality
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-xl mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where clean water, safe sanitation and healthy lives are for all.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From identifying community health gaps to becoming a leading force for positive change in Kajiado County.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl shadow-xl w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specific, measurable goals that guide our daily operations and long-term planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="bg-teal-100 p-2 rounded-full flex-shrink-0 mt-1">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Long-term aspirations that define the impact we aim to achieve in our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and shape our organizational culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;