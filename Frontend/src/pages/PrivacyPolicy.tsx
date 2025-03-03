import React from 'react';
import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 px-6 py-8 md:px-10 md:py-12 text-white">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-blue-100">
              Last updated: June 15, 2025
            </p>
          </div>
          
          <div className="px-6 py-8 md:px-10 md:py-12">
            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                At NeuroDetect, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Register for an account</li>
                <li>Upload audio files for analysis</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include your name, email address, phone number, and other contact details.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Health Information</h3>
              <p className="text-gray-600 mb-4">
                When you upload audio files for analysis, we collect and process speech data that may be considered health information. This data is used to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Analyze speech patterns for potential signs of Huntington Disease</li>
                <li>Generate reports and recommendations</li>
                <li>Improve our AI models and algorithms</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Technical Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information when you visit our website or use our platform, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage patterns and interactions</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-blue-600" />
                How We Use Your Information
              </h2>
              
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Providing and maintaining our services</li>
                <li>Processing and analyzing audio files</li>
                <li>Communicating with you about our services</li>
                <li>Improving our AI models and algorithms</li>
                <li>Complying with legal obligations</li>
                <li>Detecting and preventing fraud or abuse</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2 text-blue-600" />
                Data Security
              </h2>
              
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Compliance with industry standards and regulations</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Sharing and Disclosure</h2>
              
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Healthcare providers authorized by you</li>
                <li>Service providers who help us operate our platform</li>
                <li>Research partners (in anonymized or aggregated form)</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information to third parties.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="text-gray-600 mb-4">
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              
              <p className="text-gray-600 mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>NeuroDetect, Inc.</strong><br />
                  123 Medical Center Dr<br />
                  Boston, MA 02115<br />
                  United States<br /><br />
                  <strong>Email:</strong> privacy@neurodetect.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;