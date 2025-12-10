'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('Loading...');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Fetch message from NestJS backend
    fetch('http://localhost:3001')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.text();
      })
      .then((data) => setMessage(data))
      .catch(() => {
        setError(true);
        setMessage('Backend not available');
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white p-8 overflow-hidden relative selection:bg-purple-500/30">
        
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[12000ms]"></div>
      </div>

      <main className="z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-2xl w-full">
        <div className="space-y-4 backdrop-blur-3xl bg-white/5 border border-white/10 p-12 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-white/20 hover:scale-[1.02] group">
          
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${error ? 'bg-red-400' : 'bg-green-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${error ? 'bg-red-500' : 'bg-green-500'}`}></span>
            </span>
             {error ? 'System Offline' : 'System Operational'}
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
            {message === 'Hello World' ? (
                <>
                Hello <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">World</span>
                </>
            ) : (
                message
            )}
          </h1>
          
          <p className="text-lg text-neutral-400 font-medium tracking-wide max-w-md mx-auto leading-relaxed">
            A seamless integration between <span className="text-white font-semibold">Next.js</span> and <span className="text-white font-semibold">Nest.js</span>.
          </p>

        </div>
        
        <div className="flex gap-4 text-sm font-medium text-neutral-500">
             <span className="hover:text-white transition-colors cursor-default">• Full Stack</span>
             <span className="hover:text-white transition-colors cursor-default">• Modern UI</span>
             <span className="hover:text-white transition-colors cursor-default">• Responsive</span>
        </div>
      </main>
    </div>
  );
}
