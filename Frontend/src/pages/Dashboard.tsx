import React, { useState, useEffect } from 'react';
import { FileAudio, Upload, AlertCircle, CheckCircle, Info, Download, Trash2, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';
import { useUser } from '../context/UserContext';

interface AnalysisResult {
  id: number;
  date: string;
  filename: string;
  result: string;
  confidence?: number;
}

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [resultClass, setResultClass] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [uploadHistory, setUploadHistory] = useState<AnalysisResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterType, setFilterType] = useState<'all' | 'positive' | 'negative'>('all');
  const [isDragging, setIsDragging] = useState(false);

  // Simulate fetching user's analysis history
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data
        const mockHistory: AnalysisResult[] = [
          { id: 1, date: '2025-04-15', filename: 'patient_recording_1.wav', result: 'Negative', confidence: 92 },
          { id: 2, date: '2025-04-10', filename: 'patient_recording_2.wav', result: 'Positive', confidence: 87 },
          { id: 3, date: '2025-03-28', filename: 'patient_recording_3.wav', result: 'Negative', confidence: 95 },
          { id: 4, date: '2025-03-15', filename: 'patient_recording_4.wav', result: 'Positive', confidence: 78 },
          { id: 5, date: '2025-02-22', filename: 'patient_recording_5.wav', result: 'Negative', confidence: 91 }
        ];
        
        setUploadHistory(mockHistory);
      } catch (error) {
        toast.error('Failed to load analysis history');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchHistory();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
      setResultClass(null);
      setConfidence(null);
      toast.success(`File "${e.target.files[0].name}" selected`);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const fileType = droppedFile.type;
      
      if (fileType.includes('audio')) {
        setFile(droppedFile);
        setResult(null);
        setResultClass(null);
        setConfidence(null);
        toast.success(`File "${droppedFile.name}" selected`);
      } else {
        toast.error('Please select an audio file');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please select an audio file');
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Simulate API call with progress updates
      toast.loading('Processing audio file...', { id: 'upload' });
      
      // Simulate processing steps
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.loading('Analyzing speech patterns...', { id: 'upload' });
      
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.loading('Applying neural network model...', { id: 'upload' });
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simulate random result for demo purposes
      const randomResult = Math.random() > 0.5 ? 'Positive' : 'Negative';
      const randomConfidence = Math.floor(Math.random() * 20) + 75; // 75-95%
      
      setResultClass(randomResult);
      setResult(`Prediction: ${randomResult}`);
      setConfidence(randomConfidence);
      
      // Add to history
      const newEntry: AnalysisResult = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        filename: file.name,
        result: randomResult,
        confidence: randomConfidence
      };
      
      setUploadHistory([newEntry, ...uploadHistory]);
      toast.success('Analysis completed successfully', { id: 'upload' });
      
      // Animate the result appearance
      document.getElementById('result-container')?.classList.add('animate-pulse');
      setTimeout(() => {
        document.getElementById('result-container')?.classList.remove('animate-pulse');
      }, 1000);
      
    } catch (error) {
      toast.error('Failed to analyze the audio file', { id: 'upload' });
    } finally {
      setIsUploading(false);
    }
  };

  const deleteHistoryItem = (id: number) => {
    // Confirm before deleting
    if (window.confirm('Are you sure you want to delete this analysis?')) {
      setUploadHistory(uploadHistory.filter(item => item.id !== id));
      toast.success('Analysis deleted');
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredHistory = uploadHistory
    .filter(item => {
      if (filterType === 'all') return true;
      return item.result.toLowerCase() === filterType;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name || 'User'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md animate-fadeIn">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <FileAudio className="h-5 w-5 mr-2 text-blue-600" />
                Audio Analysis
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload audio file
                  </label>
                  <div 
                    className={`border-2 border-dashed ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} 
                    rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-300`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      id="audioFile"
                      name="audio"
                      accept=".wav,.mp3,.ogg,.m4a"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="audioFile" className="cursor-pointer">
                      <Upload className={`h-10 w-10 mx-auto ${isDragging ? 'text-blue-500 animate-bounce' : 'text-gray-400'} transition-colors duration-300`} />
                      <p className="mt-2 text-sm text-gray-600">
                        {file ? file.name : 'Drag and drop your audio file here, or click to browse'}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Supported formats: WAV, MP3, OGG, M4A (Max 10MB)
                      </p>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!file || isUploading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isUploading ? (
                    <span className="flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                      Analyzing...
                    </span>
                  ) : (
                    'Analyze Audio'
                  )}
                </button>
              </form>
              
              {result && (
                <div 
                  id="result-container"
                  className={`mt-6 p-4 rounded-md ${resultClass === 'Positive' ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'} 
                  transition-all duration-500 animate-fadeIn`}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {resultClass === 'Positive' ? (
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                    </div>
                    <div className="ml-3 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">{result}</h3>
                        <span className="text-sm font-medium">
                          Confidence: {confidence}%
                        </span>
                      </div>
                      <div className="mt-2 text-sm">
                        <p>
                          {resultClass === 'Positive'
                            ? 'The analysis indicates potential signs of Huntington Disease. We recommend consulting with a healthcare professional for further evaluation.'
                            : 'The analysis does not indicate signs of Huntington Disease. Regular check-ups are still recommended.'}
                        </p>
                      </div>
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${resultClass === 'Positive' ? 'bg-red-600' : 'bg-green-600'}`} 
                            style={{ width: `${confidence}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button 
                          onClick={() => setShowDetails(!showDetails)}
                          className="text-sm flex items-center font-medium hover:underline"
                        >
                          {showDetails ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-1" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-1" />
                              Show Details
                            </>
                          )}
                        </button>
                        
                        {showDetails && (
                          <div className="mt-3 text-sm border-t pt-3 animate-fadeIn">
                            <p className="mb-2">
                              <strong>Analysis Details:</strong>
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Speech rhythm analysis: {Math.random() > 0.5 ? 'Normal' : 'Irregular'}</li>
                              <li>Pronunciation clarity: {Math.floor(Math.random() * 30) + 70}%</li>
                              <li>Voice tremor detection: {Math.random() > 0.5 ? 'Present' : 'Not detected'}</li>
                              <li>Speech rate: {Math.floor(Math.random() * 50) + 100} words per minute</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Info Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 transition-all duration-300 hover:shadow-md animate-fadeIn">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Information
              </h2>
              <div className="text-sm text-gray-600 space-y-4">
                <p>
                  Our AI model analyzes speech patterns to detect potential signs of Huntington Disease.
                </p>
                <p>
                  For best results:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="transition-transform duration-200 hover:translate-x-1">Use clear audio recordings</li>
                  <li className="transition-transform duration-200 hover:translate-x-1">Ensure the recording is at least 30 seconds long</li>
                  <li className="transition-transform duration-200 hover:translate-x-1">Record in a quiet environment</li>
                  <li className="transition-transform duration-200 hover:translate-x-1">Use natural speech patterns</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  Note: This tool is meant to assist healthcare professionals and should not replace proper medical diagnosis.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md animate-fadeIn">
              <h2 className="text-lg font-semibold mb-4 text-blue-800">Need Help?</h2>
              <p className="text-sm text-blue-700 mb-4">
                Our team of experts is available to assist you with any questions or concerns.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Contact Support
                <svg className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* History Section */}
        <div className="mt-8 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-lg font-semibold flex items-center">
                <FileAudio className="h-5 w-5 mr-2 text-blue-600" />
                Analysis History
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
                <div className="flex items-center">
                  <label htmlFor="filter" className="mr-2 text-sm text-gray-600">Filter:</label>
                  <select 
                    id="filter"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="all">All Results</option>
                    <option value="positive">Positive Only</option>
                    <option value="negative">Negative Only</option>
                  </select>
                </div>
                
                <button 
                  onClick={toggleSortOrder}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300"
                >
                  {sortOrder === 'desc' ? (
                    <>
                      <ChevronDown className="h-4 w-4 mr-1" />
                      Newest First
                    </>
                  ) : (
                    <>
                      <ChevronUp className="h-4 w-4 mr-1" />
                      Oldest First
                    </>
                  )}
                </button>
                
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                  <Download className="h-4 w-4 mr-1" />
                  Export Data
                </button>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <RefreshCw className="h-8 w-8 text-blue-600 animate-spin" />
                <span className="ml-2 text-gray-600">Loading history...</span>
              </div>
            ) : (
              <>
                {filteredHistory.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <FileAudio className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <p>No analysis history found</p>
                    {filterType !== 'all' && (
                      <p className="mt-2 text-sm">Try changing your filter settings</p>
                    )}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            File Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Result
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Confidence
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredHistory.map((item, index) => (
                          <tr 
                            key={item.id} 
                            className="hover:bg-gray-50 transition-colors duration-150"
                            style={{ 
                              animation: `fadeIn 0.3s ease-in-out forwards`,
                              animationDelay: `${index * 0.05}s`,
                              opacity: 0
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.filename}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                item.result === 'Positive' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {item.result}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.confidence ? (
                                <div className="flex items-center">
                                  <span className="mr-2">{item.confidence}%</span>
                                  <div className="w-24 bg-gray-200 rounded-full h-1.5">
                                    <div 
                                      className={`h-1.5 rounded-full ${item.result === 'Positive' ? 'bg-red-600' : 'bg-green-600'}`} 
                                      style={{ width: `${item.confidence}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ) : (
                                'N/A'
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-3">
                                <button className="text-blue-600 hover:text-blue-900 transition-colors duration-300">
                                  View
                                </button>
                                <button className="text-blue-600 hover:text-blue-900 transition-colors duration-300">
                                  Download
                                </button>
                                <button 
                                  onClick={() => deleteHistoryItem(item.id)}
                                  className="text-red-600 hover:text-red-900 transition-colors duration-300"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;