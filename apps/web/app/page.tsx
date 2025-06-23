import React from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  Bell, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  TrendingUp,
  Monitor,
  Smartphone,
  Mail,
  Heart
} from 'lucide-react';
import { Appbar } from '@/components/Appbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-8">
              <Heart className="h-4 w-4 mr-2" />
              100% Free Forever
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Monitor Your Sites
              <br />
              <span className="text-blue-400">Completely Free</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant alerts when your websites go down. Track performance, uptime, and user experience 
              with our comprehensive monitoring platform - no hidden costs, no premium features, just free monitoring for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center">
                Start Monitoring Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Demo
              </button>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No signup required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card needed
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Free forever
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-gray-400">Sites Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2M+</div>
              <div className="text-gray-400">Checks Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-400">Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
              <span className="text-blue-400"> Absolutely Free</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional monitoring tools that keep your business running smoothly - no premium tiers, no limitations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Globe className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Monitoring</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitor from 15+ locations worldwide to ensure your site is accessible from anywhere
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all group">
              <div className="bg-green-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Bell className="h-7 w-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Alerts</h3>
              <p className="text-gray-400 leading-relaxed">
                Get notified via email, SMS, Slack, or webhook the moment something goes wrong
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
              <div className="bg-purple-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <BarChart3 className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Track response times, availability trends, and performance metrics over time
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-yellow-500/50 transition-all group">
              <div className="bg-yellow-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <Clock className="h-7 w-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Status Pages</h3>
              <p className="text-gray-400 leading-relaxed">
                Keep your users informed with beautiful, customizable status pages
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all group">
              <div className="bg-red-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <Monitor className="h-7 w-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Protocol Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitor HTTP/HTTPS, ping, TCP, UDP, and more with custom configurations
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Smartphone className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile App</h3>
              <p className="text-gray-400 leading-relaxed">
                Stay connected on the go with our iOS and Android apps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Beautiful Dashboard
              <span className="text-blue-400"> at Your Fingertips</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get insights at a glance with our intuitive dashboard designed for developers and teams
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Uptime Overview</h3>
                  <div className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    All Systems Operational
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.98%</div>
                <div className="text-sm text-gray-400">Last 30 days</div>
              </div>
              
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Response Time</h3>
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">247ms</div>
                <div className="text-sm text-gray-400">Average response</div>
              </div>
              
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Sites Monitored</h3>
                  <Monitor className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24</div>
                <div className="text-sm text-gray-400">Active monitors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why is UpGuard
              <span className="text-green-400"> Completely Free?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe that reliable uptime monitoring should be accessible to everyone - from solo developers 
              to large enterprises. No hidden costs, no premium features locked away.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Built by developers, for developers. We understand the pain of expensive monitoring tools 
                    and wanted to create something better.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Open Source Philosophy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We believe in transparency and community contribution. Our platform is built with 
                    open source technologies and values.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Compromises</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Free doesn't mean limited. You get the same enterprise-grade features that 
                    paid platforms charge hundreds for.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl p-8 border border-green-500/20">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-4">$0</div>
                <h3 className="text-2xl font-bold mb-4">Forever Free</h3>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Unlimited monitors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Real-time alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Global monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Status pages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Performance analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Mobile apps
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 py-3 rounded-lg transition-all font-semibold">
                  Start Monitoring Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by
              <span className="text-blue-400"> Thousands</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of developers and businesses who trust UpGuard to keep their sites online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "I can't believe this is free! UpGuard saved us thousands in potential revenue loss. The alerts are instant and the dashboard is incredibly intuitive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The global monitoring locations give us confidence that our users worldwide are having a great experience. And it's completely free!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Mike Chen</div>
                  <div className="text-gray-400 text-sm">DevOps Lead, StartupCo</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Simple setup, powerful features, and excellent support. UpGuard is exactly what we needed and the fact that it's free is amazing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Emma Davis</div>
                  <div className="text-gray-400 text-sm">Lead Developer, WebAgency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to
            <span className="text-blue-400"> Never Miss Downtime</span>
            <br />
            Again?
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Join thousands of developers who trust UpGuard to keep their websites online. 
            Start monitoring today – completely free, no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center">
              Start Free Monitoring
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold">UpGuard</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The most reliable uptime monitoring platform for modern businesses. 
                Keep your sites online and your users happy - completely free, forever.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Open Source</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 UpGuard. All rights reserved. Free forever.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;