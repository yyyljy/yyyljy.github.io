import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] animate-gradient-shift"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative text-center space-y-6 p-4">
        <h1 className="invisible text-4xl md:text-5xl font-bold mb-4 animate-typing-top overflow-hidden whitespace-nowrap w-[230px] mx-auto text-white">
          안녕하세요
        </h1>
        <h1 className="invisible text-4xl md:text-5xl font-bold mb-4 animate-typing-mid overflow-hidden whitespace-nowrap w-[500px] mx-auto bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          백엔드 개발자
        </h1>
        <h1 className="invisible text-4xl md:text-5xl font-bold mb-4 animate-typing-bottom overflow-hidden whitespace-nowrap w-[500px] mx-auto text-white">
          <span className="text-blue-400">[</span>Jeff
          <span className="text-blue-400">]</span> 입니다
        </h1>

        <div className="animate-fade-in pt-8 flex justify-center space-x-4">
          <a
            href="/projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25"
          >
            프로젝트 보기
          </a>
          <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all shadow-lg hover:shadow-blue-400/25">
            이력서 다운로드
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
