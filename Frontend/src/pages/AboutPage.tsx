import React from 'react';
import { Brain, Award, Users, BookOpen, Microscope, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NeuroDetect</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              We're on a mission to revolutionize Huntington Disease detection through innovative AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                NeuroDetect was founded in 2023 by a team of neurologists, AI researchers, and healthcare professionals with a shared vision: to make early detection of Huntington Disease accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                After years of research and development, we created a revolutionary AI model that can detect subtle speech pattern changes associated with Huntington Disease, often before traditional symptoms appear.
              </p>
              <p className="text-lg text-gray-600">
                Today, our platform is used by healthcare providers around the world, helping to improve patient outcomes through early detection and intervention.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Medical researchers working together" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We're committed to improving the lives of those affected by Huntington Disease through early detection, education, and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research</h3>
              <p className="text-gray-600">
                We continuously improve our AI models through rigorous research and collaboration with leading medical institutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">
                We provide resources and information to help patients, families, and healthcare providers understand Huntington Disease.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                We partner with patient advocacy groups to provide support for those affected by Huntington Disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of experts dedicated to making a difference in the lives of those affected by Huntington Disease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Sarah Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Chief Medical Officer</p>
                <p className="text-gray-600">
                  Neurologist with over 15 years of experience specializing in movement disorders and Huntington Disease.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Michael Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Michael Chen</h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  AI researcher with a PhD in Machine Learning and extensive experience in medical applications of AI.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Emily Rodriguez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emily Rodriguez</h3>
                <p className="text-blue-600 mb-4">Head of Patient Advocacy</p>
                <p className="text-gray-600">
                  Former healthcare administrator with a passion for patient advocacy and improving healthcare access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading healthcare institutions, research organizations, and patient advocacy groups.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/200x80?text=Medical+Center" 
                alt="Boston Medical Center" 
                className="max-h-12"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/200x80?text=Research+Institute" 
                alt="Neuroscience Research Institute" 
                className="max-h-12"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/200x80?text=Foundation" 
                alt="Huntington's Disease Foundation" 
                className="max-h-12"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/200x80?text=Tech+Partner" 
                alt="AI Technologies Inc." 
                className="max-h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a healthcare provider, researcher, or someone affected by Huntington Disease, we invite you to join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-800 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center">
              Partner With Us
            </a>
            <a href="#" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;