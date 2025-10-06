import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Droplets, TreePine, Activity, Shield, HeartHandshake, ChevronRight, Calendar } from 'lucide-react';

const Homepage = () => {
  const [counters, setCounters] = useState({
    people: 0,
    waterPoints: 0,
    trees: 0,
    screenings: 0
  });

  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(20000, (value) => setCounters(prev => ({ ...prev, people: value })));
            animateCounter(18, (value) => setCounters(prev => ({ ...prev, waterPoints: value })));
            animateCounter(12000, (value) => setCounters(prev => ({ ...prev, trees: value })));
            animateCounter(10000, (value) => setCounters(prev => ({ ...prev, screenings: value })));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const focusAreas = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: 'WASH',
      subtitle: 'Water, Sanitation & Hygiene',
      description: 'Promoting access to clean water, proper sanitation, and hygiene education to prevent waterborne diseases.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: 'NCDs',
      subtitle: 'Non-Communicable Diseases',
      description: 'Prevention, early detection, and management of diabetes and hypertension through community health initiatives.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: 'Environment restoration',
      subtitle: 'Climate action',
      description: 'Environment restoration and cleaning especially water sources so at the downstream communities can access clean water',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Matayo Melita',
      role: 'Nyumba Kumi',
      quote: 'Biotisho CBO has united our community, making it safer, healthier, and more empowered to work together for a better future.',
      image: '/SaruniMeoli.jpg'
    },
    {
      name: 'Richard Sarbabi',
      role: 'Local Leader',
      quote: 'The NCDs screening program helped detect my diabetes early. I am grateful for the referral and continued support.',
      image: '/RichardSarbabi.jpg'
    },
    {
      name: 'Moses Leparakuo',
      role: 'School Teacher',
      quote: 'The sanitation improvements in our school have reduced student absenteeism and created a healthier learning environment.',
      image: '/MosesLeparakuo.jpg'
    }
  ];

  const getInvolvedOptions = [
    // {
    //   icon: <Users className="w-8 h-8 text-teal-600" />,
    //   title: 'Volunteer',
    //   description: 'Join our community health promoters and make a direct impact in improving lives.',
    //   cta: 'Join Us'
    // },
    {
    icon: <HeartHandshake className="w-8 h-8 text-orange-500" />,
    title: 'Donate',
    description: 'Support our programs with your generous contribution.',
    cta: <Link to="/donate" className="btn btn-primary">Donate Now</Link>
  },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'Partner',
      description: 'Collaborate with us to amplify our impact and reach more communities.',
      cta: <Link to="/get-involved" className="btn btn-primary">Partner With Us</Link>
    }
  ];

  const news = [
    {
      title: 'New Water Point Completed in Kalesirua Village',
      summary: 'Community members now have access to clean water within walking distance, reducing waterborne diseases by 40%.',
      date: '2023-01-15',
      image: '/waterpoint.png'
    },
    {
      title: 'Successful Diabetes Screening Campaign',
      summary: 'Over 200 community members screened for diabetes, with 15 cases detected early and referred for treatment.',
      date: '2025-01-10',
      image: '/diabetescampaign.png'
    },
    {
      title: 'Tree Planting Initiative Launches',
      summary: 'Environmental conservation program begins with goal to plant 2,000 trees across both operational wards.',
      date: '2025-01-05',
      image: 'data:image/jpeg;base64,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'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6994820/pexels-photo-6994820.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Community health work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Biotisho Kilimanjaro
            <span className="block text-teal-400">Health is Wealth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering communities in Kajiado County through WASH, NCDs prevention and enviromental restoration programs-one household at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/get-involved"
              className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Involved <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="stats-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counters.people.toLocaleString()}+</div>
              <div className="text-gray-600 font-medium">People Reached</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counters.waterPoints}+</div>
              <div className="text-gray-600 font-medium">Water Points</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counters.trees.toLocaleString()}+</div>
              <div className="text-gray-600 font-medium">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{counters.screenings.toLocaleString()}+</div>
              <div className="text-gray-600 font-medium">NCDs Screenings</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Building Healthier Communities Through Local Action
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Biotisho Kilimanjaro CBO was founded by trained community health promoters who identified critical gaps in healthcare delivery. We bridge the gap between communities and formal health facilities, focusing on prevention and early intervention.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Operating in Imbirikani/Eselenkei and Entonet/Lenkisim wards, we're committed to creating sustainable health solutions that empower communities to take ownership of their well-being.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Read Our Full Story <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/foundation.jpg"
                alt="Community health workers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-teal-600">2017</div>
                <div className="text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We concentrate our efforts on critical areas that have the greatest impact on community health outcomes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-3 rounded-xl shadow-md mr-4">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                      <p className="text-gray-600">{area.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                  <Link 
                    to="/our-work"
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Community Voices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from community members whose lives have been positively impacted by our programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our work and help us create healthier communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {getInvolvedOptions.map((option, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-50 transition-colors">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <Link 
                  to="/get-involved"
                  className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors"
                >
                  {option.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our recent activities and impact in the community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.summary}</p>
                  <Link 
                    to="/resources"
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                  >
                    Read More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;