import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 mt-auto">
      <div className="container mx-auto px-4" style={{ width: '85%' }}>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className='h-12 text-2xl font-bold text-[#ED7E0D]'>BigFive</p>
          </div>
          <div className="w-full md:w-auto flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-gray-600 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.507v-9.294H9.818V10.59h3.013V8.024c0-2.988 1.793-4.617 4.52-4.617 1.31 0 2.683.235 2.683.235v2.952h-1.512c-1.491 0-1.953.928-1.953 1.877v2.12h3.328l-.532 3.116h-2.796V24h5.488C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.225 0H1.771C.791 0 0 .771 0 1.725v20.549C0 23.23.791 24 1.771 24h20.454C23.205 24 24 23.23 24 22.274V1.725C24 .771 23.205 0 22.225 0zM7.063 20.452H3.56V9.087h3.503v11.365zM5.311 7.606C4.133 7.606 3.158 6.623 3.158 5.449c0-1.175.975-2.158 2.153-2.158s2.153.983 2.153 2.158c0 1.174-.975 2.157-2.153 2.157zM20.452 20.452h-3.502v-5.756c0-1.373-.026-3.137-1.908-3.137-1.91 0-2.201 1.495-2.201 3.033v5.86h-3.501V9.087h3.365v1.549h.048c.468-.889 1.611-1.825 3.314-1.825 3.542 0 4.193 2.331 4.193 5.359v6.282z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-gray-600 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851 0 3.204-.012 3.584-.07 4.85-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.737.127 4.615.399 3.689 1.325c-.926.926-1.198 2.048-1.255 3.363C2.012 5.668 2 6.077 2 9.076c0 2.999.012 3.408.07 4.688.057 1.315.329 2.437 1.255 3.363.926.926 2.048 1.198 3.363 1.255 1.28.057 1.689.07 4.688.07s3.408-.012 4.688-.07c1.315-.057 2.437-.329 3.363-1.255.926-.926 1.198-2.048 1.255-3.363.058-1.28.07-1.689.07-4.688s-.012-3.408-.07-4.688c-.057-1.315-.329-2.437-1.255-3.363-.926-.926-2.048-1.198-3.363-1.255-1.28-.058-1.689-.07-4.688-.07zm0 5.838c-3.403 0-6.162 2.76-6.162 6.163 0 3.403 2.759 6.163 6.162 6.163 3.403 0 6.163-2.76 6.163-6.163 0-3.403-2.76-6.163-6.163-6.163zm0 10.138c-2.191 0-3.975-1.785-3.975-3.975 0-2.191 1.784-3.975 3.975-3.975 2.191 0 3.975 1.784 3.975 3.975 0 2.191-1.784 3.975-3.975 3.975zm6.406-11.845c-.796 0-1.44-.644-1.44-1.44 0-.796.644-1.44 1.44-1.44.796 0 1.44.644 1.44 1.44 0 .796-.644 1.44-1.44 1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube" className="text-gray-600 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.978 2.978 0 00-2.097-2.107C19.494 3.5 12 3.5 12 3.5s-7.494 0-9.401.579a2.978 2.978 0 00-2.097 2.107A31.597 31.597 0 000 12c0 1.985.214 3.917.502 5.814a2.978 2.978 0 002.097 2.107C4.506 20.5 12 20.5 12 20.5s7.494 0 9.401-.579a2.978 2.978 0 002.097-2.107A31.597 31.597 0 0024 12a31.597 31.597 0 00-.502-5.814zM9.546 15.568V8.432l6.81 3.568-6.81 3.568z"/>
              </svg>
            </a>
          </div>
          <div className="w-full md:w-auto text-center md:text-left">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-600">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-center md:text-left text-gray-600">
          <p>© 1999-2024 Big5ive.com All rights reserved.</p>
          <p>浙公网安备 33010002000092号 | 浙B2-20120091-4</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
